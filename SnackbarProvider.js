import { useState, createContext, useMemo, useCallback } from "react";

import SnackBar from "./Snackbar";

import { SnackbarContainer } from "./Snackbar.style";

export const SnackBarContext = createContext();

const AUTO_DISMISS = 5000;

export function SnackBarProvider({ children }) {
  const [alerts, setAlerts] = useState([]);

  const addSnackbar = useCallback(
    (message, options) => {
      let index;
      setAlerts((state) => {
        index = state.length
          ? Math.max(...state.map((value) => value.id || 0)) + 1
          : 1;
        return [
          {
            message,
            options: {
              ...options,
              autoHideDuration: options.autoHideDuration || AUTO_DISMISS,
            },
            id: index,
          },
          ...state,
        ];
      });
      return index;
    },
    [alerts, setAlerts]
  );

  const closeSnackbar = useCallback(
    (key) => {
      setAlerts((state) => state.filter(({ id }) => id !== key));
    },
    [setAlerts]
  );

  const value = useMemo(() => ({ addSnackbar, closeSnackbar }), [
    addSnackbar,
    closeSnackbar,
  ]);

  return (
    <SnackBarContext.Provider value={value}>
      {children}
      <SnackbarContainer>
        {alerts.map(({ message, options, id }) => (
          <SnackBar key={id} {...options} onClose={closeSnackbar} id={id}>
            {message}
          </SnackBar>
        ))}
      </SnackbarContainer>
    </SnackBarContext.Provider>
  );
}
