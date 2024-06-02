import { useState } from "react";

export default function Login() {
   const [ token, setToken ] = useState<String>("");

   async function getToken(e: any) {
      e.preventDefault();

      const input: any = document.getElementById('loginId'); 
      const url: string = `http://localhost:8080/auth/login`;
      const options: object = {
         method: "POST",
         body: JSON.stringify({ id: input.value }),
         header: new Headers({ "Content-Type": "application/json" })
      };

      try {
         const req: Response = await fetch(url, options);
         const tk: string = await req.json();

         setToken(tk);

         console.log(token);
      } catch(e) {
         console.log(e);
      }
   }

   return(
      <>
         <section style={sectionOne}>
            <section style={sectionTwo}>
               <section style={sectionThree}>

                  <form action=""  style={login}>
                     <label htmlFor="loginId">id</label>
                     <input type="text" name="id" id="loginId" />
                     <button type="submit" onClick={getToken}>enviar</button>
                  </form>

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

const login: object = {
   display: "flex",
   flexDirection: "column",
   width: "50%",
   justifyContent: "space-around",
   alignItems: "center",
   padding: "5rem"
};


