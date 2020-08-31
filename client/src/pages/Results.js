import React from "react";
class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: this.props.location.state.results,
    };
  }
  render() {
    return (
      <div>
        {this.state.results.map((result) => {
          return (
            <div>
              <p>{result.name}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
export default Results;
