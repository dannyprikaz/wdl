class AddPlayer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      newPlayer: ''
    }

    this.updateNewPlayer = this.updateNewPlayer.bind(this)
    this.handleAddNew = this.handleAddNew.bind(this)
  }
  updateNewPlayer(e) {
    this.setState({
      newPlayer: e.target.value
    })
  }
  handleAddNew() {
    this.props.addNew(this.state.newPlayer)
    this.setState({
      newPlayer: ''
    })
  }
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.newPlayer}
          onChange={this.updateNewPlayer}
        />
        <button onClick={this.handleAddNew}>Add Player</button>
      </div>
    )
  }
}
