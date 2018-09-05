class Alerts extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      show: false
    }
    this.alert = this.alert.bind(this)
    this.appear = this.appear.bind(this)
    this.disappear = this.disappear.bind(this)
  }
  componentDidMount() {
    nodecg.listenFor('goodPlay', this.alert)
  }
  async alert() {
    this.appear()
    await sleep(2000)
    this.disappear()
  }
  appear() {
    this.setState((state) => ({
      show: true
    }))
  }
  disappear() {
    this.setState((state) => ({
      show: false
    }))
  }
  render() {
    var display = this.state.show ? <p> Good Play! </p> : '';
    return (
      <div>
        {display}
      </div>
    )
  }
}
