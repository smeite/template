import request from '@/plugin/axios/request'

/**
 * 获取一条操作日志
 * @param {Number} id
 * @returns
 */
export function getLogItem(id) {
  return request({
    url: '/api/system/log/info',
    method: 'get',
    params: {
      id
    },
  })
}

/**
 * 获取操作日志列表
 * @param {Object} data
 * @returns
 */
export function getLogList(data) {
  return request({
    url: '/api/system/log/list',
    method: 'get',
    params:data

  })
}
