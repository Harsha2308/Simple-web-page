import React from "react";
import "./App.css"


class About extends React.Component{
    render(){
        return(
            <div>
                <div id="topic">
                <h3>React Developer</h3>
                </div>
                <div id="aboutP">
                    <div id="AcontR">
                    <h3>Enriching and Fun Early Years Matter Preschool Curriculum</h3>
                    <hr/>
                    <p>Our curriculum focuses on the holistic development of the child and is suitably<br/>
                       mapped to age-appropriate objectives and outcomes. Based on Dr. Howard<br/>
                       Gardner’s Theory of Multiple Intelligences and Experiential Learning, the<br/>
                       KLAY curriculum empowers the child to be able to establish a routine, follow<br/>
                       directions, make friends and work independently.
                    </p>
                    <img src="https://media.istockphoto.com/vectors/vector-illustration-of-kids-using-computer-vector-id1072707398?k=20&m=1072707398&s=612x612&w=0&h=_bzXm82FjlRYF3mIPknutHGxpsoJFOT6uz-k4RGyPjo=" alt="" height={280} width={280}/>
                    </div>
                     <br/>
                    <br/>
                    <div id="AcontL">
                    <h3>Socio-emotional & Physical Development</h3>
                    <hr/>
                    <p>A multi-sensory environment that includes group activities, role plays, story time and drama that have been<br/>
                       curated to meet the child’s social, emotional, physical and emotional milestones. We make them ‘Big School<br/>
                       Ready’!
                       </p>
                    <img src="https://i.pinimg.com/736x/b2/4b/d2/b24bd25b171b95f11a1e509bed975aae.jpg" alt="" height={280} width={280}/>
                    </div>
                    <br/> 
                    <br/>
                    <div id="AcontR1">
                    <h3>Milestones Tracking and Regular Assessments</h3>
                    <hr/>
                    <p>180 degree evaluation, milestone tracking and regular assessments every<br/>
                       term, to let you know of your child’s progress. We also help counsel with<br/>
                       strategies, should a child require a more focused stimulation.</p>
                    <img src="https://thumbs.dreamstime.com/b/asian-pupil-taking-online-class-home-little-schoolchild-participating-using-digital-tablet-via-video-call-186035031.jpg" alt="" height={280} width={280}/>

                      </div> 


                </div>
                
            </div>
        )
    }
}





export default About;