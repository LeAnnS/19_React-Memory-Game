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


  handleCorrectGuess = newFriends => {
    const { topScore, score } = this.state;
    const newScore = score +1;
    const newTopScore = newScore > topScore ? newScore : topScore;
    this.setState({
      friends: this.shuffleFriends(newFriends),
      score: newScore,
      topScore: newTopScore
    });
  };

  handleIncorrectGuess = friends => {
    this.setState({
      friends: this.resetFriends(friends),
      score: 0
    });
  };

  resetFriends = friends => {
    const resetFriends = friends.map(friend => ({ ...friend, clicked: false }));
    return this.shuffleFriends(resetFriends);
  };

  // function to shuffle  friend cards
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

  handleFriendClick = id => {
    let guessedCorrectly = false;
    const newFriends = this.state.friends.map(friend => {
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
      : this.handleIncorrectGuess(newFriends);
  };


// Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
        <Nav score={this.state.score} topScore={this.state.topScore}/>
        <Header />
        <Wrapper>
          {this.state.friends.map(friend => (
            <FriendCard
              id={friend.id}
              key={friend.id}
              image={friend.image}
              shake={!this.state.score && this.state.topScore}
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
