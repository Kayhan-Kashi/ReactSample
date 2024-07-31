import React from "react";
import './Counter.css'; 

class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {   // this object store the state of the component
            counter: props.counter,
            is_finished: false,
        };
        this.counterIntervalHandler = setInterval(this.updateCounter, 1000);
    }

    // if we want to access this we should call like arrow function
    updateCounter = () => {
        if(this.state.counter == 0) {
            clearInterval(this.counterIntervalHandler);
            this.setState({is_finished: true});
            return;
        }
        this.setState(     // this method update the component and update virtual dom
            {
                counter: this.state.counter - 1,
            }
        );
        console.log(this.state);
    }

    render() {
        return (
            <div className="Counter">
                {!this.state.is_finished && (
                    <React.Fragment> 
                        <div className="Counter-num">{this.state.counter}</div>
                        {this.props.displayBtns === true && <div className="Counter-btns-container">
                            <div className="Counter-btn">+</div>
                            <div className="Counter-btn">-</div>
                        </div>}
                </React.Fragment>
            )}
             {this.state.is_finished && <div>Finished</div>}
            </div>
        );
    }
}

export default Counter;