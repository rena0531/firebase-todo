import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Typography } from "@material-ui/core";
import { Task } from "models/models";

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
};

const TodoListItem: React.FC<TodoListCardProps> = ({ task }) => {
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

  useEffect(() => {
    getState();
  }, []);

  return (
    <>
      {progress.map((v: Task, i: number) => (
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
      ))}
    </>
  );
};

export default TodoListItem;
