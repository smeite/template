<template>
  <el-dropdown class="cs-mr" :show-timeout="50">
    <span class="btn-text">
      <el-badge :hidden="!unreadMessage" :value="unreadMessage" :max="99">
        {{info.name ? `您好 ${info.name}` : '未登录'}}
      </el-badge>
    </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item @click.native="$open('/')" icon="el-icon-link">打开前台</el-dropdown-item>
      <el-dropdown-item @click.native="resetMenu" icon="el-icon-refresh">重载菜单</el-dropdown-item>
      <el-dropdown-item @click.native="clearHistory" icon="el-icon-time">清空历史</el-dropdown-item>
      <el-dropdown-item v-if="auth.cache" @click.native="clearCache" icon="el-icon-delete">清除缓存</el-dropdown-item>
      <el-dropdown-item v-if="auth.optimize" @click.native="systemOptimize" icon="el-icon-finished">优化系统</el-dropdown-item>
      <el-dropdown-item divided @click.native="handleCreate" icon="el-icon-key">修改密码</el-dropdown-item>
      <el-dropdown-item v-if="auth.unread" @click.native="handleMessage" icon="el-icon-bell">
        <span>未读消息</span>
        <el-badge :hidden="!unreadMessage" :value="unreadMessage" :max="99"/>
      </el-dropdown-item>
      <el-dropdown-item divided @click.native="logOff" icon="el-icon-switch-button">退出账号</el-dropdown-item>
    </el-dropdown-menu>

    <el-dialog
      title="修改密码"
      width="600px"
      :visible.sync="dialogVisible"
      :append-to-body="true"
      :close-on-click-modal="false">
      <el-form
        :model="form"
        :rules="rules"
        ref="dataForm"
        label-width="80px">
        <el-form-item
          label="原始密码"
          prop="passwordOld">
          <el-input
            v-model="form.passwordOld"
            @keyup.enter.native="setPassword()"
            type="password"
            placeholder="原始密码"
            :clearable="true"/>
        </el-form-item>
        <el-form-item
          label="新密码"
          prop="password">
          <el-input
            v-model="form.password"
            @keyup.enter.native="setPassword()"
            type="password"
            placeholder="新密码"
            :clearable="true"/>
        </el-form-item>
        <el-form-item
          label="确认密码"
          prop="passwordConfirm">
          <el-input
            v-model="form.passwordConfirm"
            @keyup.enter.native="setPassword()"
            type="password"
            placeholder="确认密码"
            :clearable="true"/>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button
          @click.native="dialogVisible = false"
          size="small">取消</el-button>

        <el-button
          type="primary"
          :loading="dialogLoading"
          @click.native="setPassword"
          size="small">确定</el-button>
      </div>
    </el-dialog>
  </el-dropdown>
</template>

<script>
import menu from '@/menu'
import util from '@/utils/util'
import { mapState, mapActions } from 'vuex'
import { clearCacheAll, setSystemOptimize } from '@/api/index'


import {modifyManagerPassword,getManagerMenuList,getManagerUnreadMessage} from "@/api/system/auth/manager";

