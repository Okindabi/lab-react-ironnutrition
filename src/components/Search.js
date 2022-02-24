import { Divider, Input } from 'antd';
import React from 'react';
// Iteration 5
function Search(props) {
  return (
    <div>
      <Divider>Search</Divider>
      <label>Search</label>
      <Input value={undefined} type="text" onChange={() => {}} />
    </div>
  );
}

export default Search;
