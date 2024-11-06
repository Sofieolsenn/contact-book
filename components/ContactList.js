import '../App.css';
import AddNewContact from "./AddNewContact";
import { useState } from 'react'; 

function Contactlist() {
    
    const [contacts, setContacts] = useState([
        { firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', phone: '123-456-7890', company: 'Acme Corp', position: 'Software Engineer' },
        { firstName: 'Jane', lastName: 'Smith', email: 'jane.smith@example.com', phone: '987-654-3210', company: 'Acme Corp', position: 'Software Engineer' },
        { firstName: 'Alice', lastName: 'Johnson', email: 'alice.johnson@example.com', phone: '555-555-5555', company: 'Acme Corp', position: 'Software Engineer' },
        { firstName: 'Bob', lastName: 'Brown', email: 'bob.brown@example.com', phone: '111-222-3333', company: 'Acme Corp', position: 'Software Engineer' },
    ]);

    return (
        <div className="CL_container">
            <div className="CL_child1"> 
                <h1>This is your contact book.</h1>
                <p>Add as many contacts as you’d like. Use it everyday pls. React is weird.</p>
                <AddNewContact contacts={contacts} setContacts={setContacts}/>
            </div>

            <div className="CL_child2">
                <div className="CL_child2-1">My contacts</div>
                {contacts.map((contact, index) => (
                    <div className="CL-child2-contact" key={index}>
                        <p>{contact.firstName} {contact.lastName}</p>
                        <p>{contact.email}</p>
                        <p>{contact.phone}</p>
                        <p>{contact.company}</p>
                        <p>{contact.position}</p>
                    </div>
                ))}
             
            </div>
         </div>
    )
}

export default Contactlist