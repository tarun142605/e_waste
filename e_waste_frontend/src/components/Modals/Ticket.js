import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';  
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import { useState, useRef, useEffect } from 'react';

const Ticket = () => {

    let check = true;
    const [visible,setVisibility] = useState('show');

    const [formData, setFormData] = useState({
      name:'',
      phone: '',
      email: '',
      comments: ''
    });

    const inputRef = useRef(null);

    const handleChange = (e) => { 
        const { name, value } = e.target;
        inputRef.current = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [formData]);

    const closeModal = () => {  
      setVisibility('hide');
    }

    const handelSubmit = (e) => {
      
      e.preventDefault();
      let conn = new XMLHttpRequest();
      conn.open("POST", "http://localhost:3000/ticket/createTicket", true);
      conn.setRequestHeader("Content-Type", "application/json");
      conn.send(JSON.stringify(formData));
      conn.onreadystatechange = function() {
        if (this.status === 200) {
          let data = JSON.parse(this.responseText);
          console.log(data);
        }else{
          console.log("Error");
        }
      };
    }

    const Fm = () => {

      const [selected_products, set_selected_products] =  
        useState([]); 
    const products =  
        ['TV','AC','Fridge']; 
    const toggleLang = (option) => { 
        if (selected_products.includes(option)) { 
            set_selected_products( 
                selected_products.filter((item) =>  
                    item !== option)); 
        } else { 
            set_selected_products( 
                [...selected_products, option]); 
        } 
    }; 

      return (
        <>
          <Container>
          <Row>
          <Col>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
          </Form.Group>
          </Col>
          <Col>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="number" name="phone" value={formData.phone} placeholder="Phone" />
          </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
            <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" value={formData.email} placeholder="Email" />
            </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
            <Form.Group className="mb-3" controlId="formGroupEmail">
            <Dropdown> 
                <Dropdown.Toggle id="dropdown-basic"> 
                    Select Devices 
                </Dropdown.Toggle> 
                <Dropdown.Menu> 
                    {products.map((option, index) => ( 
                        <Dropdown.Item 
                            key={index} 
                            onClick={() => toggleLang(option)} 
                            active={ 
                                selected_products.includes(option)} 
                        > 
                            {option} 
                        </Dropdown.Item> 
                    ))} 
                </Dropdown.Menu> 
            </Dropdown> 
            </Form.Group>
            </Col>
            <Col>
            <Form.Group className="mb-3" controlId="formGroupEmail">
            <div> 
                {(selected_products.length != 0) ? selected_products.join(', ') : 'None'} 
            </div> 
            </Form.Group>
            </Col>
          </Row>
          <Row>
          <Col>
          <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Upload Images</Form.Label>
          <Form.Control type="file" multiple/>
          </Form.Group>
          </Col>
          </Row>
          <Row>
            <Col>
            <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Comments</Form.Label>
            <Form.Control type="text" name="comments" value={formData.comments} placeholder="Any Comments" />
            </Form.Group>
            </Col>
          </Row>
          </Container>
        </>
      )
    }

    const NewTicket = () => {
        return (
          <div
            className={ 'modal ' + visible }
            style={{ display: 'block', position: 'initial' }}
          >
            <Modal.Dialog>
              <Modal.Header>
                <Modal.Title>Create Ticket</Modal.Title>
              </Modal.Header>
      
              <Modal.Body>
                {<Fm/>}
              </Modal.Body>
      
              <Modal.Footer>
                <Button variant="secondary" onClick={closeModal}>Cancel</Button>
                <Button variant="primary" onClick={handelSubmit}>Submit</Button>
              </Modal.Footer>
            </Modal.Dialog>
          </div>
        );
      }

      return (
        <>
        {check ? <NewTicket /> : null}
        </>
    )
}

export default Ticket;