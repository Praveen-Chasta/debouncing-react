import { useState, useEffect}  from 'react';


function App (){

  const [handler, setHandler] = useState('');
  const [debouncing, setValue] = useState(handler)

  useEffect(() => {
     const value = setTimeout(() => {
         setValue(handler)    
     }, 500)

    return () => (
      clearTimeout(value)
    )

  },[handler])

  return(
    <>
      <input 
          type = "text"
          onChange = {(e) => setHandler(e.target.value)}
          placeholder = "debouncing..."
      />
      <h1>Debouncing Value : {debouncing}</h1>
    </>
  )
}

export default App