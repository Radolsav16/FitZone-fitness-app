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