import request from '@/plugin/axios/request'

/**
 * 添加
 * @param {Object} data
 * @returns
 */
export function addWorkerItem(data) {
  return request({
    url: '/api/system/worker/add',
    method: 'post',
    data
  })
}

/**
 * 编辑
 * @param {Object} data
 * @returns
 */
export function editWorkerItem(data) {
  return request({
    url: '/api/system/worker/edit',
    method: 'post',
    data
  })
}

/**
 * 批量删除
 * @param {Array} ids
 * @returns
 */
export function deleteWorkerList(ids) {
  return request({
    url: '/api/system/worker/batchDelete',
    method: 'post',
    data: {
      ids
    }
  })
}

/**
 * 获取
 * @param {Number} id
 * @returns
 */
export function getWorkerItem(id) {
  return request({
    url: '/api/system/worker/info',
    method: 'get',
    params: {
      id
    }
  })
}

/**
 * 获取列表
 * @param {Object} data
 * @returns
 */
export function getWorkerList(data) {
  return request({
    url: '/api/system/worker/list',
    method: 'get',
    params: data
  })
}

/**
 * 批量设置置顶
 * @param {Array} ids
 * @param {Number} is_top
 * @returns
 */
export function modifyWorkerLatence(ids, is_top) {
  return request({
    url: '/api/system/worker/modifyLatence',
    method: 'post',
    data: {
      ids,
      is_top
    }
  })
}

/**
 * 批量设置置顶
 * @param {Array} ids
 * @param {Number} is_top
 * @returns
 */
export function modifyWorkerTop(ids, is_top) {
  return request({
    url: '/api/system/worker/modifyTop',
    method: 'post',
    data: {
      ids,
      is_top
    }
  })
}

/**
 * 批量设置是否显示
 * @param {Array} ids
 * @param {Number} status
 * @returns
 */
export function modifyWorkerStatus(ids, status) {
  return request({
    url: '/api/system/worker/modifyStatus',
    method: 'post',
    data: {
      ids,
      status
    }
  })
}

/**
 * 手动执行
 * @param {number} id
 * @param {number} worker_type
 * @returns
 */
export function handExecute(id, worker_type) {
  return request({
    url: '/api/system/worker/handExecute',
    method: 'post',
    data: {
      id,
      worker_type
    }
  })
}

