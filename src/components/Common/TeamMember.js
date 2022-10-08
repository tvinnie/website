import React, {Component} from "react";

class TeamMember extends Component {

    render(){
        return(
            <div class="col-lg-4">
                <div class="team-member">
                    <img class="mx-auto rounded-circle" src={this.props.image} alt="..." />
                    <h4>{this.props.name}</h4>
                    <p class="text-muted">{this.props.title}</p>
                    <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Twitter Profile"><i class="fab fa-twitter"></i></a>
                    <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Facebook Profile"><i class="fab fa-facebook-f"></i></a>
                    <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand LinkedIn Profile"><i class="fab fa-linkedin-in"></i></a>
                </div>
                <div class="col-lg-8 mx-auto text-center"><p class="large text-muted">{this.props.description}</p></div>
        </div>
        )
    }
}

export default TeamMember;