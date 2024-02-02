import React, { useState } from "react";
import data from "../data.json";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Box from "@mui/material/Box";
import {
  Button,
  FormControl,
  InputLabel,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import {
  Checkbox,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  Collapse,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Drawer } from "@mui/material";
import Form from "./Form";

function Temp(props) {
  const { row2 } = props;
  const [open2, setOpen2] = useState(false);

  return (
    <>
      <TableRow>
        <TableCell>
          <Checkbox />
          {row2.name}
        </TableCell>
        <TableCell >{row2.rate}</TableCell>
        <TableCell>{row2.total}</TableCell>
        <TableCell>
          <IconButton size="small" onClick={() => setOpen2(!open2)}>
            {open2 ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open2}>
            <Box>
              <Table size="small">
                <TableBody>
                  {row2.ch11.map((x) => {
                    return (
                      <TableRow key={x.id}>
                        <TableCell>
                          <Checkbox />
                          {x.name}
                        </TableCell>
                        <TableCell>{x.total}</TableCell>
                        <TableCell></TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

function CollapseTable(props) {
  const { row } = props;
  const [open, setOpen] = useState(false);

  return (
    <>
      <TableRow>
        <TableCell>
          <Checkbox />
          {row.packages}
        </TableCell>
        <TableCell>{row.rate}</TableCell>
        <TableCell>{row.total}</TableCell>
        <TableCell>
          <IconButton size="small" onClick={() => setOpen(!open)}>
            {!open ? <AddIcon /> : <RemoveIcon />}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open}>
            <Box>
              <Table size="small">
                <TableBody>
                  {row.ch1.map((item) => {
                    return <Temp key={item.id} row2={item} />;
                  })}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

function Home() {
  const [state, setState] = useState({ right: false });

  const sideBar = (open) => (event) => {
    if (
      event.type === "keydown" ||
      event.key === "Tab" ||
      event.key === "Shift"
    ) {
      return;
    }
    setState({ ["right"]: open });
  };

  return (
    <>
      <Box sx = {{padding: 5}}>
        <Button slot="end" variant="contained" onClick={sideBar(true)}>
          Save
        </Button>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Checkbox /> Packages
                </TableCell>
                <TableCell>Rate (in sqft)</TableCell>
                <TableCell>Total</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((item) => {
                return <CollapseTable key={item.id} row={item} />;
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <Drawer anchor={"right"} open={state["right"]} onClose={sideBar(false)}>
          <Form />
        </Drawer>
      </Box>
    </>
  );
}

export default Home;
