import React, { useState, useEffect } from "react";
import { makeStyles, Typography } from "@material-ui/core";
import TodoListMenu from "components/TodoListMenu";
import { Task } from "models/models";
import { fetchTasks } from "api/List";
import TodoListItem from "./TodoListItem";
import TaskFormCard from "./TaskFormCard";

const useStyles = makeStyles({
  title: {
    padding: 5,
    margin: "0 auto",
  },
});

type TodoListProps = {
  name: string;
  count: number;
};

const TodoList: React.FC<TodoListProps> = ({ name, count }) => {
  const classes = useStyles();
  const [task, setTask] = useState<Task[]>([]);

  const load = async (taskId: number) => {
    try {
      const tasksData = await fetchTasks(taskId);
      setTask(tasksData);
      console.log("task", tasksData);
    } catch (e) {
      console.log(e, "taskの取得に失敗しました");
    }
  };

  useEffect(() => {
    load(0);
  }, []);

  return (
    <>
      <TodoListMenu />
      <Typography variant="h6" className={classes.title}>
        {name}
      </Typography>
      {task.map((t: Task, ti: number) => (
        <TodoListItem name={t.name} key={ti} />
      ))}
      <TaskFormCard />
    </>
  );
};

export default TodoList;
