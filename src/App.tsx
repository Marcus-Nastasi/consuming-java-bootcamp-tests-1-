import { useState } from "react";
import AddTodo from "./components/addTodo/AddTodo";
import Delete from "./components/delete/Delete";
import GetAll from "./components/getAll/GetAll";
import GetSingle from "./components/getSingle/GetSingle";
import Login from "./components/login/Login";
import Update from "./components/update/Update";

export default function App() {
   const [ render, setRender ] = useState<string>("login")

   const setLogin = (): void => setRender('login');
   const setGetAll = (): void => setRender('getAll');
   const setGetSingle = (): void => setRender('getSingle');
   const setAdd = (): void => setRender('add');
   const setUpdate = (): void => setRender('update');
   const setDelete = (): void => setRender('delete');

   return(
      <>
         <section>
            <ul style={ulListSec}>
               <li onClick={setLogin}>login</li>
               <li onClick={setGetAll}>get all tasks</li>
               <li onClick={setGetSingle}>get single task</li>
               <li onClick={setAdd}>add</li>
               <li onClick={setUpdate}>update</li>
               <li onClick={setDelete}>delete</li>
            </ul>
         </section>

         { render == 'login' ? <Login /> : "" }
         { render == 'getAll' ? <GetAll /> : "" }
         { render == 'getSingle' ? <GetSingle /> : "" }
         { render == 'add' ? <AddTodo /> : "" }
         { render == 'update' ? <Update /> : "" }
         { render == 'delete' ? <Delete /> : "" }
      </>
   );
};

const ulListSec: object = {
   display: "flex",
   listStyle: "none",
   justifyContent: 'space-evenly',
   padding: '3rem'
};






