import Li_element from "./Li_element";

export default function List(props) {
	return (
		<>
			{props.region.map((item, ind) => (
				<Li_element
					key={ind}
					id={item.id}
					name={item.name}
					square={item.square}
					country={item.country}
				/>
			))}
		</>
	);
}
