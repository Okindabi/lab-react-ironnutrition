import React from 'react';
import './App.css';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import foodsArr from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [foods, setFoods] = React.useState(foodsArr);
  const [searchFoods, setSearchFoods] = React.useState(foods);
  const [searchText, setSearchText] = React.useState('');

  React.useEffect(() => {
    let searchProducts = foods.filter((food) => {
      return food.name.toLowerCase().includes(searchText.toLowerCase());
    });
    setSearchFoods(searchProducts);
  }, [searchText, foods]);

  // function deleteFood (foodNameStr) => {
  //   const filteredFoods = foods.filter((oneFood) => {
  //     return oneFood.name !== foodNameStr; // exclude the food object we want to delete
  //   });

  //   setFoods(filteredFoods);
  // }

  return (
    <div>
      <AddFoodForm foods={searchFoods} setFoods={setSearchFoods} />
      <Search searchText={searchText} setSearchText={setSearchText} />
      <Divider>Food List</Divider>
      {searchFoods.map((food) => {
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
