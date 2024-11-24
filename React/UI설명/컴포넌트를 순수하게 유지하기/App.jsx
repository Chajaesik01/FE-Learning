
// React는 순수한 함수로 이루어져 있다.

// 순수한 함수란?
// 작성되는 React 컴포넌트에 같은 입력이 주어진다면 반드시 같은 JSX를 반환한다는 것을 의미
// 연산만 하는 함수
// React에는 렌더링하면서 읽을 수 있는 세 가지 종류의 입력 요소가 있습니다. 
// props, state, 그리고 context. 이러한 입력 요소는 항상 읽기전용으로 취급해야 합니다

// 사이드 이펙트(의도하지 않은 결과)
// 예시

let guest = 0;

function Cup() {
  // 나쁜 지점: 이미 존재했던 변수를 변경하고 있다!
  guest = guest + 1;
  return <h2>Tea cup for guest #{guest}</h2>;
}

export default function TeaSet() {
  return (
    <>
      <Cup /> 2
      <Cup /> 4
      <Cup /> 6
    </>
  );
}

// guest 변수를 전역변수가 아닌 프로퍼티로 넘겨 순수한 함수를 유지

function Cup({ guest }) {
    return <h2>Tea cup for guest #{guest}</h2>;
  }
  
  export default function TeaSet() {
    return (
      <>
        <Cup guest={1} />
        <Cup guest={2} />
        <Cup guest={3} />
      </>
    );
  }

// local 변형 에시
// 만약 cups 변수나 [] 배열이 TeaGathering의 바깥에서 생성되었다면 큰 문제가 될 겁니다!
// 항목을 해당 배열에 푸시하여 기존 객체를 변경할 수 있습니다.

// 하지만, TeaGathering안에 동일한 렌더링중에 생성되었기 때문에 괜찮습니다. 
// TeaGathering밖에 어떤 코드도 이 현상이 벌어졌다는 것조차 모를 겁니다. 
// 이 현상은 “지역 변형” 이라 불립니다 - 
function Cup({ guest }) {
    return <h2>Tea cup for guest #{guest}</h2>;
  }
  
  export default function TeaGathering() {
    let cups = [];
    for (let i = 1; i <= 12; i++) {
      cups.push(<Cup key={i} guest={i} />); // 함수 내에서 선언되어 있기 때문에 지역 변형
    }
    return cups;
  }