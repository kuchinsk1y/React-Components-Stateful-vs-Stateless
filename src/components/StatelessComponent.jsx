import React from "react";

const StatelessComponent = ({ message }) => {
    return (
        <div style={{ padding: "20px", border: "1px solid #ccc", margin: "10px" }}>
            <h2>Stateless Component</h2>
            <p>{message}</p>
        </div>
    );
};

export default StatelessComponent;