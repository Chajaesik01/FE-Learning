//1. 

export default function Profile() {
    return (
      <img
        src="https://i.imgur.com/lICfvbD.jpg"
        alt="Aklilu Lemma"
      />
    );
  }

  

// 2. 
export default function Profile() {
    return(
      <>
      <img src="https://i.imgur.com/jA8hHMpm.jpg" alt="Katsuko Saruhashi" />;
      </>
      )
  }

// 3. 

function Profile() {
    return (
      <>
      <img
        src="https://i.imgur.com/QIrZWGIs.jpg"
        alt="Alan L. Hart"
      />
      </>
    );
  }
  
  export default function Gallery() {
    return (
      <section>
        <h1>Amazing scientists</h1>
        <Profile />
        <Profile />
        <Profile />
      </section>
    );
  }
  
// 4. 

// Write your component below!

export default function Congratulations () {
    return(
    <h1>Good job!</h1>
      )
  }
  
Congratulations();