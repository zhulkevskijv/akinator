import React from 'react';

class Answer extends React.Component {
    render() {
        return <div id="answer">
            <div className="answerContainer">
                <h1 className="answerHeader">Result:</h1>
                <div className="song">
                    <div className="albumCover">
                        <img
                            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.E4g-c1EIukEhQLwTt5zJ0gHaHa%26pid%3DApi&f=1"/>
                    </div>
                    <div className="songData">
                        <p className="songTitle">
                            The Less You Know, the Better
                        </p>
                        <p className="artistAlbum">Tame Implala / Currents</p>
                    </div>
                </div>
                <div className="choose">
                    <button className="right chooseBtn">Right!</button>
                    <button className="wrong chooseBtn">Wrong</button>
                </div>
            </div>
        </div>;
    }
}

export default Answer;
