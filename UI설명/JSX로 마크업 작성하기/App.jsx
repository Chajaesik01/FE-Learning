<>
  <h1>Hedy Lamarr's Todos</h1>
  <img 
    src="https://i.imgur.com/yXOvdOSs.jpg" 
    alt="Hedy Lamarr" 
    class="photo"
  >
  <ul>
    ...
  </ul>
</>

{/* 부모 태그를 감싸야하는 이유는 
JSX는 화면에서 볼 떄는 HTML같지만, JS객체로 변환되는 작업을 거치기 때문에
함수에서 두개의 객체를 반환하려면 배열로 래핑해야 한다.
이것이 두 개의 JSX 태그를 다른 태그나 Fragment로 래핑하지 않고는 반환할 수 없는 이유이다. */}

export default function TodoList() {
  return (
    <>
      <h1>Hedy Lamarr's Todos</h1>
      <img 
        src="https://i.imgur.com/yXOvdOSs.jpg" 
        alt="Hedy Lamarr" 
        className="photo" 
      />
      <ul>
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve the spectrum technology</li>
      </ul>
    </>
  );
}
