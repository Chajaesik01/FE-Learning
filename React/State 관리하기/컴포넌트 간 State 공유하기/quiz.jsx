
// 1. 
import { useState } from 'react';

export default function SyncedInputs() {

  const [text, setText] = useState('');
  function handleChange(e) {
    setText(e.target.value);
  }
  return (
    <>
      <Input label="First input"  value = {text} onChange={handleChange}/>
      <Input label="Second input" value = {text} onChange={handleChange}/>
    </>
  );
}

function Input({ label, value, onChange }) {

  return (
    <label>
      {label}
      {' '}
      <input
        value={value}
        onChange = {onChange}
      />
    </label>
  );
}

// 2. 

import { useState } from 'react';
import { foods, filterItems } from './data.js';

export default function FilterableList() {
  const [query, setQuery] = useState('');
  const result = filterItems(foods, query)

  function handleChange(e) {
    setQuery(e.target.value);
  }
  return (
    <>
      <SearchBar query = {query} onChange = {handleChange}/>
      <hr />
      <List items={result} />
    </>
  );
}

function SearchBar({query, onChange}) {
  return (
    <label>
      Search:{' '}
      <input
        value={query}
        onChange={onChange}
      />
    </label>
  );
}

function List({ items }) {
  return (
    <table>
      {items.map(food => (
        <tr key={food.id}>
          <td>{food.name}</td>
          <td>{food.description}</td>
        </tr>
      ))}
    </table>
  );
}
