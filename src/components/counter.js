import React, { Component } from "react";
import "../shared/component.css";
class counter extends Component {
  styles = {
    fontSize: 15,
  };
  //   constructor(){
  //       super();
  //       this.handleClick = this.handleClick.bind(this);
  //   }
  renderTags() {
    return (
      <React.Fragment>
        {/* {this.props.children} */}
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatSpan()}
        </span>
        <button
          className="btn btn-primary btn-sm m-2"
          onClick={() => this.props.onIncrement(this.props.counter)}
        >
          Increment
        </button>
        <button
          className="btn btn-secondary btn-sm m-2"
          onClick={() => this.props.onDecrement(this.props.counter)}
          disabled={this.props.counter.value > 0 ? "" : "disabled"}
        >
          Decrement
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.id)}
        >
          Delete
        </button>
      </React.Fragment>
    );
  }

  formatSpan = () => {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  };

  getBadgeClasses() {
    let classes = "badge m2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  render() {
    return <div className="container-fluid">{this.renderTags()}</div>;
  }
}

export default counter;
