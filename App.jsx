// import React from 'react'
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// // import Props1 from './components/Props1'

// const App = () => {

//     // let person = {
//     //     Name : "MADHAN",
//     //     Age : 24,
//     //     From : "TN",
//     //     To : "KA"
//     // }

//     // let obj1 = [
//     //     1, 2, 3,
//     //     {id:1, Name:"MADHAN", Age:24},
//     //     {id:2, Name:"KISHORE", Age:25}
//     // ]

//     // let obj2 = {
//     //     Name : "MADHAN",
//     //     Age : 24,
//     //     From : "TN",
//     //     To : "KA",
//     //     arr : [
//     //         {id:1, Name:"MADHAN", Age:24},
//     //         {id:2, Name:"KISHORE", Age:23}
//     //     ]
//     // }
//     return(
//         <div>

//             {/* props with string  */}
//             {/* <Props1 data = 'MADHAN'/>
//             <Props1 data = 'Ramya' /> */}

//             {/* props with Array */}
//             {/* <Props1 data = {[1, 2, 3, 4, "MADHAN"]} /> */}

//             {/* props with obj */}
//             {/* <Props1 data = {person} /> */}

//             {/* props with arr of obj */}
//             {/* <Props1 data = {obj1} /> */}

//             {/* props with obj of arr of obj */}
//             {/* <Props1 data = {obj2} /> */}

//         </div>
//     )
// }

// export default App

// import React from "react";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import Profile from "./components/Insert";
// function App() {
//   return (
//     <div className="container mt-5">
//       <h2>React Add Form Data to Table Component Example</h2>
//       <Profile />
//     </div>
//   );
// }
// export default App;

import React from 'react'
import YoutubeTable from './components/YoutubeTable'

const App = () => {
  return (
    <div>
      <YoutubeTable/>
    </div>
  )
}

export default App