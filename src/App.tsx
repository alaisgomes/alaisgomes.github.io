import React from "react";
import "styles/index.scss";
import Topbar from "components/Toolbar";
import MainContainer from "views/Main";
import { ThemeProvider } from "@mui/material";
import theme from "./theme/theme";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="background-image"></div>
      <BrowserRouter>
        <div className="App">
          <Topbar />
          <Routes>
            <Route path="/" element={<MainContainer />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
