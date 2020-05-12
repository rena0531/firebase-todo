import React from "react";
import { makeStyles, IconButton, Typography } from "@material-ui/core";
import MoreIcon from "@material-ui/icons/MoreVert";
import AddIcon from "@material-ui/icons/Add";
import TaskListMenu from "components/TodoListMenu";
import TodoListCard from "./TodoListCard";

const useStyles = makeStyles({
  title: {
    padding: 5,
    margin: "0 auto",
  },
  add: {
    marginLeft: "auto",
  },
  edit: {
    position: "absolute",
    right: 5,
    top: 1,
  },
});

const TodoList: React.SFC = () => {
  const classes = useStyles();

  return (
    <>
      <IconButton className={classes.edit}>
        <MoreIcon />
      </IconButton>
      <TaskListMenu />
      <Typography variant="h6" className={classes.title}>
        TodoListName
      </Typography>
      <TodoListCard />
      <TodoListCard />
      <TodoListCard />
      <IconButton className={classes.add}>
        <AddIcon />
      </IconButton>
    </>
  );
};

export default TodoList;
