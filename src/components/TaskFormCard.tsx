import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button, Card, CardContent } from "@material-ui/core";
import { addTask } from "api/List";
import { Task, List } from "models/models";

const useStyles = makeStyles({
  root: {
    width: 300,
    margin: 5,
  },
  title: {
    fontSize: 14,
  },
  createBtn: {
    right: 20,
    position: "absolute",
  },
});

type TaskFormCardProps = {
  list: List;
};

const TaskFormCard: React.FC<TaskFormCardProps> = ({ list }) => {
  const classes = useStyles();
  const [newTask, setNewTask] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value);
  };

  const onSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    addTask(list.id, newTask);
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <form onSubmit={() => onSubmit}>
          <TextField
            required
            id="standard-required"
            className={classes.title}
            placeholder="firebaseをやる"
            onChange={handleChange}
            value={newTask}
          />
          <Button
            className={classes.createBtn}
            variant="contained"
            color="primary"
            type="submit"
            onClick={(e) => onSubmit(e)}
          >
            作成
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default TaskFormCard;
