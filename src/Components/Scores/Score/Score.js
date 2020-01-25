import React from 'react';


class Score extends React.Component {
    render() {
        return <div id={this.props.type} className="score">
            <div className="scoreContainer">
                <span className="scoreHeader" role="img" aria-label="emoji">{this.props.header}️</span>
                <p className="scoreValue">0</p>
            </div>
        </div>;
    }
}

export default Score;
