import React from "react";
import StatefulComponent from "./components/StatefulComponent";
import StatelessComponent from "./components/StatelessComponent";
import ClassComponent from "./components/ClassComponent";

const App = () => {
  return (
      <div>
        <h1>React Components Example</h1>
        <StatefulComponent />
        <StatelessComponent message="This is a stateless component" />
        <ClassComponent />
      </div>
  );
};

export default App;