import React from "react";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom"; // Import Routes and Route
import SubFooter from "./components/SubFooter/SubFooter";
import Home from "./pages/Home";
import IndexPage from "./pages/IndexPage";
import JudgesProfile from "./pages/JudgesProfile";
import Pad from "./pages/PadPage";
import CaseInfoPage from "./pages/CaseInfoPage";
import ArticleResults from "./pages/ArticleResults.jsx";
import Statutes from "./pages/Statutes.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import SignUp from "./pages/SignupPage.jsx"
import "./App.css";

const App = () => {
    return (
        <div className="App">
            <Header />
            <div className="Content">
                <Routes>
                    <Route path="/index" element={<IndexPage />} />
                    <Route path="/caseinfo" element={<CaseInfoPage />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/judges-profile" element={<JudgesProfile />} />
                    <Route path="/pad" element={<Pad />} />
                    <Route path="/articles" element={<ArticleResults />} />
                    <Route path="/statutes" element={<Statutes />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    
                    
                    <Route path="/login" element={<SignUp/>}/>
                    {/* Add this route */}
                    {/* Define more routes as needed */}
                </Routes>
            </div>
            <SubFooter />
        </div>
    );
};

export default App;
