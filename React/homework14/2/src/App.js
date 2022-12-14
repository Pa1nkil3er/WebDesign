import CardsList from "./components/CardsList";
import "./App.css";

let cards = [
  { value: "🂡" },
  { value: "🂢" },
  { value: "🂣 " },
  { value: "🂤" },
  { value: "🂥" },
  { value: "🂦" },
  { value: "🂧" },
  { value: "🂨" },
  { value: "🂩" },
  { value: "🂪" },
  { value: "🂫" },
  { value: "🂭" },
  { value: "🂮" },
  { value: "🂱" },
  { value: "🂲" },
  { value: "🂳" },
  { value: "🂴" },
  { value: "🂵" },
  { value: "🂶" },
  { value: "🂷" },
  { value: "🂸" },
  { value: "🂹" },
  { value: "🂺" },
  { value: "🂻" },
  { value: "🂽" },
  { value: "🂾" },
  { value: "🃁" },
  { value: "🃂" },
  { value: "🃃" },
  { value: "🃄" },
  { value: "🃅" },
  { value: "🃆" },
  { value: "🃇" },
  { value: "🃈" },
  { value: "🃉" },
  { value: "🃊" },
  { value: "🃋" },
  { value: "🃍" },
  { value: "🃎" },
  { value: "🃑" },
  { value: "🃒" },
  { value: "🃓" },
  { value: "🃔" },
  { value: "🃕" },
  { value: "🃖" },
  { value: "🃗" },
  { value: "🃘" },
  { value: "🃙" },
  { value: "🃚" },
  { value: "🃛" },
  { value: "🃝" },
  { value: "🃞" },
];

export default function App() {
  return (
    <div className="App">
      <CardsList cards={cards} />
    </div>
  );
}
