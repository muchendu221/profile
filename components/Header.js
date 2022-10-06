import React from "react"
export default function Header(){
   return( 
       <header>
            <img src="./images/muchendu.webp" className="image--face"/>
                <h1>Boniface Muchendu</h1>
                     <h2>Frontend Developer</h2>
                        <h3>muchendu.net</h3>
               <div className="btn">  
        <a className="email"><ion-icon name="mail-outline"></ion-icon><span> Email</span></a> 
        <a className="linkedin"><ion-icon name="logo-linkedin"></ion-icon> LinkedIn</a>
                 </div>     
    </header>
   )
}