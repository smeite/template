import util from '@/utils/util'
import { loginManager, logoutManager } from '@/api/system/auth/manager'

export default {
  namespaced: true,
  actions: {
    /**
     * @description 登录
     * @param {Object} payload dispatch
     * @param {Object} payload login 登录数据
     * @param {Object} payload remember 是否保持登录
     */
    async login({ dispatch }, { login, remember }) {

      // 请求登录
      const res = await loginManager(login)

      // 设置用户数据
      let cookieSetting = remember ? { expires: 365 } : { expires: null }
      util.cookies.set('uuid', res.data.token.uuid, cookieSetting)
      util.cookies.set('token', res.data.token.token, cookieSetting)
      util.cookies.set('block', 'false', cookieSetting)

      // 设置 vuex 用户信息
      await dispatch('shouwang/user/set', {
        name: res.data.manager.name,
        admin: res.data.manager,
        token: res.data.token
      }, { root: true })

      // 用户登录后从持久化数据加载一系列的设置
      await dispatch('load')
    },
    /**
     * @description 注销用户并返回登录页面
     * @param {Object} payload dispatch
     * @param {Object} payload vm {Object} vue 实例
     * @param {Object} payload confirm {Boolean} 是否需要确认
     */
    logout({ dispatch }, { vm, confirm = false }) {
      // 加载遮罩
      let loading = null

      // 实际注销操作
      function logout() {
        util.cookies.set('block', 'true')
        logoutManager()
          .finally(() => {
            // 删除sourceData
            dispatch('shouwang/db/set', {
              dbName: 'database',
              path: '$menu.sourceData',
              value: [],
              user: true
            }, { root: true })

            // 删除info
            dispatch('shouwang/user/set', {}, { root: true })

            // 删除cookie
            util.cookies.remove('token')
            util.cookies.remove('uuid')

            // 刷新页面
            loading && loading.close()
            vm.$router.replace('/login')
          })
          .catch(() => {
          })
      }

      if (!confirm) {
        logout()
        return
      }

      vm.$confirm('确定要执行注销操作吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        closeOnClickModal: false
      })
        .then(() => {
          loading = vm.$loading({
            lock: true,
            text: 'Loading',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
          })

          logout()
        })
        .catch(() => {
        })
    },
    /**
     * @description 用户登录后从持久化数据加载一系列的设置
     * @param {Object} context
     */
    async load({ dispatch }) {
      // DB -> store 加载用户数据
      await dispatch('shouwang/user/load', null, { root: true })
      // DB -> store 加载主题
      await dispatch('shouwang/theme/load', null, { root: true })
      // DB -> store 加载页面过渡效果设置
      await dispatch('shouwang/transition/load', null, { root: true })
      // DB -> store 持久化数据加载上次退出时的多页列表
      await dispatch('shouwang/page/openedLoad', null, { root: true })
      // DB -> store 持久化数据加载侧边栏设置
      await dispatch('shouwang/menu/asideLoad', null, { root: true })
      // DB -> store 持久化数据加载全局尺寸
      await dispatch('shouwang/size/load', null, { root: true })
      // DB -> store 持久化数据读取菜单源数据
      await dispatch('shouwang/menu/sourceDataLoad', null, { root: true })
      // DB -> store 持久化数据读取历史菜单数据
      await dispatch('shouwang/menu/historyLoad', null, { root: true })
    }
  }
}
