// 1. 

import { useState } from 'react';

export default function RequestTracker() {
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);

  async function handleClick() {
    setPending(pending => pending + 1);
    await delay(3000);
    setPending(pending => pending - 1);
    setCompleted(completed + 1);
  }

  return (
    <>
      <h3>
        Pending: {pending}
      </h3>
      <h3>
        Completed: {completed}
      </h3>
      <button onClick={handleClick}>
        Buy
      </button>
    </>
  );
}

function delay(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

// 2. 

export function getFinalState(baseState, queue) {
    let finalState = baseState;
  
    // TODO: do something with the queue...
      for (let update of queue) {
      if (typeof update === 'function') {
        // TODO: apply the updater function
        finalState = update(finalState);
      } else {
        // TODO: replace the state
        finalState = update;
        
      }
    }
    
  
    return finalState;
  }

  
  