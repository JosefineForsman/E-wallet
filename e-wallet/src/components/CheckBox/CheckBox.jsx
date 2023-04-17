// import "./CheckBox.scss";
// import { useState } from "react";

// function CheckBox() {
//   const [first, setFirst] = useState(true);
//   const [second, setSecond] = useState(true);

//   const handleChange = (data) => {
//     if (data == "first") {
//       if (first == true) {
//         console.log(data, "our value");
//       }
//       setFirst(!first);
//     }
//     if (data == "second") {
//       if (second == true) {
//         console.log(data, "our value");
//       }
//       setSecond(!second);
//     }
//   };

//   return (
//     <div>
//       <input
//         type="checkbox"
//         value={first}
//         onChange={() => handleChange("first")}
//       />{" "}
//       First
//       <input
//         type="checkbox"
//         value={second}
//         onChange={() => handleChange("second")}
//       />{" "}
//       Second
//     </div>
//   );
// }

// export default CheckBox;
