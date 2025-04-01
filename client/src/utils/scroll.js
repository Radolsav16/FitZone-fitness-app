import { useEffect } from "react"

export const useScroll = () =>{

    useEffect(()=>{
        const scrollHanlder = (event) =>{
        if(event.target.tagName !== 'A' && event.type !== 'submit'){
            return
        }

        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
            
        }

        window.addEventListener('click',scrollHanlder);
        window.addEventListener('submit',scrollHanlder);


        return () =>{
            window.removeEventListener("click", scrollHanlder);
            window.removeEventListener("submit", scrollHanlder);
        }
    },[])
}