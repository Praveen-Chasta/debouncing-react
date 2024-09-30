// import { useEffect } from "react"
// import { useState } from "react"


// function App() {

//   const [value, setValue] = useState('')
//   const [debounce, setDebounce] = useState(value)

//   useEffect(() => {
//       const handler = setTimeout(() => {
//           setDebounce(value)
//       },500)

//       return () => {
//         clearTimeout(handler)
//       }

//   },[value])

//   const debouncedElement = (e) => {
//      setValue(e.target.value)
//   }


//   return (  
//      <>
//         <input type = "text" onChange = {debouncedElement}/>
//         <p>Input Text : {debounce}</p>
//      </>
//   )
// }

// export default App


import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"


function App() {
  return (
    <Router>
        <Navbar/>
        <Routes>
            <Route path = "/" element = {<Home />} />
            <Route path = "/Product" element = {<Product />} />
            <Route path = "/Contact" element = {<Contact />} />
        </Routes>
    </Router>
  )
}

export default App



function Navbar(){
   return (
     <>
      <Link to = "/">Home</Link>
      <Link to = "/Product">Product</Link>
      <Link to = "/Contact">Contact</Link>
     </>
   )
}


function Home(){
  return(
    <>
      Home
    </>
  )
}


function Product(){
  return(
    <>
      Product
    </>
  )
}



function Contact(){
  return(
    <>
      Contact
    </>
  )
}