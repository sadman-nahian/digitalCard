import React from "react"
import Github from "../assets/git.png"
import Facebook from "../assets/facebook.png"
import Insta from "../assets/insta.png"

function Footer(){
    return (
        <div className="footer">
             <button className="footbtn" onClick={()=>window.open("https://github.com/sadman-nahian","_blank")}>
                <img src={Github}/>
            </button>
            <button className="footbtn" onClick={()=>window.open("https://www.facebook.com/sadman.alnahian/","_blank")}>
                <img src={Facebook}/>
            </button>
            <button className="footbtn" onClick={()=>window.open("https://github.com/sadman-nahian","_blank")}>
                <img src={Insta}/>
            </button> 

          

        </div>
    )
}
export default Footer