import React, { Component } from 'react';

class ContactDisplay extends Component {
    render() {
        return (<div>
                    <span>{this.props.contact.firstName} </span>
                    <span>{this.props.contact.lastName} </span>
                    <span>{this.props.contact.email} </span>
                    
               </div>);
    }
}

ContactDisplay.defaultProps = {
    contact: {
        firstName: '',
        lastName: '',
        email: ''
    }
}
export default ContactDisplay;