export default {
  data() {
    return {
      timer: null,
      dialogVisible: false,
      dialogLoading: false,
      form: {
        password: '',
        passwordConfirm: '',
        passwordOld: ''
      },
      auth: {
        cache: false,
        optimize: false,
        unread: false
      },
      rules: {
        password: [
          {
            required: true,
            message: '新密码不能为空',
            trigger: 'blur'
          },
          {
            min: 6,
            message: '长度不能少于 6 个字符',
            trigger: 'blur'
          }
        ],
        passwordConfirm: [
          {
            required: true,
            message: '确认密码不能为空',
            trigger: 'blur'
          },
          {
            min: 6,
            message: '长度不能少于 6 个字符',
            trigger: 'blur'
          }
        ],
        passwordOld: [
          {
            required: true,
            message: '原始密码不能为空',
            trigger: 'blur'
          },
          {
            min: 6,
            message: '长度不能少于 6 个字符',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  computed: {
    ...mapState('shouwang/user', [
      'info',
      'unreadMessage'
    ])
  },
  mounted() {
    this._validationAuth()
    this.getMessageUnread()
    this.timer = setInterval(this.getMessageUnread, 1000 * 60 * 5)
  },
  methods: {
    ...mapActions('shouwang/account', [
      'logout'
    ]),
    ...mapActions('shouwang/menu', [
      'historyClear'
    ]),
    /**
     * 权限检测
     */
    _validationAuth() {
      this.auth.cache = this.$permission('/index/help/cache')
      this.auth.optimize = this.$permission('/index/help/optimize')
      this.auth.unread = this.$permission('/system/message/unread')
    },
    /**
     * 获取未读消息数
     */
    getMessageUnread() {
      if (!this.auth.unread) {
        return
      }

      getManagerUnreadMessage(null)
        .then(res => {
          if (res.data.total > this.unreadMessage) {
            const h = this.$createElement
            this.$notify.info({
              title: '消息提示',
              message: h('p', { class: 'cs-cp' }, '您有新的消息，请注意查收。'),
              position: 'bottom-right',
              onClick: () => { this.handleMessage() }
            })
          }

          this.$store.commit('shouwang/user/setMessage', res.data.total)
        })
    },

    /**
     * @description 登出
     */
    logOff() {
      this.logout({
        vm: this,
        confirm: true
      })
    },
    /**
     * 清除历史
     */
    async clearHistory() {
      await this.historyClear()
      if (this.$route.path === '/index') {
        await this.$router.replace('/refresh')
      }

      this.$message.success('左侧访问历史栏已清空')
    },
    /**
     * 清空缓存
     */
    clearCache() {
      const loading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      })

      clearCacheAll()
        .then(() => {
          this.$message.success('缓存更新成功')
        })
        .finally(() => {
          loading.close()
        })
    },
    /**
     * 最优设置
     */
    systemOptimize() {
      const loading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      })

      setSystemOptimize()
        .then(() => {
          this.$message.success('已调至最优状态')
        })
        .finally(() => {
          loading.close()
        })
    },
    /**
     * 初始化成员变量
     */
    resetTemp() {
      this.dialogLoading = false
      this.form = { password: '', passwordConfirm: '', passwordOld: '' }
    },
    /**
     * 创建修改密码对话框
     */
    handleCreate() {
      this.resetTemp()
      this.dialogVisible = true
      this.$nextTick(() => {
        this.$refs.dataForm.clearValidate()
      })
    },
    /**
     * 修改密码
     */
    setPassword() {
      this.$refs.dataForm.validate(valid => {
        if (valid) {
          this.dialogLoading = true
          const request = {
            client_id: this.info.admin.admin_id,
            password_old: this.form.passwordOld,
            password: this.form.password,
            password_confirm: this.form.passwordConfirm
          }

          modifyManagerPassword(request)
            .then(() => {
              this.dialogVisible = false
              this.$message.success('密码修改成功')
            })
            .catch(() => {
              this.dialogLoading = false
            })
        }
      })
    },
    /**
     * 打开未读消息
     */
    handleMessage() {
      this.$router.push({ name: 'system-message-user' })
    },
    /**
     * 重新载入菜单
     */
    async resetMenu() {
      const res = await getManagerMenuList(null)
      await this.$store.dispatch('shouwang/db/set', {
        dbName: 'database',
        path: '$menu.sourceData',
        value: res.data || [],
        user: true
      })

      // 重新初始化菜单数据
      menu.install(this.$store, res.data || [])

      /**
       * 清空页面缓存设置，将导致页面上的缓存数据丢失，但会实时载入权限
       * 如果将其注释，那么已打开页面需要关闭之后，在下次打开页面时生效。
       * 请根据实际需要而自行选择
       */
      this.$store.commit('shouwang/page/keepAliveClean')

      await this.$router.replace('/refresh')
      this.$message.success('菜单(包括权限)已重新载入')
    }
  },
  beforeDestroy() {
    // 清理定时任务
    if (this.timer) {
      clearInterval(this.timer)
    }

    // 清理当前账号未读消息数
    this.$store.commit('shouwang/user/setMessage', 0)
  }
}
</script>
