import React, {Component} from "react";

class Field extends Component {

    render(){
        return(
            <div class="form-group">
                {
                    this.props.elementName === 'input' ? 

                    <input 
                    class="form-control" 
                    id={this.props.name}
                    type={this.props.type}
                    placeholder={this.props.placeholder}
                    required="required" 
                    name={this.props.name}
                    onChange = {this.props.onChange}
                    onBlur={this.props.onBlur}
                    />

                    :

                    <textarea 
                    class="form-control" 
                    id={this.props.name}
                    placeholder={this.props.placeholder}
                    required="required" 
                    data-validation-required-message = 'Please enter message'
                    name={this.props.name}
                    onChange = {this.props.onChange}
                    onBlur={this.props.onBlur}
                    />
                }
               <p className="help-block text-danger">
                {(this.props.touched && this.props.errors) &&
                    <span>This field is required!</span>
                }
               </p>
            </div>
        )
    }
}

export default Field;