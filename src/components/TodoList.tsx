import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import TodoListMenu from "components/TodoListMenu";
import TodoListCard from "./TodoListCard";
import TaskFormCard from "./TaskFormCard";

const useStyles = makeStyles({
  title: {
    padding: 5,
    margin: "0 auto",
  },
});

type TodoListProps = {
  name: string;
};

const TodoList: React.FC<TodoListProps> = ({ name }) => {
  const classes = useStyles();

  return (
    <>
      <TodoListMenu />
      <Typography variant="h6" className={classes.title}>
        {name}
      </Typography>
      <TodoListCard />
      <TodoListCard />
      <TodoListCard />
      <TaskFormCard />
    </>
  );
};

export default TodoList;
