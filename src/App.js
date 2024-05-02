// ------------- App Specific CSS, also manage global styels of the pages
import { Facebook, LinkedIn, YouTube } from "@mui/icons-material";
import "./App.css";

//------------ Our all pages routes section
import AppRoutes from "./AppRoutes";

function App() {
  const handelchange=()=>{
    
  }
  return (
    <>
      {/* ----------- Our all pages routes section  */}
      <AppRoutes />
      <div style={{position:'fixed',top:'50%'}}>
      <div style={{display:'flex',alignItems:'center',backgroundColor:'red',gap:10,width:'130px',justifyContent:'space-between'}} onMouseOver={handelchange} ><span>Youtube</span>  <YouTube/>  </div>
      <div style={{display:'flex',alignItems:'center',backgroundColor:'skyblue',gap:10,width:'130px',justifyContent:'space-between'}}  onMouseOver={handelchange}><span>Linkedin</span> <LinkedIn/> </div>
      <div style={{display:'flex',alignItems:'center',backgroundColor:'blue',gap:10,width:'130px',justifyContent:'space-between'}}  onMouseOver={handelchange}><span>Facebook</span> <Facebook/> </div>
      </div>
    </>
  );
}

export default App;
