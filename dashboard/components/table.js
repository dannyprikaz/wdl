class Table extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            players: []
        }
        this.addPlayer = this.addPlayer.bind(this)
        NodeCG.waitForReplicants(playersRep).then(() => {
          this.setState((state) => ({
            players: (playersRep.value ? playersRep.value : [])
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
