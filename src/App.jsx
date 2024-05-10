import React from "react";
import Header from "./components/Header/Header.jsx";
import SubHeader from "./components/SubHeader/SubHeader.jsx";
import SubFooter from "./components/SubFooter/SubFooter.jsx";
import MainFooter from "./components/MainFooter/MainFooter.jsx";
import FrontDashboard from "./components/FrontDashboard/FrontDashboard";
import EditBar from "./components/EditBar/EditBar.jsx";  // Import EditBar component
import "./App.css";

const App = () => {
    return (
        <div className="App">
            <Header />
            <SubHeader />
            <FrontDashboard />
            <EditBar />  
            <main>
                <h1>Welcome to My React App</h1>
                <p>This is the main content of the application.</p>
            </main>
            <MainFooter />
            <SubFooter />
        </div>
    );
};

export default App;