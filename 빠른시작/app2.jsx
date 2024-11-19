
export default function TodoList() {
    return(
        <>
        // This doesn't quite work!
        <img
            src="https://i.imgur.com/yXOvdOss.jpg"
            alt="Hedy Lamarr"
            class="photo"
        />
            <ul>
                <li>Invent new traffic lights</li>
                <li>Rehearse a movie scene</li>
                <li>Improve spectrum technology</li>
            </ul>
      </>
    )
}

// 중괄호를 사용한 jsx의 javascript

const person = {
    name: 'Gregorio Y. zara',
    theme: {
        backgroundColor: 'black',
        color: 'pink'
    }
};

export default function TodoList() {
    return(
        <div style={person.theme}>
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

// 컴포넌트에 props 전달하기

import { getImageUrl} from './utils.jsx'

function Avatar({ person, size}){
    return(
        <img
            className="avatar"
            src={getImageUrl(person)}
            alt={person.name}
            width={size}
            height={size}
        />
    )
}

function Card({children}){
    return(
        <div className="card">
            {children}
        </div>
    )
}
export default function Profile(){
    return(
        <Card>
            <Avatar
                person = {{
                    name: 'Katsuko Saruhashi',
                    imageId : 'Yfe0qp2'
                }}
                size ={100}
            />
        </Card>
    )
}

// 조건부 랜더링

function Item({ name, isPacked}){
    return(
        <li className = "item">
            {name} {isPacked && '✅'}
        </li>
    )
}

export default function PackingList(){
    return(
        <section>
            <h1>Sally Ride's Packing List</h1>
            <ul>
                <Item isPacked={true} name = "Space suit"/>
                <Item isPacked={true} name = "Helmet with a golden leaf"/>
                <Item isPacked={false} name = "Photo of Tam"/>
            </ul>
        </section>
    )
}