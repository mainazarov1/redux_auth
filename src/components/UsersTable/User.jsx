export const User = ({ user, i }) => (
	(
		<>
			<tr key={user.id} style={(i % 2 === 0) ? { background: 'lightgrey' } : null}>
				<td>{user.id}</td>
				<td size="md" className="text-wrap text-break">{user.email}</td>
				<td>{user.name}</td>
				<td>{user.age}</td>
				<td>{user.role}</td>
				<td>{user.status}</td>
			</tr>
		</>
	)
)
