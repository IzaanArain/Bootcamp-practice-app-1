import Header from "./Components/Header";
import Main from "./Components/Main";
import { Child1, Child2 } from "./Components/Main"
import Footer from "./Components/Footer";
import { useState } from "react";

const people = [
  {
    id: 1,
    name: "izaan",
    mail: "izaan@yahoo.com",
    tel: "03002343089",
  },
  {
    id: 2,
    name: "hamza",
    mail: "hamza@yahoo.com",
    tel: "0210089122",
  },
  {
    id: 3,
    name: "Bial",
    mail: "Bilal@yahoo.com",
    tel: "056889989",
  },
];



const App = () => {
  const [data, setDate] = useState(people);

  const HandleClick=()=>{
   let newData=[...data]
   newData[0].name="salman"
   setDate(newData)
  }
  return (
    <>
      <Header />
      <Main data={data} click={HandleClick}/>
      {/* <Child1 /> */}
      {/* <Child2 /> */}
      <Footer />
    </>
  );
};

export default App;
