import React, { useEffect } from "react";
import { Container, Spinner, Table } from "react-bootstrap";
import { connect } from "react-redux";
import { fetchUsers } from "./../../actions/usersActions";
import { User } from "./User";

const UsersTable = ({ dispatch, loading, users, hasErrors }) => {
	useEffect(() => {
		dispatch(fetchUsers())
	}, [dispatch]);

	const renderUsers = () => {
		if (loading) return <tr><td colSpan={6}><div className="d-flex align-items-center justify-content-center py-5"><Spinner animation="border" variant="primary" className="me-3"/>Loading users...</div></td></tr>
		if (hasErrors) return <tr><td colSpan={6}><p className="d-flex align-items-center justify-content-center py-5">Unable to display users.</p></td></tr>
		if (users.length === 0) return <tr><td colSpan={6}><p className="d-flex align-items-center justify-content-center py-5">Not users.</p></td></tr>
		return users.map((user, i) => <User key={user.id} user={user} i={i} />)
	}
	return (
		<Container>
			<div className="table-responsive">
				<Table striped bordered hover size="sm">
					<thead className="table-dark">
						<tr>
							<th>#</th>
							<th className="text-wrap">Email</th>
							<th>Name</th>
							<th>Age</th>
							<th>role</th>
							<th>Status</th>
						</tr>
					</thead>
					<tbody>
						{renderUsers()}
					</tbody>
				</Table>
			</div>
		</Container>
	)
}
const mapStateToProps = (state) => ({
	loading: state.users.loading,
	users: state.users.users,
	hasErrors: state.users.hasErrors,
})
export default connect(mapStateToProps)(UsersTable)