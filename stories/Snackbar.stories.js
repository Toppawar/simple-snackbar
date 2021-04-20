import React, { useCallback } from "react";
import { useSnackBar, SnackBarProvider } from "../index";
import Snackbar from "../Snackbar";

export default {
  title: "Example/Snackbar",
  component: Snackbar,
  decorators: [
    (Children) => (
      <SnackBarProvider>
        <Children />
      </SnackBarProvider>
    ),
  ],
};

const Component = (args) => {
  const { addSnackbar } = useSnackBar();

  const handleOpenSnackbar = useCallback(() => {
    addSnackbar("Snackbar de prueba", {
      ...args,
    });
  }, []);

  return (
    <>
      <button onClick={handleOpenSnackbar}>Click Me!</button>
    </>
  );
};

export const SnackbarComponent = Component.bind({});

SnackbarComponent.args = {
  variant: "warning",
};
