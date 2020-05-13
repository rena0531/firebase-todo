import React, { useState } from "react";
import { Menu, MenuItem, makeStyles, IconButton } from "@material-ui/core";
import MoreIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles({
  edit: {
    position: "absolute",
    right: 5,
    top: 1,
  },
  menu: {
    position: "absolute",
    top: 50,
    left: 250,
  },
});

const TodoListMenu: React.SFC = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) =>
    setAnchorEl(event.currentTarget);

  const handleClose = () => setAnchorEl(null);

  return (
    <>
      <IconButton
        className={classes.edit}
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreIcon />
      </IconButton>
      <Menu
        className={classes.menu}
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>編集</MenuItem>
        <MenuItem onClick={handleClose}>削除</MenuItem>
      </Menu>
    </>
  );
};

export default TodoListMenu;
