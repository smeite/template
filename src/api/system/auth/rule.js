import request from '@/plugin/axios/request'

/**
 * 添加一条规则
 * @param {Object} data
 * @returns
 */
export function addRuleItem(data) {
  return request({
    url: '/api/system/rule/add',
    method: 'post',
    data
  })
}

/**
 * 获取一条规则
 * @param {Number} rule_id
 * @returns
 */
export function getRuleItem(rule_id) {
  return request({
    url: '/api/system/rule/info',
    method: 'get',
    params: {
      id: rule_id
    },
    data: {
      rule_id
    }
  })
}

/**
 * 编辑一条规则
 * @param {Object} data
 * @returns
 */
export function editRuleItem(data) {
  return request({
    url: '/api/system/rule/edit',
    method: 'post',
    data
  })
}

/**
 * 批量删除规则
 * @param {Array} ids
 * @returns
 */
export function deleteRuleList(ids) {
  return request({
    url: '/api/system/rule/batchDelete',
    method: 'post',
    data: {
      ids
    }
  })
}

/**
 * 获取规则列表
 * @param {Object} data
 * @returns
 */
export function getRuleList(data) {
  return request({
    url: '/api/system/rule/list',
    method: 'get',
    data
  })
}

/**
 * 批量设置规则状态
 * @param {Array} ids
 * @param {Number} status
 * @returns
 */
export function modifyRuleStatus(ids, status) {
  return request({
    url: '/api/system/rule/modifyStatus',
    method: 'post',
    data: {
      ids,
      status
    }
  })
}

/**
 * 设置规则排序
 * @param {Number} id
 * @param {Number} sort
 * @returns
 */
export function modifyRuleSort(id, sort) {
  return request({
    url: '/api/system/rule/modifySort',
    method: 'post',
    data: {
      id,
      sort
    }
  })
}

/**
 * 根据编号自动设置排序值
 * @param {Array} ids
 * @returns
 */
export function modifyRuleIndex(ids) {
  return request({
    url: '/api/system/rule/modifyIndex',
    method: 'post',
    data: {
      ids
    }
  })
}
