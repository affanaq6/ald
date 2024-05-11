import React from "react";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom"; // Import Routes and Route
import SubFooter from "./components/SubFooter/SubFooter";
import IndexPage from "./pages/IndexPage";
import CaseInfoPage from "./pages/CaseInfoPage";
import "./App.css";

const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/index" element={<IndexPage />} />
                <Route path="/caseinfo" element={<CaseInfoPage />} />
                {/* Define more routes as needed */}
            </Routes>

            <SubFooter />
        </>
    );
};

export default App;
