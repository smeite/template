import setting from '@/setting'

export default {
  namespaced: true,
  state: {
    // 是否开启页面过度动画
    active: setting.transition.active
  },
  actions: {
    /**
     * @description 设置开启状态
     * @param context
     * @param dispatch
     * @param active  新的状态
     * @returns {Promise<void>}
     */
    async set({ state, dispatch }, active) {
      // store 赋值
      state.active = active
      // 持久化
      await dispatch('shouwang/db/set', {
        dbName: 'sys',
        path: 'transition.active',
        value: state.active,
        user: true
      }, { root: true })
    },
    /**
     * @description 从数据库读取页面过渡动画设置
     * @param context
     * @param dispatch
     * @returns {Promise<void>}
     */
    async load({ state, dispatch }) {
      // store 赋值
      state.active = await dispatch('shouwang/db/get', {
        dbName: 'sys',
        path: 'transition.active',
        defaultValue: setting.transition.active,
        user: true
      }, { root: true })
    }
  }
}
