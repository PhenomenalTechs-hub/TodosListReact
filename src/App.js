import './App.css';
import { Footer } from './MyComponents/Footer';
import Header from './MyComponents/Header';
import { Todos } from './MyComponents/Todos';
import {useState, useEffect} from 'react'
import {AddTodo} from './MyComponents/AddTodo'
import {BrowserRouter as Router,
        Switch, 
        Route, 
        Link} from 'react-router-dom'
import { About } from './MyComponents/About';
import FirstUser from './MyComponents/FirstUser';

function App() {
  let initTodo;
  if (localStorage.getItem('todos')===null){
    initTodo = []
  }else{
    initTodo = JSON.parse(localStorage.getItem('todos'))
  }
  const addTodo =(title, desc)=> {
    console.log("I am adding this todo", title, desc)
    let sno;
    if(todos.length === 0){
      sno = 0
    }else{
    sno = todos[todos.length-1].sno+1
    }
    const myTodo = {
      sno:sno,
      title:title,
      desc:desc
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo) 
  }
  const onDelete = (todo) => {
    console.log("i am on delete", todo)
    // let index = todos.indexOf(todo)
    // todos.splice(index,1)
    setTodos(todos.filter((e)=>{
      return e!==todo
    }))
    localStorage.setItem('todos', JSON.stringify(todos))
  }
  const [todos, setTodos] = useState(initTodo)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])
  return (
    <>
    <Router>
    <Header title="My Todos List" searchBar = {false} />
    <Switch>
      <Route exact path="/" render={()=>{
        return(
        <>
    <AddTodo addTodo={addTodo}/>
    <Todos todos = {todos} onDelete = {onDelete}/>
        </>
        )
      }}>
      </Route>
      <Route exact path="/about">
        <About/>
      </Route>
      <Route exact path="/fuser">
        <FirstUser />
      </Route>
    </Switch>
    <Footer/>
    </Router>
    </>
  );
}

export default App;
