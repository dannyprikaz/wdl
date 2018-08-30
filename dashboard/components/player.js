class Player extends React.Component {
    constructor(props) {
      super(props)

      this.removePlayer = this.removePlayer.bind(this)
      this.assignRole = this.assignRole.bind(this)
    }
    removePlayer() {
      try {
        delete playersRep.value[this.props.uid]
      } catch (e) {}
    }
    assignRole(role) {
      playersRep.value[this.props.uid].role = role
    }
    render() {
        var remover = (this.props.graphic ? '' : <button onClick={this.removePlayer}>Remove</button>)
        var assigner = (this.props.graphic ? '' : <AssignRole assignRole={this.assignRole} />)
        return (
            <div>
                <h3> {this.props.name} </h3>
                <p> Role: {this.props.role} </p>
                {assigner}
                {remover}
            </div>
        )
    }
}
