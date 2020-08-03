import axios from 'axios'
import Jsonbig from 'json-bigint'
import store from '../store'
const request = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn/'
})
/**
 * 处理后端返回数据超出Js安全整数范围的问题
 */
request.defaults.transformResponse = [
  function (data) {
    try {
      return Jsonbig.parse(data)
    } catch (err) {
      return {}
    }
  }
]
/**
 * 请求拦截
 */
request.interceptors.request.use(
  (config) => {
    const user = store.state.user
    if (user) {
      config.headers.Authorization = `Bear${user.token}`
    }
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)
/**
 * 响应拦截
 */
// request.interceptors.response.use(
//   function(response) {
//     return response
//   },
//   async function(err) {
//     if (err.response && err.response.state === 401) {
//       const user = store.state.user
//       if (!user || !user.refresh_token) {
//         router.push("/login")
//         return
//       }
//       try {
//         const res = await axios({
//           method: 'PUT',
//           url: 'http://ttapi.research.itcast.cn/app/v1_0/authorizations',
//           headers: {
//             Authorization: `Bear ${user.refresh_token}`
//           }
//         });
//         store.commit('setUser', {
//           token: res.data.data.token,
//           refresh_token: user.refresh_token
//         });
//         return request(err.config)
//       } catch (error) {
//         router.push('/login')
//       }
//     }
//     return Promise.reject(err)
//   }
// )
export default request
