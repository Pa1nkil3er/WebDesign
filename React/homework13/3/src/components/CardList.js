import card from "./card"

export default function CardList(props) {
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