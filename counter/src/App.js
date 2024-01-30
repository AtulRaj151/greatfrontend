import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
    <button
      onClick={() => {
        // Fix the bug in the next line
        // to complete the question.
        setCount(count + 1);
      }}>
      Clicks: {count}
    </button>
  </div>
  );
}

export default App;
