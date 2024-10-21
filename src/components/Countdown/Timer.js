import React, { Component } from "react";
import "./Timer.css";

class CountDown extends Component {
  constructor(props) {
    super(props);
    this.count = this.count.bind(this);
    this.state = {
      days: 45,
      hours: 0,
      minutes: 0,
      seconds: 0,
      time_up: ""
    };
    this.x = null;
    this.deadline = null;
  }

  count() {
    const now = new Date().getTime();
    const t = this.deadline - now;
    const dd = Math.floor(t / (1000 * 60 * 60 * 24));
    const hh = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mm = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    const ss = Math.floor((t % (1000 * 60)) / 1000);

    const days = dd < 10 ? "0" + dd : dd;
    const hours = hh < 10 ? "0" + hh : hh;
    const minutes = mm < 10 ? "0" + mm : mm;
    const seconds = ss < 10 ? "0" + ss : ss;

    this.setState({ days, hours, minutes, seconds });

    if (t < 0) {
      clearInterval(this.x);
      this.setState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        time_up: "TIME IS UP"
      });
    }
  }

  componentDidMount() {
    const now = new Date();
    this.deadline = new Date(now.getTime() + 60 * 24 * 60 * 60 * 1000).getTime(); // 60 days from now
    this.x = setInterval(this.count, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.x);
  }

  render() {
    const { days, hours, minutes, seconds, time_up } = this.state;
    return (
      <div id="countdown">
        <div className="col-4">
          <div className="box">
            <p id="day">{days}</p>
            <span className="text">Days</span>
          </div>
        </div>
        <div className="col-4">
          <div className="box">
            <p id="hour">{hours}</p>
            <span className="text">Hours</span>
          </div>
        </div>
        <div className="col-4">
          <div className="box">
            <p id="minute">{minutes}</p>
            <span className="text">Minutes</span>
          </div>
        </div>
        <div className="col-4">
          <div className="box">
            <p id="second">{seconds}</p>
            <span className="text">Seconds</span>
          </div>
        </div>
        {time_up && <div className="time-up">{time_up}</div>}
      </div>
    );
  }
}

export default CountDown;
