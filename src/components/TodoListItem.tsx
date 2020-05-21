import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Typography } from "@material-ui/core";
import { Task, List } from "models/models";

const useStyles = makeStyles({
  root: {
    width: 300,
    margin: 5,
  },
  title: {
    fontSize: 14,
  },
  menuIcon: {
    float: "right",
    position: "relative",
    top: 13,
    right: 13,
  },
});

type TodoListCardProps = {
  task: Task[];
  list: List;
};

const TodoListItem: React.FC<TodoListCardProps> = ({ task, list }) => {
  const classes = useStyles();
  const [progress, setProgress] = useState<Task[]>([]);
  const [complete, setComplete] = useState<Task[]>([]);
  const [want, setWant] = useState<Task[]>([]);

  const getState = () => {
    const stateData = task.map((data) => data);
    task.map((v: Task) => {
      switch (v.state) {
        case "progress":
          setProgress(stateData);
          break;
        case "complete":
          setComplete(stateData);
          break;
        case "want":
          setWant(stateData);
          break;
        default:
          console.log("default", v);
      }
    });
  };

  const getProgress = () => {
    return progress.map((v: Task, i: number) => (
      <Card className={classes.root} key={i}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {v.name}
          </Typography>
        </CardContent>
      </Card>
    ));
  };

  const getComplete = () => {
    return complete.map((v: Task, i: number) => (
      <Card className={classes.root} key={i}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {v.name}
          </Typography>
        </CardContent>
      </Card>
    ));
  };

  const getWant = () => {
    return want.map((v: Task, i: number) => (
      <Card className={classes.root} key={i}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {v.name}
          </Typography>
        </CardContent>
      </Card>
    ));
  };

  useEffect(() => {
    return getState();
  }, [task]);

  return (
    <>
      {list.name === "作業中" && getProgress()}
      {list.name === "完了" && getComplete()}
      {list.name === "やりたいこと" && getWant()}
    </>
  );
};

export default TodoListItem;
