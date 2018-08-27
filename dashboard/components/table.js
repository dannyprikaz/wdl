class Table extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            players: []
        }
        this.addPlayer = this.addPlayer.bind(this)
    }
    addPlayer(player) {
      this.setState((state) => ({
        players: state.players.concat([player])
      }))
    }
    render() {
        return (
          <div>
            <AddPlayer addNew={this.addPlayer} />
            <div>
                {this.state.players.map((player) => <Player name={player} />)}
            </div>
          </div>
        )
    }
}
