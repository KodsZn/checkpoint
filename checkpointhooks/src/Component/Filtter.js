/import React from 'react'
import { Modal } from 'react-bootstrap';
const Filtter = () => {
    const [show,setShow]=useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
    <div>
   <>
      <Button variant="primary" onClick={handleShow}>
        Look For A Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>look For A Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>film s titre</Form.Label>
              <Form.Control
                placeholder="titre"
                autoFocus
              />
              <Form.Label>film s Rate</Form.Label>
              <Form.Control
                placeholder="/10"
                autoFocus
              />
            </Form.Group>
           
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Search
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    </div>
  )
}
export default Filtter;