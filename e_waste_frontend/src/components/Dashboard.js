import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Ticket from './Modals/Ticket';
import { useState } from 'react';

const Dash = () => {

    const [check, setCheck] = useState(false);

    const createTicket = () => {
        setCheck(true);
    }
    // console.log(document.getElementsByClassName("btn-close").length);
    if(document.getElementsByClassName("btn-close").length){
        console.log("btn-close");
        document.getElementsByClassName("btn-close")[0].addEventListener("click", function(){
            setCheck(false);
        });
    }

    return (
        <div>
            <Container>
            <h1>Dashboard</h1>
            <Button variant="primary" onClick={createTicket}>Create Ticket</Button>
            {check ? <Ticket /> : null}
            </Container>
        </div>
    );
    };

export default Dash;