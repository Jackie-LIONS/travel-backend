import axios from 'axios'
import { Message } from '@arco-design/web-vue'
import router  from '@/router'


// 响应拦截器
axios.interceptors.response.use(res => {
  const { data = {}, status } = res
  if (status == 200) {
    if (data.code != 200) {

      Message.error(data.message)
      
       if (data.code == 401) {
        router.push('/login')
        return 
      }
      return Promise.reject(data)
    }

    return data.data
  } else {
    const { status, statusText } = res
    Message.error(status + statusText)
    return Promise.reject(res)

  }

})

export default axios