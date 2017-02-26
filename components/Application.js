// Libs
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
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
      interceptions: ''
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
    let a = parseInt(this.state.completions);
    let b = parseInt(this.state.attempts);
    let c = parseInt(this.state.yards);
    let d = parseInt(this.state.touchdowns);
    let e = parseInt(this.state.interceptions);
    alert(eValue(aValue(a,b), bValue(c,b), cValue(d,b), dValue(e,b)));
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <Header name="NFL Passer Rating"/>
          <div className="row">
            <div className="column medium-3">
              <img className="thumbnail" src="https://placehold.it/850x850"/>
            </div>
            <div className="column medium-9">
              <form onSubmit={this.handleSubmit}>
                <input type="text" name="completions" placeholder="Completions" value={this.state.completions} onChange={this.handleChange} />
                <input type="text" name="attempts" placeholder="Attempts" value={this.state.attempts} onChange={this.handleChange}/>
                <input type="text" name="yards" placeholder="Yards" value={this.state.yards} onChange={this.handleChange} />
                <input type="text" name="touchdowns" placeholder="Touchdowns" value={this.state.touchdowns} onChange={this.handleChange} />
                <input type="text" name="interceptions" placeholder="Interceptions" value={this.state.interceptions} onChange={this.handleChange} />
                <input type="submit" value="Submit" className="button" />
              </form>
            </div>
          </div>
          <Footer/>
      </div>
    );
  }
}
export default Application;
