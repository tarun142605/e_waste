import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Ticket from './Modals/Ticket';
import { useContext, useState } from 'react';

const Dash = () => {

    const [checkTicketVis, setCheckTicketVis] = useState(false);

    const createTicket = () => {
        setCheckTicketVis(true);
    }
    // console.log(document.getElementsByClassName("btn-close").length);

    return (
        <div>
            <Container>
            <h1>Dashboard</h1>
            <Button variant="primary" onClick={createTicket}>Create Ticket</Button>
            {checkTicketVis ? <Ticket/> : null}
            </Container>
        </div>
    );
    };

export default Dash;