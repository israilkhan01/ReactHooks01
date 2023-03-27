import React from "react";

class Sandy extends React.Component {

    render() {
            return(
                <div className="">
                    Student: {this.props.student}
                    <br/>
                    Weights: {this.props.ass*this.props.weight}
                </div>
            )
    }
}

export default Sandy;