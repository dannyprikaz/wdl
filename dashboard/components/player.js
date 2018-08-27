class Player extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Ghost Curtis'
        }
    }
    render() {
        return (
            <div>
                <h3> {this.state.name} </h3>
            </div>
        )
    }
}
