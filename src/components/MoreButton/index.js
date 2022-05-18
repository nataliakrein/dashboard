import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useNavigate } from "react-router-dom";

export const MoreButton = ({
  id,
  handleDisableForm,
  disabled,
  testId,
  handleEnableForm,
  handleDeleteForm,
}) => {
  const [options, setOptions] = React.useState([
    "Editar",
    "Inativar",
    "Excluir",
  ]);

  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState();

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    index === 0 &&
      disabled === true &&
      window.location.pathname === `/editar/${id}` &&
      handleEnableForm(id);
    index === 0 &&
      disabled === false &&
      window.location.pathname === `/editar/${id}` &&
      handleDisableForm(id);
    index === 0 &&
      window.location.pathname === `/lista` &&
      navigate(`/editar/${id}`);
    index === 1 &&
      window.location.pathname === `/editar/${id}` &&
      handleDeleteForm(id);
    index === 1 &&
      window.location.pathname === `/lista` &&
      handleDisableForm(id);
    index === 1 &&
      disabled === true &&
      window.location.pathname === `/lista` &&
      handleDeleteForm(id);
    setOpen(false);
  };

  React.useEffect(() => {
    disabled === true && setOptions(["Editar", "Excluir"]);
    disabled === true &&
      window.location.pathname === `/editar/${id}` &&
      setOptions(["Reativar", "Excluir"]);
    disabled === false &&
      window.location.pathname === `/editar/${id}` &&
      setOptions(["Inativar", "Excluir"]);
  }, [disabled, window.location.pathname]);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  return (
    <React.Fragment>
      <ButtonGroup variant="text" ref={anchorRef} aria-label="split button">
        <Button
          size="small"
          aria-controls={open ? "split-button-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-label="select an action"
          aria-haspopup="menu"
          onClick={handleToggle}
          data-testid={testId}
        >
          <MoreVertIcon style={{ color: "#9e9e9e" }} />
        </Button>
      </ButtonGroup>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        transition
        role={undefined}
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu">
                  {options.map((option, index) => (
                    <MenuItem
                      key={option}
                      selected={index === selectedIndex}
                      onClick={(event) => handleMenuItemClick(event, index)}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </React.Fragment>
  );
};
