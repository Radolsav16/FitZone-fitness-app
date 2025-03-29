import axios from "axios";




const requester = async (method,url,data,headers = {}) => {
  
    const config = {
        method,
        url,
        headers,
      };


      if (method === 'GET' || method === 'DELETE') {
        config.params = data;
      }else{
        config.data = data;
      }

      try {
        const res = await axios(config);
        
        return res.data;
      } catch (error) {
        throw Error(error.message)
      }

}


async function get(url,headers){
    return await requester('GET',url,null,headers)
}

 async function post(url,data,headers){
    return await requester('POST',url,data,headers)
}

async function put(url,data,headers){
    return await requester('PUT',url,data,headers)
}

 async function del(url){
    return await requester('DELETE',url);
}

export const fetchApi = {
    get,
    post,
    put,
    del
}