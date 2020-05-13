import React from "react";
import "./App.css";
import { Grid, makeStyles } from "@material-ui/core";
import Header from "components/Header";
import TodoList from "components/TodoList";
import TodoForm from "components/TodoForm";

const useStyles = makeStyles({
  item: {
    background: "#ebecf0",
    maxWidth: 300,
    flexWrap: "wrap",
    display: "flex",
    margin: 10,
    padding: 5,
    position: "relative",
  },
  addTodoList: {
    background: "#ebecf0",
    width: 300,
    margin: 10,
    padding: 5,
  },
});

const App: React.SFC = () => {
  const classes = useStyles();

  return (
    <div className="App">
      <Header />
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        <Grid item className={classes.item}>
          <TodoList />
        </Grid>

        <Grid item className={classes.item}>
          <TodoList />
        </Grid>

        <Grid item className={classes.addTodoList}>
          <TodoForm />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
