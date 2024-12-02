import React, { Component } from "react";

class ClickCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            multiplier: 1,
        };
    }

    increment = () => {
        this.setState((prevState) => ({
            count: prevState.count + prevState.multiplier,
        }));
    };

    decrement = () => {
        this.setState((prevState) => ({
            count: prevState.count - prevState.multiplier,
        }));
    };

    reset = () => {
        this.setState({ count: 0 });
    };

    setMultiplier = (value) => {
        this.setState({ multiplier: value });
    };

    render() {
        const { count, multiplier } = this.state;

        return (
            <div style={{ textAlign: "center", padding: "20px" }}>
                <h1>Click Counter</h1>
                <h2>Лічильник: {count}</h2>
                <h3>Доданок: {multiplier}</h3>

                <div style={{ margin: "20px 0" }}>
                    <button onClick={this.increment} style={styles.button}>
                        Збільшити
                    </button>
                    <button onClick={this.decrement} style={styles.button}>
                        Зменшити
                    </button>
                    <button onClick={this.reset} style={styles.button}>
                        Скинути
                    </button>
                </div>

                <div>
                    <h4>Обрати доданок:</h4>
                    {[1, 5, 10].map((value) => (
                        <button
                            key={value}
                            onClick={() => this.setMultiplier(value)}
                            style={{
                                ...styles.multiplierButton,
                                backgroundColor: multiplier === value ? "#d1ecf1" : "white",
                            }}
                        >
                            {value}
                        </button>
                    ))}
                </div>
            </div>
        );
    }
}

const styles = {
    button: {
        margin: "5px",
        padding: "10px 20px",
        fontSize: "16px",
        borderRadius: "5px",
        cursor: "pointer",
        border: "1px solid #007bff",
        backgroundColor: "#FFCF40",
        color: "white",
        transition: "background-color 0.3s",
        fontFamily: "sans-serif",
    },
    multiplierButton: {
        margin: "5px",
        padding: "10px 15px",
        fontSize: "14px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        cursor: "pointer",
        transition: "background-color 0.3s, border-color 0.3s",
    },
};

export default ClickCounter;

