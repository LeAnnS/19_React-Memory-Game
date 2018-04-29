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
    friends,
    score: 0,
    topScore: 0
  };

// shuffles cards when page loads
  componentDidMount() {
    this.setState({friends: this.shuffleFriends(this.state.friends) });
  }

// function to shuffle cards
  shuffleFriends = friend => {
    let i = friends.length -1;
    while (i > 0) {
      const j = Math.floor(Math.random() * (i +1));
      const temp = friends[i];
      friends[i] = friends[j];
      friends[j] = temp;
      i--;
    }
    return friends;
  };

  handleCorrectGuess = newFriends => {
    const {topScore, score } = this.state;
    const newScore = score +1;
    const newTopScore = newScore > topScore ? newScore : topScore;
    this.setState({
      friends: this.shuffleFriends(newFriends),
      score: newScore,
      topScore: newTopScore
    });
  };

  handleFriendClick = id => {
    let guessedCorrectly = false;
    const newFriends = this.state.data.map(friend => {
      const newFriend = { ...friend };
      if (newFriend.id === id) {
        if (!newFriend.clicked) {
          newFriend.clicked = true;
          guessedCorrectly = true;
        }
      }
      return newFriend;
    });

    guessedCorrectly
      ? this.handleCorrectGuess(newFriends)
      : this.handleWrongGuess(newFriends);
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
              handleClick={this.handleFriendClick}
            />
          ))}
        </Wrapper>
        <Footer />
      </div>



    )
  }
}

export default App;
