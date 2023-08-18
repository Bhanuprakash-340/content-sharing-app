import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BiSolidEditAlt } from "react-icons/bi";
import './index.css'

function EditPopUp({editData}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [editContext, setEditContext] = useState({title:"",content:""})


const handlePopupData = (event) => {
    const { name, value } = event.target;
    setEditContext((prevEditContext) => ({
      ...prevEditContext,
      [name]: value,
    }));
  };

  const getFormData = (event) =>{
    event.preventDefault();
    editData(editContext);
    handleClose();
  }


  return (
    <>
    <button className="icon-button edit" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={handleShow}><BiSolidEditAlt className="icons"/></button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <form onSubmit={getFormData}>
        <div>
            <input type="text" placeholder='Enter Title...' className='popup-input' value={editContext.title} onChange={handlePopupData} name='title'/>
        </div>
        <textarea
            placeholder="Enter your context here..."
            value={editContext.content}
            name="content"
            onChange={handlePopupData}
            className="popup-content-area"
          />
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary"  type='submit' onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}

export default EditPopUp;