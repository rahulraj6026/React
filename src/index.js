import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import './index.css';

const CardList = (props) =>(
    <div>
        {props.profiles.map(profile => <Card key={profile.id} {...profile}/>)}
    </div>
);
//this create map (<Card />,<Card />, <Card />)

class Card extends React.Component {
	render() {
        const profile = this.props; //testData[0];
  	return (
    	<div className="github-profile">
    	  <img  src={profile.avatar_url} />
        <div className="info">
          <div className="name">{profile.name}</div>
          <div className="company">{profile.company}</div>
        </div>
    	</div>
    );
  }
}
//We call this class render method from cardList with testData and using this which points to current class 
//which is Card we fetch the profile value and pass all the required attributes
class Form extends React.Component{
    //userInpt = React.createRef();
    state = {userName : ' '}
    handleSubmit = async(event) => {
        event.preventDefault();//to avoid browser to get refreshed
        const resp = await axios.get(`https://api.github.com/users/${this.state.userName}`);
        this.setState({userName: ''});
        this.props.onSubmit(resp.data);
        //console.log(this.userInpt.current.value); print the value in text box
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}> 
                <input type="text" placeholder="Git Hub Username" value={this.state.userName} required onChange={
                    event => {this.setState({userName: event.target.value})}
                }></input>
                <button>ADD</button>
            </form>
        );
    }
}
//fetch the value of the target location and assign it to the state object which gets updated for username
//call handle submit on submit of the form
class App extends React.Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         profiles: testData,
    //     }
    // }instead of this code we can create a object with profiles array
    state= {
        profiles: [],
    }
    addNewProfile = (profileData) => {
        this.setState(prevState => ({
                profiles: [...prevState.profiles,profileData] //concat operation
        }));
    }
	render() {
  	return (
    	<div>
          <div className="header">{this.props.title}</div>
            <Form onSubmit={this.addNewProfile}/>
            <CardList profiles={this.state.profiles}/>
    	</div>
    );
  }	
}
//We call cradList from above class which inturn calls card where all the logic is handled.
ReactDOM.render(
	<App title="The GitHub Cards App" />,
    document.getElementById('root'),
);