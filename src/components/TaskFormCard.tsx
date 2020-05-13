import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  TextField,
  ExpansionPanel,
  ExpansionPanelSummary,
  IconButton,
  ExpansionPanelDetails,
  Button,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles({
  root: {
    width: 300,
    margin: 5,
  },
  title: {
    fontSize: 14,
  },
  addBtn: {
    marginLeft: "auto",
  },
  createBtn: {
    right: 20,
    position: "absolute",
  },
});

const TaskFormCard: React.FC = () => {
  const classes = useStyles();

  return (
    <ExpansionPanel className={classes.root}>
      <ExpansionPanelSummary
        expandIcon={
          <IconButton className={classes.addBtn}>
            <AddIcon />
          </IconButton>
        }
        aria-controls="additional-actions1-content"
        id="additional-actions1-header"
      >
        タスクの追加
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
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
          >
            作成
          </Button>
        </form>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default TaskFormCard;
