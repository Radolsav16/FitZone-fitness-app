import { useEffect } from "react"

export const useScroll = () =>{

    useEffect(()=>{
        const scrollHanlder = (event) =>{
        if(event.target.tagName !== 'A'){
            return
        }
            scroll({
                top:0,
                behavior:'smooth'
            })
        }

        window.addEventListener('click',scrollHanlder);
        window.addEventListener('submit',scrollHanlder);


        return () =>{
            document.removeEventListener("click", scrollHanlder);
        }
    })
}