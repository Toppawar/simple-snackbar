import { useContext } from "react";

import { SnackBarContext } from "./SnackbarProvider";

const useSnackBar = () => useContext(SnackBarContext);

export default useSnackBar;
