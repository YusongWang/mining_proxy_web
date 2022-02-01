import request from '@/utils/request'


export function getServerInfo(name) {
    return request({
      url: '/user/server/'+name,
      method: 'get'
    })
}