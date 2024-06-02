import { useState } from "react";
import Todo from "../../interface/Todo";

export default function GetAll() {
   const [ todos, setTodos ] = useState<Array<Todo>>([])

   async function get(): Promise<void> {
      const tk = document.cookie.split('=')[1];
      
      try {
         
         const url: string = 'http://localhost:8080/api/todos';

         const res: Response = await fetch(url, {
            method: "get",
            headers: new Headers({ 'Authorization': `Bearer ${tk}` })
         });

         const todos: Array<Todo> = await res.json();

         setTodos(todos);
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

                     <button onClick={get}>
                        GET
                     </button>

                     {
                        todos.map(todo => {
                           return <p key={Number(todo.id)}> {String(todo.description)} </p>
                        })
                     }

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






