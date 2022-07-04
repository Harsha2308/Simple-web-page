import React from "react";
import Home from "./HomePage";
import About from "./Aboutpage";
import Contact from "./Contactpage";
import Gallery from "./Gallerypage";
import Web from "./Webpage";
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import "./App.css"




class App extends React.Component{
    render(){
        return(
            <div>
                <Router>
                    <div>
                        <ul>
                            <li><Link style={{textDecoration: 'none',color:'black'}} to="/home">Home</Link></li>
                            <li><Link style={{textDecoration: 'none',color:'black'}} to="/contact">Contact</Link></li>
                            <li><Link style={{textDecoration: 'none',color:'black'}} to="/about">About</Link></li>
                            <li><Link style={{textDecoration: 'none',color:'black'}} to="/gallery">Gallery</Link></li>
                            <li><Link style={{textDecoration: 'none',color:'black'}} to="/web">Webpage</Link></li>
                            <li><button id="btn"><Link style={{textDecoration: 'none',color:'black'}} to="/contact">Join now</Link></button></li>
                        </ul>
                    </div>

                    <Routes>
                            <Route path="/home" element={<Home/>}></Route>
                            <Route path="/about" element={<About/>}></Route>
                            <Route path="/contact" element={<Contact/>}></Route>
                            <Route path="/gallery" element={<Gallery/>}></Route>
                            <Route path="/web" element={<Web/>}></Route>


                    </Routes>


                </Router>


            </div>
        )
    }
}

export default App;