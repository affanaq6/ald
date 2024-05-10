import React from 'react';

function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to the Home Page</h1>
      <p>This is a simple React tryout page. Feel free to modify and experiment!</p>
      <button onClick={() => alert('Hello, world!')}>Click Me!</button>
    </div>
  );
}

export default App;  