import React from "react";
import { Menu, MenuItem } from "@material-ui/core";

const TodoListMenu: React.SFC = () => {
  return (
    <Menu open={false}>
      <MenuItem>編集</MenuItem>
      <MenuItem>削除</MenuItem>
    </Menu>
  );
};

export default TodoListMenu;
