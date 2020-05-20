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
};

const TodoList: React.FC<TodoListProps> = ({ name }) => {
  const classes = useStyles();
  const [task, setTask] = useState<Task[][]>([]);

  const load = async () => {
    try {
      const tasksData = await fetchTasks();
      Promise.all([...tasksData]).then((values) => {
        const tasks = values.map((v) => v);
        console.log("tasks", tasks);
        setTask(tasks);
      });
    } catch (e) {
      console.log(e, "taskの取得に失敗しました");
    }
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <>
      <TodoListMenu />
      <Typography variant="h6" className={classes.title}>
        {name}
      </Typography>
      {task.map((t: Task[], ti: number) => (
        <TodoListItem key={ti} task={t} />
      ))}
      <TaskFormCard />
    </>
  );
};

export default TodoList;

/* 
{task.forEach((t: Task[], ti: number) => {
        Object.keys(t).forEach((_, key) => (
          <TodoListItem key={ti} name={t[key].name} />
        ));
      })}
*/
