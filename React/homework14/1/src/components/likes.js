import { useState } from "react";
export default function Likes() {
	const [current, setLikes] = useState(0);
	const AddLikes = () => {
		setLikes(current + 1);
	}
	return (
		<div className="likes">
			<span>Likes:{current}</span>
			<button onClick={AddLikes}>&#128077;</button>
		</div>
	)
}