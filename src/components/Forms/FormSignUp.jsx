import React, { useState } from "react";
import { Button, Container, Form, Modal } from "react-bootstrap"
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signUp } from "../Services/api";


const SignUpForm = () => {
	const navigate = useNavigate();
	const [show, setShow] = useState(false);
	const handleClose = () => {
		setShow(false);
		navigate('/signin')
	};
	const handleShow = () => setShow(true);
	const [data, setData] = useState('');
	const onSubmit = async (e) => {

		e.preventDefault();
		const input = new FormData(e.target);
		const data = {
			email: input.get('email'),
			password: input.get('password'),
			name: input.get('name'),
			age: Number(input.get('age')),
		}
		signUp(data).then(res => {
			if (res.status === 201) {
				setData(res)
				handleShow()
			}
		}
		)
	}
	return (
		<Container>
			<Form onSubmit={onSubmit}>
				<Form.Group className="mb-4">
					<Form.Label>Enter your e-mail</Form.Label>
					<Form.Control name='email' type="email" placeholder="Enter e-mail"></Form.Control>
				</Form.Group>
				<Form.Group className="mb-4">
					<Form.Label>Enter your new password</Form.Label>
					<Form.Control name='password' type="password" placeholder="Password"></Form.Control>
				</Form.Group>
				<Form.Group className="mb-4">
					<Form.Label>Enter your name</Form.Label>
					<Form.Control name='name' type="text" placeholder="Name"></Form.Control>
				</Form.Group>
				<Form.Group className="mb-4">
					<Form.Label>Enter your age</Form.Label>
					<Form.Control name='age' type="number" placeholder="Age.."></Form.Control>
				</Form.Group>
				<Button type="submit">Submit</Button>
			</Form>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>{data.status}</Modal.Title>
				</Modal.Header>
				<Modal.Body>{data ? data.data.msg : null}</Modal.Body>
				<Modal.Footer>
					<Button variant="primary" onClick={handleClose}>
						OK!
					</Button>
				</Modal.Footer>
			</Modal>
		</Container>
	)
}
export default connect()(SignUpForm);