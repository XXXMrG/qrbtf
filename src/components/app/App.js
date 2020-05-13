import React from 'react';
import './App.css';
import '../Qrcode.css';
import Footer from "../footer/Footer";
import Header from "../header/Header";
import PartMore from "./PartMore";
import PartParams from "./PartParams";
import PartDownloadViewer from "../../containers/app/PartDownloadViewer";
import PartStylesViewer from "../../containers/app/PartStylesViewer";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div className="Layout">
                    <div className="Qr-outer">
                        <Header/>
                        <PartStylesViewer/>
                        <PartParams/>
                        <PartDownloadViewer/>
                        <PartMore/>
                        <Footer/>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default App;