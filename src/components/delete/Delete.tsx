export default function Delete() {

   async function get(): Promise<void> {
      const tk = document.cookie.split('=')[1];

      const inpId: any = document.getElementById('id');

      try {
         const url: string = `http://localhost:8080/api/todos/delete/${inpId.value}`;
         const options: object = {
            method: "delete",
            headers: new Headers({ 'Authorization': `Bearer ${tk}` })
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

                     <button onClick={get}>
                        Delete
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






