import React, { useEffect, useState } from "react";
import { Container, Row, Col, Stack, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getUser } from "../Services/api";

export const Navbar = () => {
	const [data, setData] = useState({})
	const token = localStorage.getItem('token')
	const getUserTo = async () => {
		const response = await getUser(token);
		setData(response.data)
	}
	getUserTo();
	
	return (
		<Container>
			<Row className="justify-content-xs-between pt-3">
				<Col xs={5} className="d-flex align-items-center">
					<Link to="/users">AUTH REDUX</Link>
				</Col>
				<Col xs={7} >
					<Stack direction="horizontal" gap={2} className="d-flex justify-content-end align-items-center">
						{(localStorage.getItem('token'))
							? (<><p className="m-0">{data.name + ' | ' + data.email}</p>
								<Link to="/signin" onClick={() => localStorage.removeItem('token')}>Log Out</Link></>)
							: (<><Link to="/signin"><Button variant="outline-primary">Login</Button></Link>
								<Link to="/signup"><Button variant="outline-primary">Sign Up</Button></Link></>)
						}
					</Stack>
				</Col>
			</Row>
		</Container>
	)
}