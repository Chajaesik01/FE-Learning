
import getImageUrl from './utiles';
function Avatar({ person, size}){
    return(
        <img
            className="avatar"
            src={getImageUrl(person, size)}
            alt={person.name}
            width={size}
            height={size}
        />
    )
}

export default function Profile(){
    return(
        <Avatar
            person = {{ name: 'Lin Lanying', imageId: 'ibX5QH6'}}
            size={100}
        />
    )
}

// ... spread 기법

import Avatar from './Avatar.jsx';

function Card({ children}) {
    return (
        <div className='card'>
            {children}
        </div>
    )
}

export default function Profile() {
    return (
        <Card>
            <Avatar
                size = {100}
                person = {{
                    name: 'Katsuko Saruhashi',
                    imageId: 'Vfe0qp2'
                }}
            />
        </Card>
    )
}