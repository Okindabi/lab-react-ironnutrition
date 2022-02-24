import React from 'react';
import './App.css';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import foodsArr from './foods.json';
import FoodBox from './components/FoodBox';

function App() {
  const [foods, setFoods] = React.useState(foodsArr);
  console.log(foods);
  return foods.map((food) => {
    return (
      <div>
        <FoodBox food={food} />
      </div>
    );
  });

  // <div className="App">
  //   <FoodBox
  //     food={{
  //       name: 'Orange',
  //       calories: 85,
  //       image: 'https://i.imgur.com/abKGOcv.jpg',
  //       servings: 1,
  //     }}
  //   />
  //   {foods.map((food, key) => {
  //     return (
  //       <div key={key}>
  //         <p>{food.name}</p>
  //         <img src={food.image} alt={food.name} width={200} />
  //       </div>
  //     );
  //   })}
  // </div>
}
export default App;
