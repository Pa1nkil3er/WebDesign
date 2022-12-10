export default function Li_element(props) {
	return (
		<tr>
			<td>{props.id}</td>
			<td>{props.name}</td>
			<td>{props.square}</td>
			<td>{props.country}</td>
		</tr>
	);
}
