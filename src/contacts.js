import React, { Component } from 'react';
import ContactDialogue from './contact-dialogue';
import ContactDisplay from './contact-display';

class Contacts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [],
            dialogueIsOpen: false,
            currentContactIndex: -1
        }
    }
    toggleContactDialogue(index) {
        this.setState({
            dialogueIsOpen: !this.state.dialogueIsOpen
        });
    }
    changeContact(contact, index) {
        console.log(contact);
        let contacts = this.state.contacts.slice();
        if(index > -1) {
            contacts[index] = contact;
        } else {
            contacts.push(contact);
        }
        this.setState({
            contacts: contacts,
            currentContactIndex: -1
        });
        this.toggleContactDialogue();
    }
    render() {
        let buttonText = this.state.dialogueIsOpen ? 'Cancel' : 'Add';
        let contacts = this.state.contacts;
        return (
            <div>
            <button onClick={() => this.toggleContactDialogue()}>
                {buttonText}
            </button>
            <ContactDialogue isVisible={this.state.dialogueIsOpen} saveContact={(contact, index) => this.changeContact(contact, index)}></ContactDialogue>
            {contacts.map(function(contact, index) {
                return <ContactDisplay contact={contact} />;
            })}
            </div>
            );

    }
}

export default Contacts;