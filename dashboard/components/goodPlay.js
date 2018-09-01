class GoodPlay extends React.Component {
  constructor(props){
    super(props)

    this.alert = this.alert.bind(this)
  }

  alert() {
    nodecg.sendMessage('goodPlay');
  }

  render() {
    return(
      <div>
        <button onClick={this.alert}>Good Play!</button>
      </div>
    )
  }
}
