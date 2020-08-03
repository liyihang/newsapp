// 用户先关操作
import request from '@/utils/request'

export const login = data => {
  return request({
    method: 'POST',
    url: '/app/v1_0/authorizations',
    data
  })
}
export const getSmsCode = mobile => {
  return request({
    method: 'POST',
    url: `/app/v1_0/authorizations/${mobile}`

  })
}
