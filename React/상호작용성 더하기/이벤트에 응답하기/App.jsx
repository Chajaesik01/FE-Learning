export default function Button() {
    function handleClick() {
      alert('You clicked me!');
    }
  
    return (
      <button onClick={handleClick}>
        Click me
      </button>
    );
  }

  // JSX 내에서 인라인으로 정의하는 방법

  <button onCLick={ function handleClick() {
    alert('You clicked me!');
  }}></button>

  // 화살표 함수로 정의

  <button onClick = {() => {
    alert('You clicked me!');
  }}></button>

// 이벤트 핸들러로 전달한 함수들은 호출이 아닌 "전달"되어야 한다.


// 이벤트 핸들러 내에서 Prop 읽기

function AlertButton ({ message, children}){
    return (
        <button onClick = {() => alert(message)}>
            {children}
        </button>
    )
}

export default function Toolbar() {
    return (
        <div>
            <AlertButton message = "Playing">
                Play Movie
            </AlertButton>

            <AlertButton message = "Uploading">
                Upload Image
            </AlertButton>
        </div>
    )
}


// 이벤트 핸들러를 Prop으로 전달하기

function Button({ onClick, children}){
    return (
        <button onClick = {onClick}>
            {children}
        </button>
    )
}

function PlayButton({ movieName}){
    function handlePlayClick() {
        alert('Playing ${movieName');
    }

    return (
        <Button onClick = {handlePlayClick}>
            Play "{movieName}"
        </Button>
    )
}

function UploadButton() {
    return (
        <Button onClick = {() => alert('Uploading :')}>
            Upload Image
        </Button>
    )
}

export default function Toolbar() {
    return (
        <div>
            <PlayButton movieName = "KiKi's Delivery Service"/>
            <UploadButton/>
        </div>
    )
}

// 이벤트 핸들러 Prop 명명하기

function Button({ onSmash, children}){
    return (
        <button onCLick = {onSmash}>
            {children}
        </button>
    )
}

export default function App(){
    return (
        <div>
            <Button onSmash = {() => alert('Playing')}>
                Play Movie
            </Button>

            <Button onSmash = {() => alert('Uploading')}>
                Upload Image
            </Button>
        </div>
    )
}

// 이벤트 전파
// Playing을 눌러도 You click on the toolbar가 출력된다.
// onScroll을 제외한 React 내의 모든 이벤트는 전파 된다.
export default function Toolbar() {
    return (
        <div className = "Toolbar" onClick = {() => {
            alert('You clicked on the toolbar !');
        }}>
            <button onClick= {() => alert('Playing')}>
                Play Movie
            </button>

            <button onClick = {() => alert('Uploading')}>
                Upload Image
            </button>
        </div>
    )
}

// 기본 동작 방지하기
// submit 동작시 페이지 reload 막기
// e.stopPropagation()은 이벤트 핸들러가 상위 태그에서 실행되지 않도록 멈춥니다.
// e.preventDefault() 는 기본 브라우저 동작을 가진 일부 이벤트가 해당 기본 동작을 실행하지 않도록 방지합니다.
export default function Signup() {
    return (
        <form onSubmit = {e => {
            e.preventDefault(); // reload를 방지한다.
            alert('Submitting')
        }}>
            <input/>
            <button>Send</button>
        </form>
    )
}