import { useState } from "react";
export default function Dislikes() {
	const [current, setDislikes] = useState(0);
	const AddDislikes = () => {
		setDislikes(current + 1);
	}

	return (
		<div className="dislikes">
			<span>Dislikes:{current}</span>
			<button onClick={AddDislikes}>&#128078;</button>
		</div>
	)
}