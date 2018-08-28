class Player extends React.Component {
    constructor(props) {
      super(props)

      this.removePlayer = this.removePlayer.bind(this)
    }

    removePlayer() {
      playersRep.value.splice(playersRep.value.indexOf(this.props.name), 1)
    }
    render() {
        var remover = (this.props.graphic ? '' : <button onClick={this.removePlayer}>Remove</button>)
        return (
            <div>
                <h3> {this.props.name} </h3>
                {remover}
            </div>
        )
    }
}
