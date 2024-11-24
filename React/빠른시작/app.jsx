
// 구성 요소 생성 및 중첩
function MyButton(){
    return(
        <button>I'm a button</button>
    )
}

export default function app () {
    <div>
        <h1>Welcome to my app</h1>
        <MyButton/>
    </div>
}

// JSX로 마크업 작성

function AboutPage() {
    return(
        <>
            <h1>About</h1>
            <p>Hello there. <br /> How do you do?</p>
        </>
    )
}

// 스타일 추가

<img className="avatar"/>

// In your CSS

// .avatar{
//     border-radius: 50%;
// }

// 데이터 표시

return(
    <h1>
        {user.name}
    </h1>
)

return (
    <img 
        className="avatar"
        src={user.imageUrl}
    />
)

// 더 복잡한 표현식

const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOss.jpg',
    imageSize: 90,
}

// JSX 중괄호 {} 안에 있는 일반 객체를 이용하여 스타일을 변경할 수 있다.
export default function Profile(){
    return(
        <>
            <h1>{user.name}</h1>
            <img 
                className="avatar"
                src={user.imageUrl}
                alt={'Photo of ' + user.name}
                style= {{
                    width: user.imageSize,
                    height: user.imageSize
                }}
            />
        </>
    )
}

// 조건부 렌더링

let content;
if (isLoggedIn){
    content = <AdminPanel />;
} else{
    content = <LoginForm />;
}
return (
    <div>
        {content}
    </div>
)
// 조금 더 컴팩트한 코드로 만들기

<div>
    {isLoggedIn ? ( <AdminPanel /> ) : ( <LoginForm /> )}
</div>

// 분기가 필요하지 않은 경우

<div>
    {isLoggedIn && <AdminPanel/>}
</div>

// 랜더링 목록

const products = [
    {title: 'Cabbage', id: 1},
    {title: 'Garlic', id: 2},
    {title: 'Apple', id: 3}
];

// 구성요소 내부에서 map()함수를 사용하여 제품 배열을 <li>항목 배열로 변환

// key의 값은 고유하게 식별하는 문자열이나 숫자를 전달해야 한다.
const listItems = products.map(product =>
    <li key={product.id}>
        {product.title}
    </li>
);

return (
    <ul>
        {listItems}
    </ul>
)


// 이벤트에 대응하기

function MyButton() {
    function handleClick() {
        alert('You clicked me!');
    }

    return(
        <button onClick = {handleClick}>
            Click me
        </button>

    )
}

// 화면 업데이트

// 정보를 기억하고 표시할 때 사용

import { useState} from 'react';

function MyButton() {
    // 현재 상태 count와, 이를 업데이트 할 수 있는 setCount 함수
    const [count, setCount] = useState(0);

    function handleClick(){
        setCount(count + 1);
    }

    return(
        <button onClick = {handleClick}>
            Clicked {count} times
        </button>
    )
}

// 동일한 구성 요소를 여러번 랜더링하는 경우 각각이 자체 상태를 갖는다.
// 각 버튼이 자체 count 상태를 갖고, 다른 버튼에 영향을 끼치지 않는다.
import {useState} from 'react'

export default function myApp(){
    return(
        <div>
            <h1>Counters that update separately</h1>
            <MyButton /> 
            <MyButton />
        </div>
    )
}

function MyButton(){
    const [count, setCount] = useState(0);

    function handleClick(){
        setCount(count + 1);
    }

    return(
        <button onClick = {handleClick}>
            Clicked {count} times
        </button>
    )
}

// Hook 사용

export default function MyApp() {
    const [count, setCount] = useState(0);

    function handleClick(){
        setCount(count + 1);
    }

    return(
        <div>
            <h1> Counter that update separately</h1>
            <MyButton count = {count} onClick = {handleClick}/>
            <MyButton count = {count} onClick = {handleClick}/>
        </div>

    )
}

// props를 받아 처리하는 것을 "상태 올리기"라 한다.
function MyButton(count, onClick){
    return( 
        <button onClick = {onClick}>
            Clicked {count} times
        </button>
    )
}