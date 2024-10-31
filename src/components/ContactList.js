function Contactlist() {
    
    const contacts = [
        { firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', phone: '123-456-7890', company: 'Acme Corp', position: 'Software Engineer' },
        { firstName: 'Jane', lastName: 'Smith', email: 'jane.smith@example.com', phone: '987-654-3210', company: 'Acme Corp', position: 'Software Engineer' },
        { firstName: 'Alice', lastName: 'Johnson', email: 'alice.johnson@example.com', phone: '555-555-5555', company: 'Acme Corp', position: 'Software Engineer' },
        { firstName: 'Bob', lastName: 'Brown', email: 'bob.brown@example.com', phone: '111-222-3333', company: 'Acme Corp', position: 'Software Engineer' },
        // Add more contacts as needed
      ];
    
    return (
        <div>
            <h2>Contact List</h2>
            <ul>
            {contacts.map((contact, index) => (
                <li key={index}>
                    <strong>{contact.firstName} {contact.lastName}</strong><br />
                    <em>{contact.email}</em>
                    {contact.phone }
                </li>
            ))}
            </ul>
      </div>
    )
}

export default Contactlist