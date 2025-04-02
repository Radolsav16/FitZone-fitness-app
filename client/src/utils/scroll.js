
export function scrollTop(){
    const scrollHandler = () => scroll({
        top:0,
        behavior:'smooth'
      })
     window.addEventListener('click',scrollHandler)
     window.addEventListener('submit',scrollHandler) 
}