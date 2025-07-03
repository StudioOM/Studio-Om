import { ChangeEvent, Component } from "react";
import React from "react";
import title from "./assets/Asset 43.png";
import X from "./assets/X symbol.png";
import text from "./assets/Asset 39.png";
import emailjs from "emailjs-com";

// Initialize EmailJS
emailjs.init("UY2GqXJF65fSPVsE0"); // Your public key

// UPDATE THESE VALUES after creating your service and template
const EMAILJS_SERVICE_ID = "service_o7jtk5p"; // Add your service ID after creating it
const EMAILJS_TEMPLATE_ID = "template_4725eiw"; // Add your template ID after creating it

type ContactContentsProps = {
    onBackClick: () => void;
};

type ContactContentsState = {
    name: string;
    email: string;
    phone: string;
    msg: string;
    errors: {
        name: string;
        email: string;
        phone: string;
        msg: string;
    };
    successMessage: string;
    errorMessage: string;
    isSubmitting: boolean;
};

export class ContactContents extends Component<ContactContentsProps, ContactContentsState> {
    constructor(props: ContactContentsProps) {
        super(props);
        this.state = {
            name: "",
            email: "",
            phone: "",
            msg: "",
            errors: {
                name: "",
                email: "",
                phone: "",
                msg: ""
            },
            successMessage: "",
            errorMessage: "",
            isSubmitting: false
        };
    }

    render = (): JSX.Element => {
        return (
            <div className="page-contents">
                <div className="pageHeader">
                    <div className="empty"></div>
                    <img className="contactTitle" src={title} alt="Contact Title" />
                    <img className="close" src={X} alt="Close" onClick={this.props.onBackClick} />
                </div>
                <div className="contactContents">
                    <img src={text} className="contactText" alt="Contact Text" />
                    
                    <div className="field">
                        <p>NAME: {this.renderError("name")}</p>
                        <input
                            className="contactInput"
                            value={this.state.name}
                            onChange={this.doNameChange}
                            placeholder="Your name"
                        />
                    </div>
                    <div className="field">
                        <p>EMAIL: {this.renderError("email")}</p>
                        <input
                            className="contactInput"
                            value={this.state.email}
                            onChange={this.doEmailChange}
                            placeholder="Your email address"
                        />
                    </div>
                    <div className="field">
                        <p>PHONE NUMBER: {this.renderError("phone")}</p>
                        <input
                            className="contactInput"
                            value={this.state.phone}
                            onChange={this.doPhoneChange}
                            placeholder="10-digit phone number"
                        />
                    </div>
                    <div className="field">
                        <p>YOUR MESSAGE: {this.renderError("msg")}</p>
                        <textarea
                            className="contactTextarea"
                            value={this.state.msg}
                            onChange={this.doMsgChange}
                            placeholder="Enter your message here"
                        ></textarea>
                    </div>
                    
                    {this.state.successMessage && (
                        <div className="success-message" style={{ 
                            
                            color: "#fff", 
                            padding: "12px", 
                            borderRadius: "4px", 
                            marginBottom: "15px",                
                        }}>
                            {this.state.successMessage}
                        </div>
                    )}
                    
                    {this.state.errorMessage && (
                        <div className="error-message" style={{ 

                            color: "#fff", 
                            padding: "12px", 
                            borderRadius: "4px", 
                            marginBottom: "15px",
                        }}>
                            {this.state.errorMessage}
                        </div>
                    )}
                    
                    <button 
                        onClick={this.doSendClick} 
                        className="contactButton"
                        disabled={this.state.isSubmitting}
                        style={{
                            opacity: this.state.isSubmitting ? 0.7 : 1
                        }}
                    >
                        {this.state.isSubmitting ? "SENDING..." : "SEND"}
                    </button>
                </div>
            </div>
        );
    };

    renderError = (field: string): JSX.Element => {
        const error = this.state.errors[field as keyof typeof this.state.errors];
        if (error) {
            return <span className="contactError" style={{ color: '#dc3545', fontSize: '0.85em', marginLeft: '5px' }}>{error}</span>;
        }
        return <span></span>;
    };

