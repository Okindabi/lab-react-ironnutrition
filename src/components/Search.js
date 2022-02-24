import { Divider, Input } from 'antd';
import React from 'react';
// Iteration 5
function Search(props) {
  return (
    <div>
      <Divider>Search</Divider>
      <label>Search</label>
      <Input
        value={props.searchText}
        type="text"
        onChange={(e) => {
          props.setSearchText(e.target.value);
        }}
      />
    </div>
  );
}

export default Search;
