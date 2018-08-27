class Table extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            players: []
        }
        playersRep.on('change', (newValue, oldValue) => {
          this.setState((state) => ({
            players: (playersRep.value ? playersRep.value : [])
          }))
        });
    }
    render() {
        return (
          <div>
              {this.state.players.map((player) => <Player name={player} />)}
          </div>
        )
    }
}
