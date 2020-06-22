import React from 'react';
import './App.css';
import PlayerList from "./component/Player/PlayerList";
import PlayerSingle from "./component/Player/PlayerSingle";
import PlayerForm from "./component/Player/PlayerForm";
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
      currentPlayer: {}
    }

    this.updateCurrentPlayer = this.updateCurrentPlayer.bind(this)
  }

  componentDidMount() {
    const url = "http://localhost:4000/players";

    axios.get(url)
      .then((res) => {
        this.setState({ players: res.data })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  updateCurrentPlayer(item) {
    this.setState({ currentPlayer: item })
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col s12">
            <nav>
              <div className="nav-wrapper blue darken-1">
                <a href="#!" className="brand-logo">Soccer Management</a>
              </div>
            </nav>

          </div>
        </div><div className="row">
          <div className="col s3">
            <PlayerList
              players={this.state.players}
              updateCurrentPlayer={this.updateCurrentPlayer}
            />
          </div>
          <div className="col s9">
            <PlayerSingle
              player={this.state.currentPlayer} />
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <PlayerForm />
          </div>
        </div>
      </div>
    )
  };
}

export default App;
