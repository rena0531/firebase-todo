import React, { useEffect, useState } from "react";
import { Grid, makeStyles } from "@material-ui/core";
import TodoList from "components/TodoList";
import TodoForm from "components/TodoForm";
import fetchLists from "api/List";
import { List } from "models/models";

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

export const TaskList: React.FC = () => {
  const classes = useStyles();

  const [data, setData] = useState<List[]>([]);

  const load = async () => {
    try {
      const listsData = await fetchLists();
      console.log(listsData);
      setData(listsData);
    } catch (e) {
      console.log("taskリストの取得に失敗しました");
    }
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
    >
      {data.map((v: List, i: number) => (
        <Grid item className={classes.item} key={i}>
          <TodoList name={v.name} />
        </Grid>
      ))}

      <Grid item className={classes.addTodoList}>
        <TodoForm />
      </Grid>
    </Grid>
  );
};
