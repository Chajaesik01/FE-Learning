import { useState } from 'react';

export default function Form(){
    const [isSent, setIsSent] = useState(false);
    const [message, setMessage] = useState('Hi!');

    if(isSent){
        return <h1>Your message is on its way!</h1>
    }
    return(
        <form onSubmit={(e) => {
            e.preventDefault();
            setIsSent(true);
            sendMessage(message);
        }}>
            <textarea
                placeholder='Message'
                value={message}
                onChange={e => setMessage(e.target.value)}
            />

            <button type="submit">Send</button>
        </form>
    )
}

function sendMessage(message) {
    // ...
 }


 // 렌더링 스냅샷 

 import { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(number + 1);
        setNumber(number + 1);
        setNumber(number + 1);
      }}>+3</button>
    </>
  )
}

// 시간 경과에 따른 State

export default function Counter() {
    const [number, setNumber] = useState(0);
  
    return (
      <>
        <h1>{number}</h1>
        <button onClick={() => {
          setNumber(number + 5);
          alert(number);
        }}>+5</button>
      </>
    )
  }

  
  import { useState } from 'react';

export default function Form() {
  const [to, setTo] = useState('Alice');
  const [message, setMessage] = useState('Hello');

  function handleSubmit(e) {
    e.preventDefault();
    setTimeout(() => {
      alert(`You said ${message} to ${to}`);
    }, 5000);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        To:{' '}
        <select
          value={to}
          onChange={e => setTo(e.target.value)}>
          <option value="Alice">Alice</option>
          <option value="Bob">Bob</option>
        </select>
      </label>
      <textarea
        placeholder="Message"
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
}