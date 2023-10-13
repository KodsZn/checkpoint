import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function AddMovie({Add}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const[title,setTitle]= useState("")
  const[rate,setRate]= useState("")
  const[description,setDescription]= useState("")
  const[PosterUrl,setPostUrl]= useState("")
  const[trailer,setTrailer]= useState("")

  const handleTitle =(e) => {
    setTitle(e.target.value);
  }
  const handleRate =(e) => {
    setRate(e.target.value);
  }
  const handleDesc =(e) => {
    setDescription(e.target.value);
  }
  const handlePoster =(e) => {
    setPostUrl(e.target.value);
  }
  const handleTraiker =(e) => {
    setTrailer(e.target.value);
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add a Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Movie Title</Form.Label>
              <Form.Control
                type="email"
                placeholder="Title"
                onChange={(e) => handleTitle(e)}
                autoFocus
              />
               <Form.Label>Rate</Form.Label>
              <Form.Control
                type="text"
                placeholder="/10"     onChange={(e) => handleRate(e)}

                autoFocus 
              />
                <Form.Label>Movie's PosterUrl</Form.Label>
              <Form.Control
                type="text"
                placeholder="PosterUrl"  onChange={(e) => handlePoster(e)}

                autoFocus 
              />
                <Form.Label>Movie's Trailer</Form.Label>
              <Form.Control
                type="text"
                placeholder="www.youtube.com" 
                onChange={(e) => handleTraiker(e)}

                autoFocus 
              />
           
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3}
               onChange={(e) => handleDesc(e)}/>
            </Form.Group>
      </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" 
           onClick={() =>(
           Add({
                id: Math.random(),
                title: title,
                description: description,
                rate: rate,
                PosterUrl: PosterUrl,
                trailer: trailer,
            }),handleClose() )} >
            Add the Movie
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddMovie;