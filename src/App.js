import React from 'react';
import './App.css';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import foodsArr from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [foods, setFoods] = React.useState(foodsArr);
  const [searchInput, setSearchInput] = React.useState('');
  return (
    <div>
      <AddFoodForm foods={foods} setFoods={setFoods} />
      <Search />
      <Divider>Food List</Divider>

      {foods.map((food) => {
        return (
          <div>
            <FoodBox food={food} />
          </div>
        );
      })}
    </div>
  );
}
export default App;
