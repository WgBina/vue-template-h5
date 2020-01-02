import fetch from '@/utils/request'
import qs from 'qs'
import url from '../api/baseUrl'

let batchId = 'creamFieldXIAMEN';

const Api = {
  // 第一次进入首页验证code
  check(data){
      data.batchId = batchId;
      return fetch({
          url:url+'/s/tml/getBasicInfo.do',
          method:'post',
          data:qs.stringify(data)
      })
  },

}
export default Api
