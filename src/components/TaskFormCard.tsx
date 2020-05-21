import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button, Card, CardContent } from "@material-ui/core";

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

const TaskFormCard: React.FC = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <form>
          <TextField
            required
            id="standard-required"
            className={classes.title}
            placeholder="firebaseをやる"
          />
          <Button
            className={classes.createBtn}
            variant="contained"
            color="primary"
            onClick={() => console.log("作成")}
          >
            作成
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default TaskFormCard;
