export default function Avatar() {
    const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
    const description = 'Gregorio Y. Zara';
    return (
      <img
        className="avatar"
        src={avatar}
        alt={description}
      />
    );
  }
  
  const today = new Date();

  function formatDate(date){
    return new Intl.DateTimeFormat('ko-KR',{weekday: 'long'})
  }

  export default function TodoList(){
    <h1>To Do List for {formatDate(today)}</h1>
  }

  // JSX에서 객체 전달하는 방법 {{}}로 묶기

  export default function TodoList(){
    return(
        <ul style={{
            backgroundColor: 'black', //인라인 style속성은 camelCase로 작성됩니다
            color:'pink'
        }}>
            <li>Improve the videophone</li>
            <li>Prepare aeronautics lectures</li>
            <li>Work on the alcohol-fuelled engine</li>
        </ul>
    )
  }

  // JS 객체와 중괄호를 사용한 예제

  const person = {
    name: 'Gregorio Y. Zara',
    theme: {
        backgroundColor: 'black',
        color: 'pink'
    }
  }

  export default function TodoList(){
    return(
        <div style = {person.theme}>
            <h1>{person.name}'s Todos</h1>
            <img
                className="avatar"
                src="https://i.imgur.com/7vQD0fPs.jpg"
                alt="Gregorio Y. Zara"
            />
            <ul>
            <li>Improve the videophone</li>
            <li>Prepare aeronautics lectures</li>
            <li>Work on the alcohol-fuelled engine</li>
            </ul>
        </div>
    )
  }