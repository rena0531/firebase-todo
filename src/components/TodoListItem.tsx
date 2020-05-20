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
  const [progress, setProgress] = useState("");
  const [complete, setComplete] = useState("");
  const [want, setWant] = useState("");

  const getStateProgress = () => {
    task.map((v: Task) => {
      switch (v.state) {
        case "progress":
          console.log("progress", v.name);
          setProgress(v.name);
          break;
        case "complete":
          console.log("complete", v.name);
          setComplete(v.name);
          break;
        case "want":
          console.log("want", v.name);
          setWant(v.name);
          break;
        default:
          console.log("default", v.name);
      }
    });
  };

  useEffect(() => {
    getStateProgress();
  }, []);

  return (
    <Card className={classes.root}>
      <CardContent>
        {task.map((v, i) => (
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
            key={i}
          >
            {v.name}
          </Typography>
        ))}
      </CardContent>
    </Card>
  );
};

export default TodoListItem;
