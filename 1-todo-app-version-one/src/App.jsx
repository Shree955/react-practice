import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";

function App() {
  return <center class='todo-container'>
    <AppName />
    <AddTodo />
    <div class="container text-center">
      <div class="row">
       <div class="col-6">
        <input type="text" placeholder ="Enter todo item" />
       </div>
        <div class="col-4">
          <input type="date"/>
        </div>
         <div class="col-2">
          <button type="button" class="btn btn-success">Add</button>
         </div>
      </div>

      <div class="row">
       <div class="col-6">
        Buy Milk
       </div>
        <div class="col-4">
          4/10/2030
        </div>
         <div class="col-2">
          <button type="button" class="btn btn-danger">Delete</button>
         </div>
      </div>

        <div class="row">
       <div class="col-6">
        Go to college
       </div>
        <div class="col-4">
          6/12/2030
        </div>
         <div class="col-2">
          <button type="button" class="btn btn-danger">Delete</button>
         </div>
      </div>
    </div>
  </center>
}

export default App
