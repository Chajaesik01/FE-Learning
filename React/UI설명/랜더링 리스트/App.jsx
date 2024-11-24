import { people } from './data.js';
import { getImageUrl } from './utils.js';

// // filter와 map 활용
// JavaScript를 이용해 유사한 구성요소 세트를 생성하는 방법 map().
// JavaScript를 사용하여 필터링된 항목의 배열을 만드는 방법 filter().
export default function List() {
    const chemists = people.filter(person => 
        person.profession === 'chemist'
    );

    const listItems = chemists.map(person => 
        <li key = {person.id}>
            <img
                src={getImageUrl(person)}
                alt = { person.name}
            />
            <p>
                <b>{person.name}:</b>
                {' ' + person.profession + ' '}
                known for {person.accomplishment}
            </p>
        </li>
    )

    return <ul>{listItems}</ul>
}

// 각 항목이 하나가 아닌 여러개의 DOM 노드를 랜더링해야하는 경우
// Fragment 구문을 사용하여 하나로 묶는다

import { Fragment } from 'react';

// ...

const listItems = people.map(person =>
  <Fragment key={person.id}>
    <h1>{person.name}</h1>
    <p>{person.bio}</p>
  </Fragment>
);


