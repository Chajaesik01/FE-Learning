import { sculptureList} from './data'

// 일반 변수로 충분하지 않은 경우
// 1. 지역 변수는 랜더링 간에 유지되지 않는다
// 2. 지역 변수를 변경해도 렌더링을 일으키지 않는다.
export default function Gallery() {
    let index  = 0;

    function handleClick() {
        index = index + 1;
    }

    let sculpture = sculptureList[index];

    return(
        <>
            <button onClick={handleClick}>
                Next
            </button>
            <h2>
                <i>{sculpture.name}</i>
                by {sculpture.artist}
            </h2>
            <h3>
                ({index + 1} of {sculptureList.length})
            </h3>

            <img 
                src={sculpture.url}
                alt={sculpture.alt}
            />
            <p>
                {sculpture.description}
            </p>
        </>
    )
}

// state 변수 추가하기

import { useState } from 'react';

let index = 0;
const [index, setIndex] = useState(0);

// 컴포넌트에 여러 state 변수 지정하기


export default function Gallery() {
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);

    function handleClick(){
        setIndex(index + 1);
    }

    function handleMoreClick(){
        setShowMore(!showMore);
    }

    <button onClick={handleClick}>
        Next
    </button>

    <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
    </button>
}