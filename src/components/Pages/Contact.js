import React,{Component} from "react";
import Field from "../Common/Field";
import { withFormik } from "formik";

const fields = {
    sections:[
        [
            {name:'name', elementName:'input',type:'text',placeholder:'Your name'},
            {name:'email', elementName:'input',type:'email',placeholder:'Your email'},
            {name:'phone', elementName:'input',type:'text',placeholder:'Your phone number'},
            
        ],
        [
            {name:'message', elementName:'textarea',type:'text',placeholder:'Type your Message'},
        ]
    ]
}

class Contact extends Component {

    render(){
        return(
            <section className="page-section" id="contact">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Contact Us</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <form id="contactForm" onSubmit={this.props.handleSubmit}>
                    <div className="row align-items-stretch mb-5">
                        {
                            fields.sections.map((section, sectionIndex) => {
                                
                                return (
                                    <div className="col-md-6" key={sectionIndex}>
                                        {section.map((field,i) => {
                                            return <Field {
                                                        ...field} 
                                                        key={i} 
                                                        value = {this.props.values[field.name]}
                                                        name={field.name}
                                                        onChange={this.props.handleChange}
                                                        onBlur={this.props.handleBlur}
                                                        touched={(this.props.touched[field.name])}
                                                        errors={this.props.errors[field.name]}
                                                    />
                                        })}
                                    </div>
                                )
                            })
                        }
                    </div>                   
                    {/* <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div> */}
                    <div className="col-lg-12 text-center">
                        <button 
                        className="btn btn-primary btn-xl text-uppercase" 
                        id="submitButton" 
                        type="submit"
                        // onClick={(e) => this.submitForm}
                        >Send Message</button></div>
                </form>
            </div>
        </section>


        )
    }
}

export default withFormik({
    mapPropsToValues:() => ({
        name:'',
        email:'',
        phone:'',
        message:''
    }),
    handleSubmit:(values, {setSubmitting}) =>{
        alert('Submitte the Form Hurray!', JSON.stringify(values));
    },
    validate: values => {
        const errors = {};

        Object.keys(values).map(v =>{
            
        })
    }
})(Contact);