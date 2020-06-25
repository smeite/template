import request from '@/plugin/axios/request'

/**
 * 账号登录，并且获取授权码
 * @param {String} phone
 * @param {String} password
 * @returns
 */
export function loginManager(data) {
  return request({
    url: '/public/manager/login',
    method: 'post',
    data: {
     ...data
    }
  })
}

/**
 * 注销当前已登录的账号
 * @returns
 */
export function logoutManager() {
  return request({
    url: '/api/system/manager/logout',
    method: 'post',
  })
}
//获取到manager对应的菜单
export  function getManagerMenuList(){
  return request({
    url: '/api/system/manager/menu',
    method: 'get',
  })
}

/**
 * 修改一个账号密码
 * @param {Object} data
 * @returns
 */
export function modifyManagerPassword(data) {
  return request({
    url: '/api/system/manager/modifyPassword',
    method: 'post',
    data
  })
}

/**
 *  验证账号是否合法
 * @param {String} phone
 * @returns
 */
export function checkManagerPhone(phone) {
  return request({
    url: '/api/system/manager/checkPhone',
    method: 'post',
    params: {
      phone
    },
    data: {
      phone
    }
  })
}

/**
 * 验证姓名是否合法
 * @param {String} name
 * @returns
 */
export function checkManagerName(name) {
  return request({
    url: '/api/system/manager/checkName',
    method: 'post',
    params: {
      name
    },
    data: {
      name
    }
  })
}

/**
 * 添加一个账号
 * @param {Object} data
 * @returns
 */
export function addManagerItem(data) {
  return request({
    url: '/api/system/manager/add',
    method: 'post',
    data
  })
}

/**
 * 编辑一个账号
 * @param {Object} data
 * @returns
 */
export function editManagerItem(data) {
  return request({
    url: '/api/system/manager/edit',
    method: 'post',
    data
  })
}

/**
 * 批量设置账号状态
 * @param {Array} ids
 * @param {Number} status
 * @returns
 */
export function modifyManagerStatus(ids, status) {
  return request({
    url: '/api/system/manager/modifyStatus',
    method: 'post',
    data: {
      ids,
      status
    }
  })
}

/**
 * 重置一个账号密码
 * @param {Number} id
 * @returns
 */
export function resetManagerPassword(id) {
  console.log("reset manager password",id)
  return request({
    url: '/api/system/manager/resetPassword',
    method: 'post',
    data: {
      id
    }
  })
}

/**
 * 批量删除账号
 * @param {Array} ids
 * @returns
 */
export function deleteManagerList(ids) {
  return request({
    url: '/api/system/manager/delete',
    method: 'post',
    data: {
      ids
    }
  })
}

/**
 * 获取一个账号
 * @param {Number} id
 * @returns
 */
export function getManagerItem(id) {
  return request({
    url: '/api/system/manager/info',
    method: 'get',
    params: {
      id
    },
  })
}

/**
 * 获取账号列表
 * @param {Object} data
 * @returns
 */
export function getManagerList(data) {
  return request({
    url: '/api/system/manager/list',
    method: 'get',
    params: data
  })
}

/**
 * 用户获取未读消息数
 * @param {Number} type
 * @returns
 */
export function getManagerUnreadMessage(type) {
  return request({
    url: '/api/system/manager/unreadMessage',
    method: 'get',
    params:{
      type
    }
  })
}
