import GetAll from "./components/getAll/GetAll";
import Login from "./components/login/Login";

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
         <GetAll />
      </>
   );
};





