import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { useState } from 'react';
import '../App.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

function AddNewContact({contacts, setContacts}) {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");

  const handleSubmit = (event) => {
    //gør at hele siden ikke reloader
    event.preventDefault();

    //Lav ny kontakt
    const newContactTihi = {
      firstName,
      lastName,
      email,
      phone,
      company,
      position
    }

    //setContacts: setteren der kan ændre de kontakter der vises på skærmen.
    setContacts ([newContactTihi, ...contacts]);
      setFirstName('');
      setLastName('');
      setEmail('');
      setPhone('');
      setCompany('');
      setPosition('');

    //lukker modalen når du er færdig med at 
    closeModal()
  }

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button className='modalButton' onClick={openModal}>Add new contact</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div className="AddContactContainer">
            <form onSubmit={handleSubmit}> 
              <input type="text" placeholder="First name" value={firstName} onChange={(event) => setFirstName(event.target.value)}/>
              <input type="text" placeholder="Last name" value={lastName} onChange={(event) => setLastName(event.target.value)}/>
              <input type="text" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)}/>
              <input type="text" placeholder="Phone number" value={phone} onChange={(event) => setPhone(event.target.value)}/>
              <input type="text" placeholder="Company" value={company} onChange={(event) => setCompany(event.target.value)}/>
              <input type="text" placeholder="Position" value={position} onChange={(event) => setPosition(event.target.value)}/>
              <button>sumbit</button>
            </form>
        </div>
      </Modal>
    </div>
  );
}

// ReactDOM.render(<Appp />, appElement);
export default AddNewContact

