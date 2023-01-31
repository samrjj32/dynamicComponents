import logo from "./logo.svg";
import "./App.css";
import ComponentMaker from "./ComponentMaker";

function App() {
  return (
    <div className="App">
      <div className="card-section">
        <div className="card">
          <img src="https://images.pexels.com/photos/2887775/pexels-photo-2887775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
          <p className="card-date">{"March 20 2023"}</p>
          <div className="card-details">
            <h3>{"Hey Different Hues"}</h3>
            <p>{"Learn our tips and tricks on living a nomadic lifecycle"}</p>
          </div>
        </div>
        <div className="vertical-line"></div>

        {CardConfig.map((config) => ComponentMaker(config))}
      </div>
    </div>
  );
}

export default App;

const CardConfig = [
  {
    component: "div",
    className: "card",
    children: [
      {
        component: "img",
        src: "https://images.pexels.com/photos/2887775/pexels-photo-2887775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        component: "p",
        className: "card-date",
        children: "March 20 2030",
      },
      {
        component: "div",
        className: "card-details",
        children: [
          {
            component: "h3",
            children: "Hey Different Hues",
          },
          {
            component: "p",
            children: "Learn our tips and tricks on living a nomadic lifecycle",
          },
        ],
      },
    ],
  },
];
