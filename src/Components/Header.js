import Nav1 from "./Nav1";
import IzaanNavBar from "./Nav";
// import { Nav3, Nav5, Nav4 } from "./Nav"

const Izaan = () => {
  let n1 = "Gulshan";
  let n2 = "neko";
  let n3 = "cat@yahoo";
  return (
    <>
      <header>
        <h1>this the heading</h1>
        <IzaanNavBar house={n1} cat={n2} mail={n3} />
        {/* Named functional components */}
        {/* <Nav1 /> */}
        {/* <Nav3 /> */}
        {/* <Nav4 /> */}
        {/* <Nav5 /> */}
      </header>
    </>
  );
};

export default Izaan;
