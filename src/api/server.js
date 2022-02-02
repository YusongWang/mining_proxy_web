import request from '@/utils/request'


export function getServerInfo(name) {
    return request({
      url: '/user/server/'+name,
      method: 'get'
    })
}

export function getServerList() {
  return request({
    url: 'user/server_list',
    method: 'get'
  })
}
