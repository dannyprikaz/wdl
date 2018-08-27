class Table extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            players: []
        }
        this.addPlayer = this.addPlayer.bind(this)
        playersRep.on('change', (newValue, oldValue) => {
          this.setState((state) => ({
            players: playersRep.value
          }))
        });
    }
    addPlayer(player) {
      this.setState((state) => ({
        players: state.players.concat([player])
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
                {this.state.players.map((player) => <Player name={player} />)}
            </div>
          </div>
        )
    }
}
