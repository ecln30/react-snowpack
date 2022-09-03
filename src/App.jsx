import './App.css'
import logo from './logo.svg'
import stop from './stop.mp3'
import reset from './reset.mp3'
import React, {useState, useEffect} from 'react';
import Main from './components/Main.jsx'

// App component
function App() {
  const [count, setCount] = useState(0);
  const [text,setText] = useState('')
  const [istrue,setIstrue] = useState(false)
  const [post,setPost] = useState({
    aboutYou: text,name:name,id: Date.now() })

  // audio
  const stopbell = new Audio(stop)
  const resetbell = new Audio(reset)

  function handlePost() {

  }
  useEffect(() => {
    if(istrue) return
    const timer = setTimeout(f => setCount(count + 1), 1000);
    return f => clearTimeout(timer);
  }, [count, setCount]);
// return App
  return (
    <div className="App">
       <h1 className='title'>Hello world</h1>
       <Main count={count} setCount={setCount} 
        handlePost={handlePost}
        setText={setText}
        setIstrue ={setIstrue}
        text={text}
        stopbell={stopbell}
        resetbell={resetbell}
       />
    </div>
  );
}

export default App;























































































































