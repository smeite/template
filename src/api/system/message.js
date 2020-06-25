import request from '@/plugin/axios/request'

/**
 * 添加一条消息
 * @param {Object} data
 * @returns
 */
export function addMessageItem(data) {
  return request({
    url: '/api/system/message/add',
    method: 'post',
    data
  })
}

/**
 * 编辑一条消息
 * @param {Object} data
 * @returns
 */
export function editMessageItem(data) {
  return request({
    url: '/api/system/message/edit',
    method: 'post',
    data
  })
}

/**
 * 批量删除消息
 * @param {Array} ids
 * @returns
 */
export function deleteMessageList(ids) {
  return request({
    url: '/api/system/message/batchDelete',
    method: 'post',
    data: {
      ids
    }
  })
}

/**
 * 批量正式发布消息
 * @param {Array} ids
 * @returns
 */
export function modifyMessageStatus(ids) {
  return request({
    url: '/api/system/message/modifyStatus',
    method: 'post',
    data: {
      ids
    }
  })
}

/**
 * 获取一条消息(后台)
 * @param {Number} id
 * @returns
 */
export function getMessageItem(id) {
  return request({
    url: '/api/system/message/info',
    method: 'get',
    params: {
      id
    },
  })
}

/**
 * 获取消息列表(后台)
 * @param {Object} data
 * @returns
 */
export function getMessageList(data) {
  return request({
    url: '/api/system/message/list',
    method: 'post',
    params: data
  })
}

/**
 * 用户获取一条消息
 * @param {Number} id
 * @returns
 */
export function getMessageUserItem(id) {
  return request({
    url: '/api/system/member/message/info',
    method: 'get',
    params: {
      id
    },
  })
}

/**
 * 用户获取消息列表
 * @param {Object} data
 * @returns
 */
export function getMessageUserList(data) {
  return request({
    url: '/api/system/member/message/list',
    method: 'get',
    params: data
  })
}

/**
 * 用户获取未读消息数
 * @param {Number} type
 * @returns
 */
export function getMessageUserUnread(type) {
  return request({
    url: '/api/message/unread',
    method: 'post',
    params: {
      method: 'get.message.member.unread'
    },
    data: {
      type
    }
  })
}

/**
 * 用户批量设置消息已读
 * @param {Array} ids
 * @param {Number} type
 * @returns
 */
export function setMessageUserRead(ids, type = null) {
  return request({
    url: '/api/system/member/message/batchRead',
    method: 'post',
    data: {
     ids,
      type
    }
  })
}

/**
 * 用户设置消息全部已读
 * @param {Number} type
 * @returns
 */
export function setMessageUserAllread(type = null) {
  return request({
    url: '/api/system/member/message/allRead',
    method: 'post',
    data: {
      type
    }
  })
}

/**
 * 用户批量删除消息
 * @param {Array} ids
 * @param {Number} type
 * @returns
 */
export function delMessageUserList(ids, type = null) {
  return request({
    url: '/api/system/member/message/batchDelete',
    method: 'post',
    data: {
      ids,
      type
    }
  })
}

/**
 * 用户删除全部消息
 * @param {Number} type
 * @returns
 */
export function delMessageUserAll(type = null) {
  return request({
    url: '/api/system/member/message/allDelete',
    method: 'post',
    data: {
      type
    }
  })
}
