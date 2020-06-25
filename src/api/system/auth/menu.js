import request from '@/plugin/axios/request'

/**
 *  获取菜单所属模块
 * @returns {Promise<any>}
 * */
export  function getModuleList(){
  return request({
    url:'/api/system/menu/module',
    method:'get'
  })
}



/**
 * 获取菜单列表
 * @param {Object} data
 * @returns
 */
export function getMenuList(data) {
  return request({
    url: '/api/system/menu/list',
    method: 'get',
    params: {
      ...data
    },
    data
  })
}



/**
 * 获取一个菜单
 * @param {Number} id
 * @returns
 */
export function getMenuItem(id) {
  return request({
    url: '/api/system/menu/info',
    method: 'post',
    params: {
      id: id
    }
  })
}

/**
 * 添加一个菜单
 * @param {Object} data
 * @returns
 */
export function addMenuItem(data) {
  return request({
    url: '/api/system/menu/add',
    method: 'post',
    data
  })
}

/**
 * 编辑一个菜单
 * @param {Object} data
 * @returns
 */
export function editMenuItem(data) {
  return request({
    url: '/api/system/menu/edit',
    method: 'post',
    data
  })
}

/**
 * 删除一个菜单，如果当前菜单存在子级，那么所有的子级也将被删除
 * @param {Number} id
 * @returns
 */
export function deleteMenuItem(id) {
  return request({
    url: '/api/system/menu/delete',
    method: 'post',
    data: {
      id
    }
  })
}


/**
 * 根据菜单Id生成导航「面包屑」数据
 * @param {Number} id
 * @param {Number} is_layer
 * @returns
 */
export function getMenuIdNavi(id, is_layer = 1) {
  return request({
    url: '/v1/menu',
    method: 'post',
    params: {
      method: 'get.menu.id.navi'
    },
    data: {
      id,
      is_layer
    }
  })
}

/**
 * 根据菜单Url生成导航「面包屑」数据
 * @param {String} url
 * @param {Number} is_layer
 * @returns
 */
export function getMenuUrlNavi(url, is_layer = 1) {
  return request({
    url: '/v1/menu',
    method: 'post',
    params: {
      method: 'get.menu.url.navi'
    },
    data: {
      url,
      is_layer
    }
  })
}

/**
 * 批量设置是否属于导航菜单
 * @param {Array} ids
 * @param {Number} is_navi
 * @returns
 */
export function setMenuNavi(ids, is_navi) {
  return request({
    url: '/api/system/menu/batchSetNavi',
    method: 'post',
    data: {
      ids,
      is_navi
    }
  })
}

/**
 * 设置菜单排序
 * @param {Number} id
 * @param {Number} sort
 * @returns
 */
export function modifyMenuSort(id, sort) {
  return request({
    url: '/api/system/menu/modifySort',
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
export function setMenuIndex(ids) {
  return request({
    url: '/api/system/menu/modifyIndex',
    method: 'post',
    data: {
      ids
    }
  })
}

/**
 * 设置菜单状态，同时会影响上级与下级菜单的状态
 * @param {Number} id
 * @param {Number} status
 * @returns
 */
export function modifyMenuStatus(id, status) {
  return request({
    url: '/api/system/menu/modifyStatus',
    method: 'post',
    data: {
      id,
      status
    }
  })
}
