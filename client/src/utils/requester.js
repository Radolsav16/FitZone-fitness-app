import axios from "axios";


const requester = async (method,url,data,headers = {},params) => {
  
    const config = {
        method,
        url,
        headers,
      };

  

      if (method === 'GET' || method === 'DELETE') {
        config.params = params ? params : data;
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

 async function exerciseFetcher(url) {
  const options = {
      method:'GET',
      headers:{
          'x-rapidapi-key':'5eeb9de353msh61ab0baf60e0531p1fb5ccjsn2c930bf1fd0c',
          'x-rapidapi-host':'exercisedb.p.rapidapi.com'
      }
  };

  const res = await fetch(url,options);
  const data = await res.json();

  return data;
}

export async function getAllExercises(offset){
  const exercises = await exerciseFetcher(`https://exercisedb.p.rapidapi.com/exercises?limit=9&offset=${offset}`);

  return exercises;
}


export async function getOneExercise(id){
  const exercise = await exerciseFetcher(`https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`);

  return exercise;
}

export async function getTargetMuscleExercises(target){
  const exercises = await exerciseFetcher(`https://exercisedb.p.rapidapi.com/exercises/target/${target}`);

  return exercises;
}



async function get(url,headers,params){
    return await requester('GET',url,null,headers,params)
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


