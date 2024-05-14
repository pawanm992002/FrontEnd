// ------------- App Specific CSS, also manage global styels of the pages
import { Facebook, LinkedIn, YouTube } from "@mui/icons-material";
import "./App.css";

//------------ Our all pages routes section
import AppRoutes from "./AppRoutes";
import { useEffect, useState } from "react";
import { calc } from "@chakra-ui/react";

function App() {

  useEffect(() => {
      const hasSeenModal = sessionStorage.getItem('hasSeenModal');
      if (!hasSeenModal || hasSeenModal === 'false') {
          sessionStorage.setItem('hasSeenModal', true);
      }
  }, []);


// const boxStyle = {
//   display:'flex',alignItems:'center',backgroundColor:'red',gap:10,justifyContent:'space-between',padding:'0 10px',position:'inherit',left:hook.flag1?0:-89,top:253,transition:'all ease 0.3s'
// }

  return (
    <>
      {/* ----------- Our all pages routes section  */}
      <AppRoutes />

    </>
  );
}

export default App;
