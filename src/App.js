import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
// import Title from "./components/Title";
// eslint-disable-next-line
// import Counter from "./components/Counter";
import Footer from "./components/Footer";
import friends from "./friends.json";
// import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };


// Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
        <Nav />
        <Header />
        <Wrapper>
          

          {this.state.friends.map(friend => (
            <FriendCard
              id={friend.id}
              key={friend.id}
              image={friend.image}
            />
          ))}
        </Wrapper>
        <Footer />
      </div>



    )
  }
}

export default App;
