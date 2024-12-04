import React, { Component } from "react";
import EmojiList from "./components/EmojiList";
import Result from "./components/Result";

class App extends Component {
    constructor(props) {
        super(props);
        const savedVotes = localStorage.getItem("emojiVotes");
        this.state = {
            votes: savedVotes
                ? JSON.parse(savedVotes)
                : { "😊": 0, "😂": 0, "❤️": 0, "👍": 0 },
        };
    }

    componentDidUpdate(_, prevState) {
        if (prevState.votes !== this.state.votes) {
            localStorage.setItem("emojiVotes", JSON.stringify(this.state.votes));
        }
    }

    handleVote = (emoji) => {
        this.setState((prevState) => ({
            votes: {
                ...prevState.votes,
                [emoji]: prevState.votes[emoji] + 1,
            },
        }));
    };

    clearVotes = () => {
        this.setState({
            votes: { "😊": 0, "😂": 0, "❤️": 0, "👍": 0 },
        });
        localStorage.removeItem("emojiVotes");
    };

    render() {
        return (
            <div style={{ textAlign: "center", marginTop: "20px" }}>
                <h1>Голосуй за найкращий смайл!!!</h1>
                <EmojiList votes={this.state.votes} onVote={this.handleVote} />
                <Result votes={this.state.votes} />
                <button
                    onClick={this.clearVotes}
                    style={{ marginTop: "20px", padding: "10px 20px" }}
                >
                    Очистити результати
                </button>
            </div>
        );
    }
}

export default App;
