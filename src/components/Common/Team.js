import React, {Component} from "react";
import TeamMember from "./TeamMember";
import tm1 from "../assets/img/team/1.jpg";
import tm2 from "../assets/img/team/2.jpg";
import tm3 from "../assets/img/team/3.jpg";


const team = [
    {name:'Parveen Anand',title:'Lead Designer', image:tm1},
    {name:'Diana Petersen',title:'Lead Marketer', image:tm2},
    {name:'Larry Parker',title:'Lead Developer', image:tm3},
]

class Team extends Component{

    render(){
        return(
            <section class="page-section bg-light" id="team">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Our Amazing Team</h2>
                    <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div class="row">
                   
                   {
                    team.map((item,index) => {
                        return <TeamMember {...item} key={index} />
                    })
                   }
                </div>
                <div class="row">
                <div class="col-lg-8 mx-auto text-center">
                    <p class="large text-muted"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde. </p>
                    </div>
                </div>
            </div>
        </section>
        )
    }
}

export default Team;