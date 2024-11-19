// 1.

function Item({ name, isPacked }) {
    return (
      <li className="item">
        {name} {isPacked ?  '✅' : '❌'}
      </li>
    );
  }
  
// 2. 

function Item({ name, importance }) {
    return (
      <li className="item">
        {name}{importance > 0 ? ' (Importance ' + importance +')' : ""}
      </li>
    );
  }
  
  export default function PackingList() {
    return (
      <section>
        <h1>Sally Ride's Packing List</h1>
        <ul>
          <Item 
            importance={9} 
            name="Space suit" 
          />
          <Item 
            importance={0} 
            name="Helmet with a golden leaf" 
          />
          <Item 
            importance={6} 
            name="Photo of Tam" 
          />
        </ul>
      </section>
    );
  }

// 3. 

function Drink({ name }) {
    const info = name === 'tea' ?{
      type: "leat",
      scale: "15-70 mg/cup",
      history: '4,000+ years'
    }: {
      type: 'bean',
      scale: '80-185 mg/cup',
      history: '1,000+ years'
    }
    return (
      <section>
        <h1>{name}</h1>
        <dl>
          <dt>Part of plant</dt>
          <dd>{info.type}</dd>
          <dt>Caffeine content</dt>
          <dd>{info.scale}</dd>
          <dt>Age</dt>
          <dd>{info.history}</dd>
        </dl>
      </section>
    );
  }
  
  export default function DrinkList() {
    return (
      <div>
        <Drink name="tea" />
        <Drink name="coffee" />
      </div>
    );
  }

  
