// 1.
import { useState } from 'react';

export default function Picture() {
  const [isActive, setIsActive] = useState(false);

  let background = 'background';
  let picture = 'picture';
  if (isActive) {
    picture += ' picture--active';
  } else {
    background+= ' background--active';
  }
  
  return (
    <div
      className={background}
      onClick={() => setIsActive(false)}
    >
      <img
        onClick={e => {
          e.stopPropagation();
          setIsActive(true);
        }}
        className={picture}
        alt="Rainbow houses in Kampung Pelangi, Indonesia"
        src="https://i.imgur.com/5qwVYb1.jpeg"
      />
    </div>
  );
}

// 2. 

