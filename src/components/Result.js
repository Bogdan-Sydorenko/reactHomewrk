import React from "react";

class Result extends React.Component {
    render() {
        const { votes } = this.props;
        const maxVotes = Math.max(...Object.values(votes));
        const winner = Object.keys(votes).find((key) => votes[key] === maxVotes);

        return (
            <div style={{ marginTop: "20px" }}>
                <h2>Найбільше голосів!!!</h2>
                {maxVotes > 0 ? (
                    <div style={{ fontSize: "36px" }}>
                        {winner} Перемагає з {maxVotes} голосами
                    </div>
                ) : (
                    <div>Жодного голосу не зареєстровано</div>
                )}
            </div>
        );
    }
}

export default Result;
