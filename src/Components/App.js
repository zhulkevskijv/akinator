import React from 'react';
import Scores from "./Scores/Scores";
import Answer from "./Answer/Answer";
import "./main.css"
import Shazam from "./Shazam/Shazam";

class App extends React.Component{
    render() {
        return <div className="container">
            <div className="top">
                <Scores/>
                <Shazam/>
            </div>
                <Answer/>
        </div>


    }
}

export default App;
