import { Divider, Input } from 'antd';
import React from 'react';

// Iteration 4
function AddFoodForm(props) {
  const [name, setName] = React.useState('');
  const [image, setImage] = React.useState('');
  const [calories, setCalories] = React.useState('');
  const [servings, setServings] = React.useState('');

  const addFood = (e) => {
    e.preventDefault();
    props.setFoods(
      props.foods.concat({
        name: name,
        image: image,
        calories: calories,
        servings: servings,
      })
    );
  };

  return (
    <form onSubmit={addFood}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input
        value={name}
        type="text"
        onChange={(e) => setName(e.target.value)}
      />

      <label>Image</label>
      <Input
        value={image}
        type="text"
        onChange={(e) => setImage(e.target.value)}
      />

      <label>Calories</label>
      <Input
        value={calories}
        type="number"
        onChange={(e) => setCalories(e.target.value)}
      />

      <label>Servings</label>
      <Input
        value={servings}
        type="number"
        onChange={(e) => setServings(e.target.value)}
      />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
