import './components/App.css'
import List from "./components/List"
import Li_element from "./components/Li_element"
const region = [
  {
    id: 1,
    name: "Одеська область",
    square: "33 310",
    country: "Молдова",
  },
  {
    id: 2,
    name: "Дніпропетровська область",
    square: "31 914",
    country: "Бельгія",
  },
  {
    id: 3,
    name: "Чернігівська область",
    square: "31 865",
    country: "Бельгія",
  },
  {
    id: 4,
    name: "Харківська область",
    square: "29 832",
    country: "Бельгія",
  },
  {
    id: 5,
    name: "Житомирська область",
    square: "33 310",
    country: "Вірменія",
  },
  {
    id: 6,
    name: "Полтавська область",
    square: "28 748",
    country: "Албанія",
  },
  {
    id: 7,
    name: "Херсонська область",
    square: "28 461",
    country: "Албанія",
  },
  {
    id: 8,
    name: "Київська область",
    square: "28 131",
    country: "Албанія",
  },
  {
    id: 9,
    name: "Запорізька область",
    square: "27 180",
    country: "Гаїті",
  },
  {
    id: 10,
    name: "Луганська область",
    square: "26 684",
    country: "Руанда",
  },
  {
    id: 11,
    name: "Донецька область",
    square: "26 517",
    country: "Руанда"
  },
  {
    id: 12,
    name: "Вінницька область",
    square: "26 513",
    country: "Руанда"
  },
  {
    id: 13,
    name: "Автономна Республіка Крим",
    square: "26 513",
    country: "Руанда"
  },
  {
    id: 14,
    name: "Миколаївська область",
    square: "26 513",
    country: "Північна Македонія"
  },
  {
    id: 15,
    name: "Кіровоградська  область",
    square: "26 513",
    country: "Північна Македонія"
  }

]
export default function App() {
  return (
    <div className='App'>
      <h1>Список областей України за площею</h1>
      <table>
        <thead>
          <tr>
            <td>№</td>
            <td>Регіон</td>
            <td>Площа (км²)</td>
            <td>Порівняня країна</td>
          </tr>
        </thead>
        <tbody>
          <List region={region} />
        </tbody>
      </table>
    </div>
  );
}

