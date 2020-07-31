import React from 'react';


class Clock extends React.Component {
  constructor(props) {
    super(props);
    let now = new Date()
    let stampUTC = now.getTime() + now.getTimezoneOffset()*60*1000; //UTC Time stamp
    let remoteStamp = stampUTC;
    this.state = {
      remoteStamp: remoteStamp
    }
  }

  componentDidMount() {
    this.timer = setInterval(()=>{
      this.setState({remoteStamp: this.state.remoteStamp + 1000});
    }, 1000);
  }


  render () {
    console.log(this.props.timezone)
    return (
    <div className = "clock">
      { new Date(this.state.remoteStamp + ( this.props.timezone || 0 )).toLocaleTimeString(this.props.contryCode) } 
    </div>
    )
  }
}

export default Clock;