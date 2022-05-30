import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {Button, Col, Container, Form, Row,Alert} from "react-bootstrap";
import Navbarcomp from '../Navbar/NavbarComp';

const Login = () => {
	const [data, setData] = useState({ userEmail: '', userPassword: '' });
	const [error, setError] = useState('');

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = 'http://localhost:4000/user/login';
			const { data: res } = await axios.post(url, data);
			localStorage.setItem('token', res.data);
			window.location = '/wroom';
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	return (
		<Container>
		<Navbarcomp/>
		<h2 className="shadow-sm text-success mt-5 p-3 text-center rounded">Inicio de sesión</h2>
		<Row className="mt-5">
			<Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
				<Form onSubmit={handleSubmit}>
					<Form.Group controlId="formBasicEmail">
						<Form.Label>Correo electrónico:</Form.Label>
						<input
							type='email'
							placeholder='Correo electrónico'
							name='userEmail'
							onChange={handleChange}
							value={data.userEmail}
							required
							/>
					</Form.Group>

					<Form.Group controlId="formBasicPassword">
						<Form.Label>Contraseña:</Form.Label>
						<input
							type='password'
							placeholder='Password'
							name='userPassword'
							onChange={handleChange}
							value={data.userPassword}
							required
							/>
					</Form.Group>
					{error && <div>{error}</div>}
					<Button variant="success btn-block" type="submit">
						Ingresar
					</Button><br />
					<Link to='/signup'> <a>Registrese aca</a></Link>
				</Form>
			</Col>
		</Row>
	   
	</Container>
	);
};

export default Login;