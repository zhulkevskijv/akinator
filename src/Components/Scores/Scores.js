import React from 'react';
import Score from "./Score/Score";

class Scores extends React.Component{
    render() {
        return <div id="scores">
                <Score type="human" header="Humans 🙋‍♂"/>
                <div className="spacer">
                </div>
                <div className="spacer borderSpacer">
                </div>
                <Score type="ai" header="🤖 AI"/>
            </div>
    }
}

export default Scores;