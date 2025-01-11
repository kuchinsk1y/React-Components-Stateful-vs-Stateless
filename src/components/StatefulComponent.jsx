import React, { useState } from "react";

const StatefulComponent = () => {
    const [count, setCount] = useState(0); // Создаем состояние count

    const increment = () => setCount(count + 1); // Увеличить state
    const decrement = () => setCount(count - 1); // Уменьшить state

    return (
        <div style={{ padding: "20px", border: "1px solid #ccc", margin: "10px" }}>
            <h2>Stateful Component</h2>
            <p>Current count: {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
};

export default StatefulComponent;