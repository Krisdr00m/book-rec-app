"use client";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import React from "react";

const theme = createTheme({
    palette: {
        primary: {
        main: "#1976d2",
        },
        secondary: {
        main: "#dc004e",
        },
    },
});

export default function MuiProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}