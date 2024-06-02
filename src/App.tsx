import AddTodo from "./components/addTodo/AddTodo";
import Delete from "./components/delete/Delete";
import GetAll from "./components/getAll/GetAll";
import GetSingle from "./components/getSingle/GetSingle";
import Login from "./components/login/Login";
import Update from "./components/update/Update";

export default function App() {
   return(
      <>
         <section>
            <ul>
               <li>login</li>
               <li>get all tasks</li>
               <li>get single task</li>
               <li>add</li>
               <li>delete</li>
            </ul>
         </section>

         {/* <Login /> */}
         {/* <GetAll /> */}
         {/* <GetSingle /> */}
         {/* <AddTodo /> */}
         {/* <Update /> */}
         <Delete />
      </>
   );
};





