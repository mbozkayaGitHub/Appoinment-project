import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { appointmentData } from './../helper/data';

function AddModal({ show,
   handleClose, 
   drName,appointments,setAppointments }) {
  const [patientname, setPatientname] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
setAppointments([...appointments,{
  id:appointments.length +1,
  patient:patientname,
  day:date,
  consulted:false,
  doctor:drName 
}])
    handleClose();
  };

  console.log(appointments);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Appointment for {drName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Patient name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                onChange={(e) => setPatientname(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="datetime">
              <Form.Label>Day&Time</Form.Label>
              <Form.Control
                type="datetime-local"
                placeholder="Password"
                onChange={(e) => setDate(e.target.value)}
              />
            </Form.Group>
            <div className="text-center">
              <Button variant="success" type="submit" className="me-3">
                Save
              </Button>
              <Button variant="danger" onClick={handleClose}>
                Close
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddModal;
