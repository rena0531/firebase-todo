import React from "react";
import "./App.css";
import Header from "components/Header";
import { TaskList } from "pages";

const App: React.SFC = () => {
  return (
    <div className="App">
      <Header />
      <TaskList />
    </div>
  );
};

export default App;
