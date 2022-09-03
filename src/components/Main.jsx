













import React from 'react'

function Main({count,setCount,text,setText,handlePost,setIstrue,stopbell,resetbell}) {

  return (
    <div className='main'>
     <h1 className='text'>This is main </h1>
     <h2 className='tell'>Tell the World ABOUT YOU</h2>
     <button className='post-btn'
      onClick={handlePost}
     >Post</button>
     <textarea className='txtBox'
      value={text} onChange={ e => setText(e.target.value)}
     >
     </textarea>
     <p className='count'>{count}</p>
     <div>

     <button 
      onClick={f =>{
      setCount(0);
      setIstrue(false)
      resetbell.play()
      }}
     className='reset-btn'>reset</button>
      &nbsp;&nbsp;&nbsp;
     <button 
      onClick={f => {setIstrue(true);stopbell.play()}}
      className='stop-btn'>stop</button>
     </div>

  </div>

  )
}

export default Main


























































































































































