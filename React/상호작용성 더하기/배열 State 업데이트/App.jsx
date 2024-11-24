
// 배열에서 항목 제거하기

import { useState } from 'react';

let initialArtists = [
    { id: 0, name: 'Marta Colvin Andrade' },
    { id: 1, name: 'Lamidi Olonade Fakeye'},
    { id: 2, name: 'Louise Nevelson'},
  ];

  export default function List() {
    const [artists, setArtists] = useState(
      initialArtists
    );
  
    return (
      <>
        <h1>Inspiring sculptors:</h1>
        <ul>
          {artists.map(artist => (
            <li key={artist.id}>
              {artist.name}{' '}
              <button onClick={() => {
                setArtists(
                  artists.filter(a =>
                    a.id !== artist.id
                  )
                );
              }}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </>
    );
  }

// 배열 변환하기

import { useState } from 'react';

let initialShapes = [
  { id: 0, type: 'circle', x: 50, y: 100 },
  { id: 1, type: 'square', x: 150, y: 100 },
  { id: 2, type: 'circle', x: 250, y: 100 },
];

export default function ShapeEditor() {
  const [shapes, setShapes] = useState(
    initialShapes
  );

  function handleClick() {
    const nextShapes = shapes.map(shape => {
      if (shape.type === 'square') {
        // 변경시키지 않고 반환합니다.
        return shape;
      } else {
        // 50px 아래로 이동한 새로운 원을 반환합니다.
        return {
          ...shape,
          y: shape.y + 50,
        };
      }
    });
    // 새로운 배열로 리렌더링합니다.
    setShapes(nextShapes);
  }

  return (
    <>
      <button onClick={handleClick}>
        Move circles down!
      </button>
      {shapes.map(shape => (
        <div style={{
          background: 'purple',
          position: 'absolute',
          left: shape.x,
          top: shape.y,
          borderRadius:
            shape.type === 'circle'
              ? '50%' : '',
          width: 20,
          height: 20,
        }} />
      ))}
    </>
  );
}


// 배열 내 항목 교체하기

import { useState } from 'react'

let initialCounters = [
    0, 0, 0
]

export default function CounterList() {
    const [counters, setCounters] = useState(
        initialCounters
    );

    function handleIncrementClick(index){
        const nextCounters = counters.map((c, i) => {
            if( i === index){
                return c + 1
            }
            else {
                return c
            }
        })
        setCounters(nextCounters);
    }

    return (
        <ul>
          {counters.map((counter, i) => (
            <li key={i}>
              {counter}
              <button onClick={() => {
                handleIncrementClick(i);
              }}>+1</button>
            </li>
          ))}
        </ul>
      );
}

// 배열에 항목 삽입하기

import { useState } from 'react';

let nextId = 3;
const initialArtists = [
  { id: 0, name: 'Marta Colvin Andrade' },
  { id: 1, name: 'Lamidi Olonade Fakeye'},
  { id: 2, name: 'Louise Nevelson'},
];

export default function List() {
    const [name, setName] = useState('');
    const [artists, setArtists] = useState(
        initialArtists
    )
    
    function handleClick(){
        const insertAt = 1;
        const nextArtists = [
            ...artists.slice(0, insertAt),
            
            { id: nextId++, name: name},

            ...artists.slice(insertAt)
        ]
        setArtists(nextArtists);
        setName('');
    }
}

// reverse나 sort 사용하기

import { useState } from 'react';

const initialList = [
  { id: 0, title: 'Big Bellies' },
  { id: 1, title: 'Lunar Landscape' },
  { id: 2, title: 'Terracotta Army' },
];

export default function List() {
    const [list, setList] = useState(initialList);

    function handleClick(){
        const nextList = [...list]; // 원본 배열 복사
        nextList.reverse();
        setList(nextList);
    }

}


import { useState } from 'react';

let nextId = 3;
const initialList = [
  { id: 0, title: 'Big Bellies', seen: false },
  { id: 1, title: 'Lunar Landscape', seen: false },
  { id: 2, title: 'Terracotta Army', seen: true },
];

export default function BucketList() {
  const [myList, setMyList] = useState(initialList);
  const [yourList, setYourList] = useState(
    initialList
  );

  function handleToggleMyList(artworkId, nextSeen) {
    setMyList(myList.map(artwork => {
      if (artwork.id === artworkId) {
        // 변경된 *새* 객체를 만들어 반환합니다.
        return { ...artwork, seen: nextSeen };
      } else {
        // 변경시키지 않고 반환합니다.
        return artwork;
      }
    }));
  }

  function handleToggleYourList(artworkId, nextSeen) {
    setYourList(yourList.map(artwork => {
      if (artwork.id === artworkId) {
        // 변경된 *새* 객체를 만들어 반환합니다.
        return { ...artwork, seen: nextSeen };
      } else {
        // 변경시키지 않고 반환합니다.
        return artwork;
      }
    }));
  }

  return (
    <>
      <h1>Art Bucket List</h1>
      <h2>My list of art to see:</h2>
      <ItemList
        artworks={myList}
        onToggle={handleToggleMyList} />
      <h2>Your list of art to see:</h2>
      <ItemList
        artworks={yourList}
        onToggle={handleToggleYourList} />
    </>
  );
}

function ItemList({ artworks, onToggle }) {
  return (
    <ul>
      {artworks.map(artwork => (
        <li key={artwork.id}>
          <label>
            <input
              type="checkbox"
              checked={artwork.seen}
              onChange={e => {
                onToggle(
                  artwork.id,
                  e.target.checked
                );
              }}
            />
            {artwork.title}
          </label>
        </li>
      ))}
    </ul>
  );
}
