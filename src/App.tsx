import React from "react";
import "./App.css";
import { Grid, IconButton, makeStyles, Box } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import Header from "components/Header";
import TodoList from "components/TodoList";

const useStyles = makeStyles({
  add: {
    marginLeft: "auto",
  },
  item: {
    background: "#ebecf0",
    maxWidth: 300,
    flexWrap: "wrap",
    display: "flex",
    margin: 10,
    padding: 5,
    position: "relative",
  },
  addTaskList: {
    background: "#ebecf0",
    maxWidth: 300,
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

        <Grid item className={classes.addTaskList}>
          <Box>
            もう１つリストを追加
            <IconButton className={classes.add}>
              <AddIcon />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
