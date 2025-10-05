// src/api.jsx
import electricCar from "../src/assets/images/electric-car.png"
import pump from "../src/assets/images/pump.png"
import rupee from "../src/assets/images/pump.png"

export const getCardItems = () => {
  return [
    { img: electricCar, title: "EV" },
    { img: pump, title: "Non-EV" },
    { img: rupee, title: "Cost Estimation" },
    { img: pump, title: "AMD" },
  ];
};
