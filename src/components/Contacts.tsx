import React, { useState } from 'react';
import Contact from './Contact';

const Contacts = () => {
    const [contact, setContact] = useState("")
    const [contactList, setContactList] = useState<string[]>([])

    console.log("contact", contact);

    const onClick = () => {
        setContactList([...contactList, contact])
    }
    console.log("contactList", contactList);


    return (
        <div>
            <h1>Contact List</h1>
            <div className="form">
                <input
                value={contact} 
                onChange={(e)=> setContact(e.target.value)}
                name="name"
                placeholder="Contact Name"
                type="text" 
                />
                <button onClick={onClick}>Add</button>
            </div>
            {
                contactList.map((contactName) => (<Contact key={contactName} 
                name={contactName} />))
            }
            <Contact name={"dfd"} />
            {/* <Contact name="Someone" email="someone@gmail.com" />
            <Contact name="Someone2" /> */}
        </div>
    );
};

export default Contacts;