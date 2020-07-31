import React from 'react';


class Clock extends React.Component {
  constructor(props) {
    super(props);
    let now = new Date()
    let stampUTC = now.getTime() + now.getTimezoneOffset()*60*1000; //UTC Time stamp
    this.state = {
      remoteStamp: stampUTC,
      weekDay: 0,
      month: 0
    }
  }

  componentDidMount() {
    this.lang = this.props.state.localisations[`${this.props.state.language}`];
    let remoteDate = new Date(this.state.remoteStamp + ( this.props.timezone || 0 )).getDate();
    let remoteWeekDay = new Date(this.state.remoteStamp + ( this.props.timezone || 0 )).getDay();
    this.setState({
      month: this.lang.month[remoteDate],
      weekDay: this.lang.day[remoteWeekDay]
    });
    this.timer = setInterval(()=>{
      this.setState({remoteStamp: this.state.remoteStamp + 1000});
    }, 1000);
  }


  render () {
    return (
    <div className = "clock">
      { new Date(this.state.remoteStamp + ( this.props.timezone || 0 )).toLocaleString(this.props.contryCode) } 
        <div>
         { this.state.weekDay }
         </div>
    </div>
    )
  }
}

export default Clock;