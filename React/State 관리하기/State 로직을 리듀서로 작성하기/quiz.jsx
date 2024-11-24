// 1. 

dispatch({
    type: 'changed_selection',
    contactId: contact.id          
})

dispatch({
    type: 'edited_message',
    message: e.target.value
  });



// 2. 

<button onClick={() => {
      alert(`email : ${contact.email}`)
        dispatch({
            type: 'edited_message',
            message: e.target.value
          });
      }}>Send to {contact.email}</button>

// 3. 

// messengerReducer.js
export const initialState = {
    selectedId: 0,
    messages: {
      0: 'Hello, Taylor', // contactId = 0의 message 초기 값
      1: 'Hello, Alice', // contactId = 1의 message 초기 값
      2: 'Hello, Bob'  
    },
  };
  
  export function messengerReducer(
    state,
    action
  ) {
    switch (action.type) {
      case 'changed_selection': {
        return {
          ...state,
          selectedId: action.contactId,
        };
      }
      case 'edited_message': {
        return {
          ...state,
          messages: {
            ...state.messages,
            [state.selectedId]: action.message
          }
        };
      }
      case 'sent_message': {
        return {
          ...state,
          messages: {
            ...state.messages,
            [state.selectedId]: ""
          }
        };
      }
      default: {
        throw Error('Unknown action: ' + action.type);
      }
    }
  }
 
// App.js

const message = state.messages[state.selectedId];
  
// 4. 

function dispatch(action){
    const nextState = reducer(state, action)
    setState(nextState)
  }
