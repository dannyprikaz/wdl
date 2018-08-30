class AssignRole extends React.Component {
  constructor (props) {
    super (props)

    this.state = {
      role: ''
    }

    this.updateRole = this.updateRole.bind(this)
    this.handleAssignRole = this.handleAssignRole.bind(this)
  }

  updateRole(e) {
    this.setState({
      role: e.target.value
    })
  }

  handleAssignRole() {
    this.props.assignRole(this.state.role)
  }

  render() {
    return(
      <div>
        <select onChange={this.updateRole}>
          {Object.entries([''].concat(onuwRoles)).map((entry) =>
            <option
              key={entry[0]}
              value={entry[1]}
            > {entry[1]} </option> )}
        </select>
        <button onClick={this.handleAssignRole}> Assign Role </button>
      </div>
    )
  }
}
