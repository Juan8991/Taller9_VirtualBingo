
import { Container,Nav,Navbar } from 'react-bootstrap';
import CountdownTimer from '../Timer/counTimer';

const WaitingRoom = () => {
	const handleLogout = () => {
		localStorage.removeItem('token');
		window.location.reload();
	};

	return (
		<Container>
			<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
          <Navbar.Brand>Bingo Virtual</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>                              </Nav>
			<Nav>
              <Nav.Link href="/" onClick={handleLogout}>Cerrar sesión</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          </Container>
        </Navbar>
		<div className='counterTimer'><CountdownTimer countdownTimestampMs={2759983662000}/></div>
		</Container>
		
	);
};

export default WaitingRoom;