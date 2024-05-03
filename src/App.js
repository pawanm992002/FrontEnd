// ------------- App Specific CSS, also manage global styels of the pages
import { Facebook, LinkedIn, YouTube } from "@mui/icons-material";
import "./App.css";

//------------ Our all pages routes section
import AppRoutes from "./AppRoutes";
import { useState } from "react";
import { calc } from "@chakra-ui/react";

function App() {
const [hook,setHook] = useState({
  flag1:false,
  flag2:false,
  flag3:false
})

const handleFlagClick = (flagName) => {
  // Toggle the value of the specified flag
  setHook((prevState) => ({
      ...prevState,
      [flagName]: !prevState[flagName],
  }));
};

// const boxStyle = {
//   display:'flex',alignItems:'center',backgroundColor:'red',gap:10,justifyContent:'space-between',padding:'0 10px',position:'inherit',left:hook.flag1?0:-89,top:253,transition:'all ease 0.3s'
// }

  return (
    <>
      {/* ----------- Our all pages routes section  */}
      <AppRoutes />
      <div style={{position:'fixed',top:'50%',color:'white'}}>
      <div  className="box" style={{backgroundColor:'red',top:290}}><span>Youtube</span>  <YouTube htmlColor="white" fontSize="large"/>  </div>
      <div className="box" style={{backgroundColor:'skyblue',top:330}}><span>Linkedin</span> <LinkedIn htmlColor="white" fontSize="large"/> </div>
      <div className="box" style={{backgroundColor:'blue'}}><span>Facebook</span> <Facebook htmlColor="white" fontSize="large"/> </div>
      </div>
    </>
  );
}

export default App;
