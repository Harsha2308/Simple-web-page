import React from "react";
import "./App.css"


class Home extends React.Component{
    constructor(props){
        super(props);
     
           
                this.state = {
                para:""
                     }
                  }
                
    change=()=>{
        this.setState({para:"Make education possible for every child. Join our hands"})
    }


    render(){
        return(
            <div>
                 <div id="topic">
                <h3>React Developer</h3>
                </div>
                <div id="Hcont">
                    <h3><b>Kids Learning Center</b></h3>
                    <br/>
                    <hr/>
                    <br/><br/><br/>
                    <h2>New Approach to Kids Education</h2>
                    <br/>
                    <p>Make education possible for every child. Join hands with an<br/>
                       NGO and serve the poor. Donate for education and help<br/>
                       children attain age-appropriate learning. Make education<br/>
                       possible for every child. Join hands with an NGO and serve<br/>
                       the poor. Donate for education and help children attain age-<br/>appropriate learning.
                   </p>
                   <br/><br/><br/>
                   <img src="https://www.linguakidz.com.au/wp-content/uploads/2022/02/desk-kids-students.png" id="img1" alt="" height={280} width={320}/>
                   <hr/>
                   <p id="disc">{this.state.para}</p>
                   <button id="btn" onClick={this.change}> Learn More</button>





                </div>

            </div>
        )
    }
}





export default Home;