import React from "react"
import ReactDOM from "react-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import About from "./components/About"
import Interests from "./components/Interests"
function App(){
   return( 
       <div>
            <Header/>
            <About/>
            <Interests/>
            <Footer/>
    </div>
   )
}
ReactDOM.render(<App/>, document.getElementById("root"))