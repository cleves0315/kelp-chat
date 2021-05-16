import React, { Component } from 'react'

export default class NotFound extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '0',
    }
  }

  componentDidMount() {
    // this.setState({ name: '111' })
    // console.log(this.state.name)
    // this.setState({ name: '222' })
    // console.log(this.state.name)

    // setTimeout(() => {
    //   this.setState({ name: '111' })
    //   console.log(this.state.name)
    //   this.setState({ name: '222' })
    //   console.log(this.state.name)
    // }, 0)

    new Promise((resolve) => {
      resolve()
    }).then(() => {
      this.setState({ name: '111' })
      console.log(this.state.name)
      this.setState({ name: '222' })
      console.log(this.state.name)
    })
  }

  render() {
    return <div>NotFound...</div>
  }
}
