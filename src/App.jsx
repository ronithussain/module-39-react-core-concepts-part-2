
import './App.css'
import Counter from './counter'
import Team from './Team'
import Users from './users'
import Friends from './Friends'

function App() {
  function handleClick(){
    alert('Click me')
  }

  const handleClick2 = () => {
    alert('Button click 2')
  }

  const handleClick4 = (num) => {
    alert(num + 5)
  }

  return (
    <>
      <h2>React Core Concepts Part-2</h2>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter ></Counter>


      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={() => alert('Button click 3')}>Click 3</button>
      <button onClick={() => handleClick4(5)}>Click 4</button>
      
      
    </>
  )
}

export default App
