import React, {Component} from "react";
import {connect} from 'react-redux'
import {useLocation, useNavigate, useParams} from 'react-router-dom';

// creating a custom withRouter using hooks
function withRouter(Component){
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return(
            <Component 
                {...props}
                router = {{location, navigate,params}}
                />
        );
    }
    return ComponentWithRouterProp;
}
// end of custom withRouter using hooks


class Dashboard extends Component{
    render(){
        return(
            <h1>You are logged in with token:
                {this.props.auth.token}
            </h1>
        )
    }
}

const mapStateToProps = state => {
    return  {
        auth: state.auth
    }
}
const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(Dashboard));
