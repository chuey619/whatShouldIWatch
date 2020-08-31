import React from "react";
class Show extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMedia: {},
      locations: [],
    };
  }
  componentDidMount() {
    fetch(`/api/media/${this.props.match.params.id}`)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          currentMedia: json.data.collection,
          locations: json.data.collection.locations,
        });
      });
  }
  render() {
    return (
      <div>
        {this.state.currentMedia !== {} ? (
          <div>
            <h1>{this.state.currentMedia.name}</h1>
            {console.log(this.state.currentMedia.locations)}
            <ul>
              {this.state.locations &&
                this.state.locations.map((location) => {
                  return <a href={location.url}>{location.display_name}</a>;
                })}
            </ul>
          </div>
        ) : (
          <p>loading</p>
        )}
      </div>
    );
  }
}

export default Show;
