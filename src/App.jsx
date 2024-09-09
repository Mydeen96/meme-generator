import Header from "./Components/Header"
import Memepage from "./Components/Memepage"

export default  function App() {

  console.log(Math.floor(Math.random()*101))
  return (
      <div className="container">
        <Header/>
        <Memepage />
      </div>
      )
}

