import axios from 'axios'

export default function ajax (url, data = {}, method = 'GET') {
  method = method.toUpperCase()
  return new Promise((resolve, reject) => {
    let promise
    if (method === 'GET') {
      promise = axios.get(url, {params: data})
    } else {
      promise = axios.post(url, data)
    }
    return promise.then(response => {
      resolve(response.data)
    }, error => {
      alert('请求出错' + error.message)
    })
  })
}
