import React from "react";
import Box from "@mui/material/Box";
import { useState } from "react";
import { Button, Stack, TextField, Typography } from "@mui/material";
import { Drawer } from "@mui/material";
import { useForm } from "react-hook-form";
import { Label } from "@mui/icons-material";

function Form(props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      clientName: "",
      startDate: Date,
      endDate: Date,
      code: "",
    },
  });

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

  const Submitform = (data, e) => {
    e.preventDefault();
    console.log(data);
    reset();
    alert("your form is sucessfully submitted")
  };

  return (
    <Box sx={{ width: 500, mt: 5 }} onKeyDown={sideBar(false)}>
      <form onSubmit={handleSubmit(Submitform)}>
        <Stack sx={{ width: 400, ml: 7 }}>
          <Typography sx={{ mb: 1, color: "black", fontSize: 15 }}>
            Client
          </Typography>
          <TextField
            sx={{ mb: 2 }}
            label="name"
            type="text"
            {...register("clientName", {
              required: "client name is required.",
            })}
            error={Boolean(errors.clientName)}
            helperText={errors.clientName?.message}
          />
          <Typography sx={{ mb: 1, color: "black", fontSize: 15 }}>
            Date of Commencement
          </Typography>
          <TextField
            sx={{ mb: 2 }}
            type="date"
            {...register("startDate", {
              required: "startDate is required",
            })}
            error={Boolean(errors.startDate)}
            helperText={errors.startDate?.message}
          />
          <Typography sx={{ mb: 1, color: "black", fontSize: 15 }}>
            Date of Completion
          </Typography>
          <TextField
            sx={{ mb: 2 }}
            type="date"
            {...register("endDate", {
              required: "endDate is required",
            })}
            error={Boolean(errors.endDate)}
            helperText={errors.endDate?.message}
          />
          <Typography sx={{ mb: 1, color: "black", fontSize: 15 }}>
            RFQ Code
          </Typography>
          <TextField
            sx={{ mb: 2 }}
            {...register("code", {
              required: "code is required.",
            })}
            label="code"
            type="text"
          />
          <Button variant="contained" type="submit">
            Done
          </Button>
        </Stack>
      </form>
    </Box>
  );
}

export default Form;
