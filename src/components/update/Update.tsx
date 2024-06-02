import { useState } from "react";
import Todo from "../../interface/Todo";

export default function Update() {
   const [ todos, setTodos ] = useState<Todo>();

   async function get(): Promise<void> {
      const tk = document.cookie.split('=')[1];

      const inpId: any = document.getElementById('id');
      const inpDesc: any = document.getElementById('desc');

      try {
         const url: string = `http://localhost:8080/api/todos/update/${inpId.value}`;
         const options: object = {
            method: "put",
            body: JSON.stringify({id: inpId.value, description: inpDesc.value }),
            headers: new Headers({ 'Authorization': `Bearer ${tk}`, 'content-type': 'application/json' })
         };

         const res: Response = await fetch(url, options);

         console.log(res);
         
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

                     <label htmlFor="id">ID</label>
                     <input type="text" name="id" id="id" />

                     <label htmlFor="desc">Description</label>
                     <input type="text" name="desc" id="desc" />

                     <button onClick={get}>
                        Update
                     </button>

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






