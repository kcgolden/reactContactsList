import React, { Component } from 'react';

class ContactDialogue extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contact: props.contact,
        };
    }
    handleInputChange(e) {
        let contact = this.state.contact;
        contact[e.target.name] = e.target.value;
        this.setState({
            contact: contact,
        });
    }
    handleSubmit(e) {
        let contact = this.state.contact;
        this.props.saveContact(contact);
    }
    render() {
        if(this.props.isVisible) {
            return (
                <div>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    First Name: <input name="firstName" type="text" value={this.state.contact.firstName} onChange={(event) => this.handleInputChange(event)} />
                    Last Name: <input name="lastName" type="text" value={this.state.contact.lastName} onChange={(event) => this.handleInputChange(event)} />
                    Email: <input name="email" type="email" value={this.state.contact.email} onChange={(event) => this.handleInputChange(event)} />
                    <input type="submit" value="Submit" />
                </form>
                </div>);
        } else {
            return '';
        }
    }
}

ContactDialogue.defaultProps = {
    contact: {
        firstName: '',
        lastName: '',
        email: ''
    }
}

export default ContactDialogue;