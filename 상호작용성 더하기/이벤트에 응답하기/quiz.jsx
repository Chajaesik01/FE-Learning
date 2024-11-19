// 1. 


export default function LightSwitch() {
    function handleClick() {
      let bodyStyle = document.body.style;
      if (bodyStyle.backgroundColor === 'black') {
        bodyStyle.backgroundColor = 'white';
      } else {
        bodyStyle.backgroundColor = 'black';
      }
    }
  
    return (
      <button onClick={handleClick}>
        Toggle the lights
      </button>
    );
  }

  
// 2. 

export default function ColorSwitch({
    onChangeColor,
  }) {
    return (
      <button onClick={e => {
        e.stopPropagation();
        onChangeColor()
      }}>
        Change color
      </button>
    );
  }
  