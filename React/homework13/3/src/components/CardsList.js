import Card from "./Card";

export default function CardsList(props) {
  return (
    <div className="cardList">
      {props.cards.map((card, index) => (
        <Card key={index} value={card.value}></Card>
      ))}
    </div>
  );
}
