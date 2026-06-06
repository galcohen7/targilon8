import React, { useState } from 'react';

function Foo() {
  // Creating a state counter initialized to 0 (From Slide 149)
  const [bar, setBar] = useState(0);

  return (
    <div 
      onClick={() => setBar(bar + 1)} 
      style={{ 
        fontSize: '30px', 
        cursor: 'pointer', 
        color: '#2ea44f', 
        margin: '20px auto',
        padding: '10px 20px',
        border: '2px dashed #2ea44f',
        borderRadius: '10px',
        display: 'inline-block',
        userSelect: 'none'
      }}
    >
      Count is: {bar}
    </div>
  );
}

export default Foo;