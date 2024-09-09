import Header from "./Components/Header"


export default  function App() {

  console.log(Math.floor(Math.random()*101))
  return (
      <div className="container">
        <Header/>
        <h1>Hell React!!</h1>
      </div>
      )
}

