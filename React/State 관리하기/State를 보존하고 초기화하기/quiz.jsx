// 1. 

import { useState } from 'react';

export default function App() {
  const [showHint, setShowHint] = useState(false);
    return (
      <div>
      {showHint &&
        <p><i>Hint: Your favorite city?</i></p>
      }
        <Form />
        {showHint ? 
        <button onClick={() => {
          setShowHint(false);
        }}>Hide hint</button>
        : <button onClick={() => {
        setShowHint(true);
      }}>Show hint</button>
        }  
      </div>
    )
};

function Form() {
  const [text, setText] = useState('');
  return (
    <textarea
      value={text}
      onChange={e => setText(e.target.value)}
    />
  );
}

// 2. 
import { useState } from 'react';

export default function App() {
  const [reverse, setReverse] = useState(false);
  let checkbox = (
    <label>
      <input
        type="checkbox"
        checked={reverse}
        onChange={e => setReverse(e.target.checked)}
      />
      Reverse order
    </label>
  );
  if (reverse) {
    return (
      <>
        <Field key = "LastName" label="Last name" /> 
        <Field key = "FirstName" label="First name" />
        {checkbox}
      </>
    );
  } else {
    return (
      <>
        <Field key = "FirstName" label="First name" /> 
        <Field key = "LastName" label="Last name" />
        {checkbox}
      </>
    );    
  }
}

function Field({ label }) {
  const [text, setText] = useState('');
  return (
    <label>
      {label}:{' '}
      <input
        type="text"
        value={text}
        placeholder={label}
        onChange={e => setText(e.target.value)}
      />
    </label>
  );
}

// 3. 

<EditContact
initialData={selectedContact}
key = {selectedId}
onSave={handleSave}

<li key={contact.id}>
<button onClick={() => {
  onSelect(contact.id);
}}/>
</li>
</>

// 4.
<img key = {image.id} src={image.src} />

// 5. 

export default function ContactList() {
  const [reverse, setReverse] = useState(false);

  const displayedContacts = [...contacts];
  if (reverse) {
    displayedContacts.reverse();
  }

  return (
    <>
      <label>
        <input
          type="checkbox"
          value={reverse}
          onChange={e => {
            setReverse(e.target.checked)
          }}
        />{' '}
        Show in reverse order
      </label>
      <ul>
        {displayedContacts.map(contact =>
          <li key={contact.id}>
            <Contact contact = {contact}/>
          </li>
        )}
      </ul>
    </>
  );
}
