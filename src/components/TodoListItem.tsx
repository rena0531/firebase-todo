import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Typography } from "@material-ui/core";

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
  name: string;
};

const TodoListCard: React.FC<TodoListCardProps> = ({ name }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TodoListCard;
