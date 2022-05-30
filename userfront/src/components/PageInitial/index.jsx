import styles from './stylessPi.css';
import { Container } from 'react-bootstrap';
import Navbarcomp from '../Navbar/NavbarComp';


const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem('token');
		window.location.reload();
	};

	return (
		
		<Container>
			<Navbarcomp/>
			<div className='Containerp'>
				<h1 >Bienvenido al Bingo Virtual</h1>
				<div className="Containerr">
				<p>A continuacion se anunciaran algunas de las reglas:</p>
				<p><strong>-</strong>Cada Jugador tiene un solo Carton de juego</p><br/>
				<p><strong>-</strong>En cada ronda, un número diferente se sortea. Si el mismo figura en alguno de sus cartones es necesario marcarlo.</p><br/>
				<p><strong>-</strong>Al completar una línea, columna, diagonal o cualquiera de los patrones, el jugador debe avisar su bingo</p><br/>

				<div className='Containeri'></div>
				<p><strong>-</strong>El primer jugador que complete cualquiera de los patrones anterior gana</p><br/>
				<p><strong>-</strong>Si el juegador oprime el el boton de Bingo sin antes haber completado alguno de estos patrones, sera descalificado </p><br/>
				</div>
			</div>
		</Container>
				
	);
};

export default Main;