class Table extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            players: ['Hannah', 'Lawrence', 'Robert', 'Alyssa']
        }
    }
    render() {
        return (
            <div>
                {this.state.players.map((player) => <Player name={player} />)}
            </div>
        )
    }
}
