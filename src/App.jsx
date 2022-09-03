import './App.css'
import logo from './logo.svg'
import street from './assets/street.png'
import React, {useState, useEffect} from 'react';
import Main from './components/Main.jsx'

// App component
function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timer = setTimeout(f => setCount(count + 1), 1000);
    return f => clearTimeout(timer);
  }, [count, setCount]);
// return App
  return (
    <div className="App">
       <h1 className='title'>Hello world</h1>
       <p>can we go further</p>
       <Main />
    </div>
  );
}

export default App;























































































































