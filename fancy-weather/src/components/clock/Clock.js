import React from 'react';


class Clock extends React.Component {
  state = {
    stampUTC: 0,
    weekDay: 0,
  }

  getStampUTC() {
    let now = new Date();
    return now.getTime() + now.getTimezoneOffset()*60*1000;
  }

  getWeekDay() {
    return new Date(this.getStampUTC() + ( this.props.timezone || 0 )).getDay();
  }

  componentDidMount() {
    this.setState({
      weekDay: this.getWeekDay(),
      stampUTC: this.getStampUTC()
    });

    this.timer = setInterval(()=>{
      this.setState({
        stampUTC: this.state.stampUTC + 1000,
      });
    }, 1000);
  }


  render () {
    return (
    <div className = "clock">
      { new Date(this.state.stampUTC + ( this.props.timezone || 0 )).toLocaleString(this.props.contryCode) } 
        <div>
          { this.props.state.localisations[`${this.props.state.language}`].day[this.state.weekDay] }
        </div>
    </div>
    )
  }
}

export default Clock;