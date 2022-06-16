import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Layout from "./containers/Layout";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route exact path="/login" element={<Login />} /> */}
          {/* <Route
            exact
            path="/recovery-password"
            element={<RecoveryPassword />}
          /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
