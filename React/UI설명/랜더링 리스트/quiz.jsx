// 1. 

import { people } from './data.js';
import { getImageUrl } from './utils.js';

export default function List() {
  const chemist = people.filter(person => 
      person.profession === 'chemist')
  const listItems = chemist.map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  );
  return (
    <article>
      <h1>Scientists</h1>
      <ul>{listItems}</ul>
    </article>
  );
}

// 2. 

import { recipes } from './data.js';

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      <ul>
        <h2>김치찌개</h2>
      </ul>
      <ul>
        <h2>된장찌개</h2>
      </ul>
      <ul>
        <h2>고추장찌개</h2>
      </ul>
    </div>
  );
}

// 3. 

import { recipes } from './data.js';

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map(({ id, name, ingredients }) => (
        <div key={id}>
          <h2>{name}</h2>
          <ul>
            {ingredients.map(ingredient => (
              <li key={ingredient}>
                {ingredient}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

// 4.

const poem = {
    lines: [
      'I write, erase, rewrite',
      'Erase again, and then',
      'A poppy blooms.'
    ]
  };
  
  export default function Poem() {
    const NewPoem = poem.lines.map((line, index) => (
      <div key={index}>
        <p>{line}</p>
        <hr />
      </div>
    ));
  
    return (
      <article>
        {NewPoem}
      </article>
    );
  }
  