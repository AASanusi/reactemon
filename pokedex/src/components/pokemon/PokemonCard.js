import React, { Component } from "react";

export default class PokemonCard extends Component {
  state = {
    name: "",
    imageUrl: "",
    pokemonIndex: "",
  };

  componentDidMount() {
    const { name, url } = this.props;
    const pokemonIndex = url.split("/")[url.split("/").length - 2];
    const imageURL = `https://github.com/PokeAPO/sprits/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`;
    this.setState({
      name,
      imageURL,
      pokemonIndex,
    });
  }

  render() {
    return (
      <div className="col-md-3 col-sm-6 mb-5">
        <div className="card">
          <h5 className="card-header">{this.state.pokemonIndex}</h5>
          <div className="card-body mx-auto">
            <h6 className="card-title">{this.state.name}</h6>
          </div>
        </div>
      </div>
    );
  }
}
