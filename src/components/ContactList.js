import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList=(props)=>{
    console.log(props);

    const deleteContactHandler=(id)=>{
        props.getContactId(id);
    };
    // const contacts=[{
    //     "id":1,
    //     "name":"Tanushree",
    //     "email":"Tanushree@gmail.com",
    // },];
    const renderContactList=props.contacts.map((contact)=>{
        return(
            <ContactCard contact={contact} clickHandler={deleteContactHandler} key={contact.id}></ContactCard>
        );
            
    })
    return(
        <div className="ui celled list"><h2>Contact List
            <Link to="/add">
                <div className="right">
            <button className="ui button blue right">Add Contact</button>
            </div>   </Link>
        </h2>
            {renderContactList}
        </div>
    );
    
};
export default ContactList;