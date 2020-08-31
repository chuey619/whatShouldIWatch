import React from "react";
import { Link, Router } from "react-router-dom";
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
              <Link to={`/media/${result.id}`}>{result.name}</Link>
            </div>
          );
        })}
      </div>
    );
  }
}
export default Results;
