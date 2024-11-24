

function Item({ name, isPacked}){
    if (isPacked){
        // null을 반환하면 아무것도 반환하지 않는다.
        return <li className = "item">{name} ✅</li>
    }
    return <li className = "item">{name}</li>
}

export default function PackingList() {
    return(
        <section>
            <h1>Sally Ride's Packing List</h1>
            <ul>
                <Item
                    isPacked = {true}
                    name = "Space suit"
                />

                <Item
                    isPacked = {true}
                    name = "Helmet with a golden leaf"
                />

                <Item
                    isPacked = {false}
                    name = "Photo of Tam"
                />
            </ul>
        </section>
    )
}

// 조건(심힝) 얀신지( ? : ) 

if (isPacked){
    return <li className="item">{name} ✅</li>
}return <li className="item">{name}</li>

//를 아래와 같이 수정가능

return (
    <li className="item">
        {isPacked ? name + ' ✅ ' : name}
    </li>
)

// 더 많은 HTML 태그로 래핑하기 

function Item({ name, isPacked }) {
    return (
      <li className="item">
        {isPacked ? (
          <del>
            {name + ' ✅'}
          </del>
        ) : (
          name
        )}
      </li>
    );
  }

  // 논리 AND 연산자 (&&)

  return(
    <li className="item">
        {name} {isPacked && '✅'}
    </li>
  )