
import React from "react";
import "./App.css"


class Contact extends React.Component{
    render(){
        return(
            <div>
                 <div id="topic">
                <h3>React Developer</h3>
                </div>
                <div id="contact">
                 <div id="sidecont">
                     <h3>Full Stack Developer Training And Placements</h3>
                     <hr/>
                     <p>To be an effective full-stack developer, you should acquire and continue upgrading your<br/>
                      knowledge of applicable programming language skills. Consider taking courses in relevant<br/>
                      languages—like Python, HTML, CSS, and Javascript.
                      </p>
                      <br/>
                      <p>To be an effective full-stack developer, you should acquire and continue upgrading your<br/>
                         knowledge of applicable programming language skills. Consider taking courses in relevant<br/>
                         languages—like Python, HTML, CSS, and Javascript.
                      </p>
                      <br/>
                      <hr/>
                      <button id="btn">Lean More</button>
                 </div>
                 <div id="form">
                   <form>
                       <h2>Fill & Get upto 25% OFF in Courese Fees</h2>
                   <input type="text" placeholder="Name"/><br/><br/><br/>
                   <input type="Number" placeholder="Mobile Number"/><br/><br/><br/>
                   <input type="Email" placeholder="Email"/><br/><br/><br/>
                   <input type="text" placeholder="Message"/><br/><br/><br/>
                   <button id="btn1">I am Interested!</button>
                   </form>
                   </div>

            </div>
            </div>
        )
    }
}





export default Contact;