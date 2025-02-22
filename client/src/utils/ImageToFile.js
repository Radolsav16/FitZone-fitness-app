export async function ImageToFile(imageUrl,filename){
    const response = await fetch(imageUrl);
    const blop = await response.blob()
    const file = new File([blop],filename,{type :blop.type})

    return file;
}