import React, { Fragment, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "antd/dist/antd.css";
import Home from "./pages/Home";
import Information from "./pages/Infomation";

const App: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/coin/:id" element={<Information />}></Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
