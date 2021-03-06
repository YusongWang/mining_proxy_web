import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function getDashBorad() {
  return request({
    url: '/user/dashboard',
    method: 'post'
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}

export function crate_proxy(data) {
  data.ssl_port = parseInt(data.ssl_port)
  data.tcp_port = parseInt(data.tcp_port)
  data.encrypt_port = parseInt(data.encrypt_port)
  data.share = parseInt(data.share)
  if (data.share_alg == "") {
    data.share_alg = 99;
  } else {
    data.share_alg = parseInt(data.share_alg)
  }
  data.share_rate = parseFloat(data.share_rate)

  return request({
    url: '/crate/app',
    method: 'post',
    headers: { 'Content-Type': ' application/json' },
    data:  JSON.stringify(data)
  })
}
