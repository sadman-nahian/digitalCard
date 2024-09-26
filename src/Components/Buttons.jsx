import React from "react"
import Mail from "../assets/mail.png"
import Linkedin from "../assets/Vector.png"


function Button(){
    return (
        <div className="button">
            <button className="mail" onClick={()=>window.open("mailto:sadmannahian63@gmail.com","_blank")}>
                <img src={Mail}/>
                Email
                </button>
                <button className="linkedin" onClick={()=>window.open("https://www.linkedin.com/in/sadman-nahian-732474293/","_blank")}>
                <img src={Linkedin}/>
                LinkedIn
                </button>
        </div>
    )
}
export default Button