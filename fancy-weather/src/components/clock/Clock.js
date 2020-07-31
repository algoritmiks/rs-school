import React from 'react';


class Clock extends React.Component {
  constructor(props) {
    super(props);
    let now = new Date()
    let stampUTC = now.getTime() + now.getTimezoneOffset()*60*1000; //UTC Time stamp
    let remoteStamp = stampUTC;
    this.state = {
      currentTime: 1,
      now: stampUTC,
      remoteStamp: remoteStamp
    }
  }

  componentDidMount() {
    this.timer = setInterval(()=>{
      this.setState({currentTime: this.state.currentTime + 1});
      this.setState({remoteStamp: this.state.remoteStamp + 1000});
    }, 1000);
  }


  render () {
    console.log(this.props.timezone)
    return (
    <div className = "clock">
      { new Date(this.state.remoteStamp + ( this.props.timezone || 0 )).toLocaleTimeString('ru') } 
    </div>
    )
  }
}

export default Clock;