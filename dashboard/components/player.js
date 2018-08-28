class Player extends React.Component {
    constructor(props) {
      super(props)

      this.removePlayer = this.removePlayer.bind(this)
    }
    removePlayer() {
      try {
        delete playersRep.value[this.props.uid]
      } catch (e) {}
    }
    render() {
        var remover = (this.props.graphic ? '' : <button onClick={this.removePlayer}>Remove</button>)
        return (
            <div>
                <h3> {this.props.name} </h3>
                <p> Role: {this.props.role} </p>
                {remover}
            </div>
        )
    }
}
