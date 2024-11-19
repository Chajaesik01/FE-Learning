// 1. 

export default function Clock({ time }) {
    let hours = time.getHours();
    if (hours >= 0 && hours <= 6) {
      className = 'night';
    } else {
      className = 'day';
    }
    return (
      <h1 id="time">
        {time.toLocaleTimeString()}
      </h1>
    );
  }

// 2.

import Panel from './Panel.js';
import { getImageUrl } from './utils.js';

let currentPerson;
export default function Profile({ person }) {
  
  currentPerson = person;
  return (
    <Panel>
      <Header currentPerson={currentPerson}/>
      <Avatar currentPerson={currentPerson}/>
    </Panel>
  )
}

function Header({currentPerson}) {
  return <h1>{currentPerson.name}</h1>;
}

function Avatar({currentPerson}) {
  return (
    <img
      className="avatar"
      src={getImageUrl(currentPerson)}
      alt={currentPerson.name}
      width={50}
      height={50}
    />
  );
}


// 3.

export default function StoryTray({ stories }) {

    return (
      <ul>
        {stories.map(story => (
          <li key={story.id}>
            {story.label}
          </li>
        ))}
        <li>Create Story</li>
      </ul>
    );
  }
  