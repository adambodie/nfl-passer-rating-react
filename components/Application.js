// Libs
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Team from './Team';
import Footer from './Footer';
import aValue from './aValue';
import bValue from './bValue';
import cValue from './cValue';
import dValue from './dValue';
import eValue from './eValue';



class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      completions: '',
      attempts: '',
      yards: '',
      touchdowns: '',
      interceptions: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    let a = this.state.completions;
    let b = this.state.attempts;
    let c = this.state.yards;
    let d = this.state.touchdowns;
    let e = this.state.interceptions;
    alert(eValue(aValue(a,b), bValue(c,b), cValue(d,b), dValue(e,b)).toFixed(1));
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <Header name="NFL Passer Rating"/>
          <div className="row">
            <div className="column medium-3 teams">
              <Team />
            </div>
            <div className="column medium-9 stats">
              <form onSubmit={this.handleSubmit}>
                <div className="column medium-4">
                  <input type="text" name="completions" placeholder="Completions" value={this.state.completions} onChange={this.handleChange} />
                </div>
                <div className="column medium-4">
                <input type="text" name="attempts" placeholder="Attempts" value={this.state.attempts} onChange={this.handleChange}/>
                </div>
                <div className="column medium-4">
                  <input type="text" name="yards" placeholder="Yards" value={this.state.yards} onChange={this.handleChange} />
                </div>
                <div className="column medium-4">
                  <input type="text" name="touchdowns" placeholder="Touchdowns" value={this.state.touchdowns} onChange={this.handleChange} />
                </div>
                <div className="column medium-4">
                  <input type="text" name="interceptions" placeholder="Interceptions" value={this.state.interceptions} onChange={this.handleChange} />
                </div>
                  <div className="column medium-4">
                <input type="submit" value="Submit" className="expanded button" />
                </div>
              </form>
            </div>
          </div>
          <Footer/>
      </div>
    );
  }
}

Application.propTypes = {
  completions: React.PropTypes.number,
  attempts: React.PropTypes.number,
  yards: React.PropTypes.number,
  touchdowns: React.PropTypes.number,
  interceptions: React.PropTypes.number
}
export default Application;
