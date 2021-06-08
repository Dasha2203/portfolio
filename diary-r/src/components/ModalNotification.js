import {React,useState} from 'react'
import {connect} from 'react-redux'
import {Modal,Button} from 'react-bootstrap';

const ModalNotification = (props) => {
    const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
    return (
        <Modal show={show} onHide={handleClose} centered>
        <Modal.Header>
          <Modal.Title>Напоминание</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.task}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    )
}

export default ModalNotification;