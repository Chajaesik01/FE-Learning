// App.jsx 

import Gallery from './Gallery.jsx';
import { Profile } from './Profile.js';

export default function App() {
  return (
    <div>
      <Profile />
    </div>
  );
}


// Gallery.jsx


export default function Gallery() {
    return (
      <section>
        <h1>Amazing scientists</h1>
        <Profile />
        <Profile />
        <Profile />
      </section>
    );
  }

  // Profile.jsx

  export function Profile() {
    return (
      <img
        src="https://i.imgur.com/QIrZWGIs.jpg"
        alt="Alan L. Hart"
      />
    );
  }
  