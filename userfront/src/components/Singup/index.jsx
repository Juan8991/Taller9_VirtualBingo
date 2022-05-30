import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import styles from './stylesModule.css';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import Navbarcomp from '../Navbar/NavbarComp';

const Signup = () => {
	const [data, setData] = useState({
		fullName: '',
		userName: '',
		userPassword: '',
		userEmail: '',
	});
	const [error, setError] = useState('');
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = 'http://localhost:4000/user/singup';
			const { data: res } = await axios.post(url, data);
			navigate('/login');
			console.log(res.message);
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
    	<h2 className="shadow-sm text-success mt-5 p-3 text-center rounded">Crear cuenta</h2>
   		 <Row className="mt-5">
        <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicName">
                    <Form.Label>Nombre Completo:</Form.Label>
                    <input
							type='text'
							placeholder='Nombre completo'
							name='fullName'
							onChange={handleChange}
							value={data.fullName}
							required
							className={styles.input}
						/>
                </Form.Group>
                <Form.Group controlId="formBasicUserName">
                    <Form.Label>Nombre de usuario:</Form.Label>
                    <input
							type='text'
							placeholder='Nombre de usuario'
							name='userName'
							onChange={handleChange}
							value={data.userName}
							required
							className={styles.input}
						/>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Correo electrónico:</Form.Label>
                    <input
							type='email'
							placeholder='Correo electrónico'
							name='userEmail'
							onChange={handleChange}
							value={data.userEmail}
							required
							className={styles.input}
						/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Contraseña:</Form.Label>
                    <input
							type='password'
							placeholder='Contraseña'
							name='userPassword'
							onChange={handleChange}
							value={data.userPassword}
							required
							className={styles.input}/>
                </Form.Group></Form.Group>
                {error && <div className={styles.error_msg}>{error}</div>}
                <Button type="submit">
                    Registrarse
                </Button><br/>
                <Link to='/login'> <a>Ingrese a su cuenta</a></Link>
            </Form>
        	</Col>
    	</Row>
   
		</Container>
		)
};

export default Signup;