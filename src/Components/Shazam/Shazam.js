import React from 'react';
import audd from './../axios'


class Shazam extends React.Component {
    state = {listening: false};

    listen = () => {
        this.setState({listening: !this.state.listening});


    };

    render() {
        return <div id="shazam" className="active">
            {this.state.listening && <div id="outerCircle"/>}
            <button id="micButton" onClick={this.listen}>
                <svg className="micIcon" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                     xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                     viewBox="0 0 512 512" style={{enableBackground: "new 0 0 512 512"}} xmlSpace="preserve">
                    <g>
                        <g>
                            <path d="M431.666,239.934c0-8.284-6.717-15-15-15c-8.285,0-15,6.716-15,15c0,80.32-65.346,145.666-145.666,145.666
                    s-145.666-65.346-145.666-145.666c0-8.284-6.717-15-15-15c-8.285,0-15,6.716-15,15c0,91.809,70.799,167.383,160.666,175.02V482
                    h-33.199c-8.285,0-15,6.716-15,15s6.715,15,15,15h96.4c8.283,0,15-6.716,15-15s-6.717-15-15-15H271v-67.047
                    C360.867,407.316,431.666,331.742,431.666,239.934z"/>
                        </g>
                    </g>
                    <g>
                        <g>
                            <path d="M256,0c-43.707,0-79.266,35.559-79.266,79.266v160.668c0,43.707,35.559,79.265,79.266,79.265
                    c43.709,0,79.268-35.559,79.268-79.266V79.266C335.268,35.559,299.709,0,256,0z"/>
                        </g>
                    </g>
                </svg>

            </button>
        </div>
    }
}

export default Shazam;