    doNameChange = (evt: ChangeEvent<HTMLInputElement>): void => {
        const value = evt.target.value;
        const error = value.trim() === "" ? "Please enter a name" : "";
        this.setState({ 
            name: value, 
            errors: { ...this.state.errors, name: error },
            errorMessage: ""
        });
    };

    doEmailChange = (evt: ChangeEvent<HTMLInputElement>): void => {
        const value = evt.target.value;
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const error = value.trim() === "" ? "Please enter an email address" : 
                     !emailPattern.test(value) ? "Invalid email address" : "";
        this.setState({ 
            email: value, 
            errors: { ...this.state.errors, email: error },
            errorMessage: ""
        });
    };

    doPhoneChange = (evt: ChangeEvent<HTMLInputElement>): void => {
        const value = evt.target.value;
        // Only allow digits
        const numericValue = value.replace(/\D/g, '');
        
        // Validate length
        const error = numericValue.length === 0 ? "Please enter a phone number" :
                     numericValue.length !== 10 ? "Please enter 10 digits" : "";
        
        this.setState({ 
            phone: numericValue, 
            errors: { ...this.state.errors, phone: error },
            errorMessage: ""
        });
    };

    doMsgChange = (evt: ChangeEvent<HTMLTextAreaElement>): void => {
        const value = evt.target.value;
        const error = value.trim() === "" ? "Please enter a message" : "";
        this.setState({ 
            msg: value, 
            errors: { ...this.state.errors, msg: error },
            errorMessage: ""
        });
    };

    validateForm = (): boolean => {
        const { name, email, phone, msg } = this.state;
        const errors = { ...this.state.errors };
        let isValid = true;

        // Validate name
        if (name.trim() === "") {
            errors.name = "Please enter a name";
            isValid = false;
        } else {
            errors.name = "";
        }

        // Validate email
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (email.trim() === "") {
            errors.email = "Please enter an email address";
            isValid = false;
        } else if (!emailPattern.test(email)) {
            errors.email = "Invalid email address";
            isValid = false;
        } else {
            errors.email = "";
        }

        // Validate phone
        if (phone.trim() === "") {
            errors.phone = "Please enter a phone number";
            isValid = false;
        } else if (phone.length !== 10) {
            errors.phone = "Please enter 10 digits";
            isValid = false;
        } else {
            errors.phone = "";
        }

        // Validate message
        if (msg.trim() === "") {
            errors.msg = "Please enter a message";
            isValid = false;
        } else {
            errors.msg = "";
        }

        this.setState({ errors });
        return isValid;
    };

    doSendClick = (): void => {
        // Clear any previous error messages
        this.setState({ errorMessage: "" });
        
        // Prevent multiple submissions
        if (this.state.isSubmitting) return;

        // Validate form
        if (!this.validateForm()) return;

        // Set submitting state
        this.setState({ isSubmitting: true });

        const { name, email, phone, msg } = this.state;

        // Create template parameters that match the variable names in your template
        const templateParams = {
            user_name: name,
            user_email: email,
            user_phone: phone,
            message: msg
        };

        console.log("Sending email with params:", templateParams);
        
        // Send email using EmailJS
        emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
            .then((response) => {
                console.log('Success:', response);
                this.setState({
                    name: "",
                    email: "",
                    phone: "",
                    msg: "",
                    errors: {
                        name: "",
                        email: "",
                        phone: "",
                        msg: ""
                    },
                    successMessage: "Your message has been sent successfully! We'll get back to you soon.",
                    errorMessage: "",
                    isSubmitting: false
                });
                setTimeout(() => {
                    this.setState({ successMessage: "" });
                }, 5000);
            })
            .catch((error) => {
                console.error('Error:', error);
                this.setState({
                    isSubmitting: false,
                    errorMessage: "There was an error sending your query, please try again later or contact us directly."
                });
            });
    };
}