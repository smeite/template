import request from '@/plugin/axios/request'

/**
 * 添加一个角色
 * @param {Object} data
 * @returns
 */
export function addRoleItem(data) {
  return request({
    url: '/api/system/role/add',
    method: 'post',
    data
  })
}

/**
 * 编辑一个角色
 * @param {Object} data
 * @returns
 */
export function editRoleItem(data) {
  return request({
    url: '/api/system/role/edit',
    method: 'post',
    params: {
      method: 'set.auth.group.item'
    },
    data
  })
}

/**
 * 获取一个角色
 * @param {Number} id
 * @returns
 */
export function getRoleItem(id) {
  return request({
    url: '/api/system/role/info',
    method: 'get',
    params: {
     id
    },
  })
}

/**
 * 删除一个角色
 * @param {number} ids
 * @returns
 */
export function deleteRoleItem(id) {
  return request({
    url: '/api/system/role/delete',
    method: 'post',
    data: {
      id
    }
  })
}

/**
 * 批量删除角色
 * @param {Array} ids
 * @returns
 */
export function deleteRoleList(ids) {
  return request({
    url: '/api/system/role/batchDelete',
    method: 'post',
    data: {
      ids
    }
  })
}

/**
 * 获取角色列表
 * @param {Object} data
 * @returns
 */
export function getRoleList(data) {
  return request({
    url: '/api/system/role/list',
    method: 'get',
    params: data
  })
}

/**
 * 批量设置角色状态
 * @param {Array} group_id
 * @param {Number} status
 * @returns
 */
export function modifyRoleStatus(ids, status) {
  return request({
    url: '/api/system/role/modifyStatus',
    method: 'post',
    data: {
      ids,
      status
    }
  })
}

/**
 * 设置角色排序值
 * @param {Number} group_id
 * @param {Number} sort
 * @returns
 */
export function modifyRoleSort(id, sort) {
  return request({
    url: '/api/system/role/modifySort',
    method: 'post',
    data: {
      id,
      sort
    }
  })
}
