<template>
  <el-form class="login-form" status-icon :rules="loginRules" ref="loginForm" :model="loginForm" label-width="0" size="default">
    <el-form-item prop="phone">
      <el-input size="small" @keyup.enter.native="handleLogin()" v-model="loginForm.phone" auto-complete="off" placeholder="请输入账号">
        <i slot="prefix" class="el-icon-user"/>
      </el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input size="small" @keyup.enter.native="handleLogin()" :type="passwordType" v-model="loginForm.password" auto-complete="off" placeholder="请输入密码">
        <i class="el-icon-view el-input__icon" slot="suffix" @click="showPassword"/>
        <i slot="prefix" class="el-icon-key"/>
      </el-input>
    </el-form-item>

    <el-checkbox v-model="remember">保持登录</el-checkbox>
    <el-form-item>
      <el-button
        type="primary"
        size="small"
        :loading="loading"
        @click.native.prevent="handleLogin"
        class="login-submit">登 录
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import util from '@/utils/util'
import { mapActions } from 'vuex'


export default {
  name: 'loginbox',
  data() {
    return {
      remember: false,
      loading: false,
      passwordType: 'password',
      loginForm: {
        phone: '',
        password: '',
      },
      loginRules: {
        phone: [
          { required: true, message: '请输入账号', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, message: '密码长度最少为6位', trigger: 'blur' }
        ]
      }
    }
  },
  mounted() {


  },
  methods: {
    ...mapActions('shouwang/account', [
      'login'
    ]),

    /**
     * @description 是否显示实际密码
     */
    showPassword() {
      this.passwordType = !this.passwordType ? 'password' : ''
    },
    /**
     * @description 正式登录
     */
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true


          this.login({
            login: this.loginForm,
            remember: this.remember
          })
            .then(() => {
              this.$router.replace(this.$route.query.redirect || '/')
            })
            .catch(() => {
              util.cookies.remove('token')
              util.cookies.remove('uuid')
              this.loading = false
            })
        }
      })
    }
  }
}
</script>
