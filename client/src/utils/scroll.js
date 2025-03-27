import { useEffect } from "react"

export const useScroll = () =>{

    useEffect(()=>{
        const clickHanlder = (event) =>{
        if(event.target.tagName !== 'A'){
            return
        }
            scroll({
                top:0,
                behavior:'smooth'
            })
        }

        window.addEventListener('click',clickHanlder);

        return () =>{
            document.removeEventListener("click", clickHanlder);
        }
    })
}