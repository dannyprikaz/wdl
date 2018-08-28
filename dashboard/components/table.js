class Table extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            players: {}
        }
        this.addPlayer = this.addPlayer.bind(this)
        playersRep.on('change', (newValue, oldValue) => {
          this.setState((state) => ({
            players: playersRep.value
          }))
        });
    }
    addPlayer(playerName) {
      let newPlayers = Object.assign({}, this.state.players);
      newPlayers[newID()] = {name: playerName, role: 'Troublemaker'}
      this.setState((state) => ({
        players: newPlayers
      }))
    }
    componentDidUpdate() {
      playersRep.value = this.state.players
    }
    render() {
        var adder = this.props.graphic ? '' : <AddPlayer addNew={this.addPlayer} />
        return (
          <div>
            {adder}
            <div>
                {Object.entries(this.state.players).map((entry) =>
                  <Player
                    graphic={this.props.graphic}
                    key={entry[0]}
                    uid={entry[0]}
                    name={entry[1].name}
                    role={entry[1].role}
                  />)
                }
            </div>
          </div>
        )
    }
}
