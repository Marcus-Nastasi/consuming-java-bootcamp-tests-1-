import { useState } from "react";
import Todo from "../../interface/Todo";

export default function GetSingle() {
   const [ todos, setTodos ] = useState<Todo>();

   async function get(): Promise<void> {
      const tk = document.cookie.split('=')[1];

      const inp: any = document.getElementById('singleId');

      try {
         
         const url: string = `http://localhost:8080/api/todos/${inp.value}`;
         const options: object = {
            method: "get",
            headers: new Headers({ 'Authorization': `Bearer ${tk}` })
         };

         const res: Response = await fetch(url, options);
         const todo: Todo = await res.json();

         setTodos(todo);
      } catch(e) {
         console.log(e);
      }
   }

   return(
      <>
         <section>
            <section style={sectionOne}>
               <section style={sectionTwo}>
                  <section style={sectionThree}>

                     <label htmlFor="singleId">ID</label>
                     <input type="text" name="id" id="singleId" />

                     <button onClick={get}>
                        GET SINGLE
                     </button>

                     { todos ? String(todos?.description) : "" }

                  </section>
               </section>
            </section>
         </section>
      </>
   );
};

const sectionOne: object = {
   display: "flex",
   flexDirection: "column",
   justifyContent: "center",
   alignItems: "center",
   backgroundColor: "gray",
   width: "screen",
   minHeight: "100vh",
   maxHeight: "fit-content"
};

const sectionTwo: object = {
   display: "flex",
   flexDirection: "column",
   alignItems: "center",
   width: "90%",
   height: "80vh"
};

const sectionThree: object = {
   backgroundColor: "purple",
   display: "flex",
   flexDirection: "column",
   width: "50%",
   justifyContent: "center",
   alignItems: "center",
   marginTop: "10rem"
};






