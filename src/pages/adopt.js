import './styles/adopt.css';
import React from 'react';
import MotionDiv from "../components/motionDiv";
import Image from '../components/image';

export default class Adopt extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      petSpecies: '',
      petName: '',
      petColor: '',
      confirmed: false
    };
  }

  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }

  render() {
    return (
      <MotionDiv content={
        <div>
          <h1>Adoption page</h1>
          <form>
            <p>welcome to adoptzions! pls select what kind of <s>beast</s> pet u'r looking 4</p>
            
            <label>
              <select name="petSpecies" onChange={this.myChangeHandler}>
                <option disabled selected>pik a pet</option>
                <option >kajeek</option>
                <option>bocky</option>
              </select>
            </label>
            <label>
              <p>pls name this <s>monstrosity</s> pet (dammit, roger, stop trying to scare them off)</p>
                <input type="text" name="petName" placeholder="name" required onChange={this.myChangeHandler}>
                </input>
            </label>
            <label>
              <p>cool cool, which color should we paint it?</p>
                <input type="radio" name="petColor" value="blue" onChange={this.myChangeHandler}/>
                <label>blue</label>
                <input type="radio" name="petColor" value="yellow" onChange={this.myChangeHandler}/>
                <label>yellow</label>
            </label>
            <label>
              <br/>
              <h3>Do you want to adopt {this.state.petName}, the {this.state.petColor} {this.state.petSpecies}?</h3>
              <Image petColor={this.state.petColor} petSpecies={this.state.petSpecies}/>
            </label>
            <br/>
            <input type="submit"/>
          </form>
        </div>
      }/>
    );
  }
}
