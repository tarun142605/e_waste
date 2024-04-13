import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';  
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import { useState } from 'react';

const Ticket = () => {

    let check = true;
    

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
            <Form.Control type="text" placeholder="First name" />
          </Form.Group>
          </Col>
          <Col>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="text" placeholder="Last name" />
          </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
            <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" placeholder="Email" />
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
            <Form.Control type="text" placeholder="Any Comments" />
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
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
          >
            <Modal.Dialog>
              <Modal.Header closeButton>
                <Modal.Title>Create Ticket</Modal.Title>
              </Modal.Header>
      
              <Modal.Body>
                {<Fm/>}
              </Modal.Body>
      
              <Modal.Footer>
                <Button variant="secondary">Cancel</Button>
                <Button variant="primary">Submit</Button>
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