import React, { useEffect, useState } from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import TodoForm from "components/TodoForm";
import { fetchLists, fetchTasks } from "api/List";
import { List, Task } from "models/models";
import TodoListMenu from "components/TodoListMenu";
import TodoListItem from "../components/TodoListItem";
import TaskFormCard from "../components/TaskFormCard";

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
  title: {
    padding: 5,
    margin: "0 auto",
  },
});

export const TaskList: React.FC = () => {
  const classes = useStyles();

  const [data, setData] = useState<List[]>([]);
  const [task, setTask] = useState<Task[][]>([]);

  const getLists = async () => {
    try {
      const listsData = await fetchLists();
      setData(listsData);
      console.log("lists", listsData);
    } catch (e) {
      console.log(e, "listの取得に失敗しました");
    }
  };

  const getTasks = async () => {
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
    getLists();
    getTasks();
  }, []);

  return (
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
    >
      {data.map((lv: List, li: number) => (
        <Grid item className={classes.item} key={li}>
          <TodoListMenu />

          <Typography variant="h6" className={classes.title}>
            {lv.name}
          </Typography>

          {task.map((tv: Task[], ti: number) => (
            <TodoListItem key={ti} task={tv} list={lv} />
          ))}

          <TaskFormCard />
        </Grid>
      ))}
      <Grid item className={classes.addTodoList}>
        <TodoForm />
      </Grid>
    </Grid>
  );
};
