import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap"
import { useNavigate } from "react-router-dom";
import { signIn } from "../Services/api";

const SignInForm = () => {
	const navigate = useNavigate()
	const [data, setData] = useState('')
	const onSubmit = async (e) => {
		e.preventDefault();
		const input = new FormData(e.target);
		setData('')
		console.log(data);
		signIn(
			{
				email: input.get('email'),
				password: input.get('password'),
			}
		).then(res => {
			if (res.status === 201) {
				const token = res.data.token
				localStorage.setItem('token', token.replaceAll('"', ''));
				setData(res)
				navigate('/users')
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
					<Form.Label>Enter your password</Form.Label>
					<Form.Control name='password' type="password" placeholder="Password"></Form.Control>
				</Form.Group>
				<Button type="submit">Submit</Button>
			</Form >
		</Container>
	)
}
export default SignInForm;