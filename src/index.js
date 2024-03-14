import React from "react";
import ReactDOM from "react-dom/client";

//---------- MUI Setup
import { ThemeProvider,createTheme  } from '@mui/material';

// ------- We write global css in this file 
import "./index.css";

//---------- Our whole app structured from here
import App from "./App";

const theme = createTheme();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>
);