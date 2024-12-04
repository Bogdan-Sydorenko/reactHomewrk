import React from "react";

class EmojiList extends React.Component {
    render() {
        const { votes, onVote } = this.props;
        return (
            <div>
                {Object.keys(votes).map((emoji) => (
                    <div key={emoji} style={{ margin: "10px", fontSize: "24px" }}>
            <span>
              {emoji} - {votes[emoji]} Балів
            </span>
                        <button
                            onClick={() => onVote(emoji)}
                            style={{ marginLeft: "10px", padding: "5px 10px" }}
                        >
                            Голосувати
                        </button>
                    </div>
                ))}
            </div>
        );
    }
}

export default EmojiList;
