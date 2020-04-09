import React from 'react';
import {GlobalStyles} from './Styles/global';

type ClockState = {
    time: Date
};

type AcceptedProps = {
    testProp: string,
    optionalProp?: string
};

class Clock extends React.Component<AcceptedProps, ClockState> {
    constructor(props: AcceptedProps){
        super(props)
        this.state = {
            time: new Date()
        }
    }

    tick() {
        this.setState({
            time: new Date()
        })
    };

    // componentWillMount() {
    //     this.tick();
    // };

    componentDidMount() {
        setInterval(() => this.tick(), 1000);
    };

    render(){
        return(
            <div>
                <GlobalStyles />
                <h1>{this.state.time.toLocaleTimeString()}</h1>
                {/* <p>{this.props.testProp}</p>
                <p>{this.props.optionalProp}</p> */}
            </div>
        )
    }
}

export default Clock;