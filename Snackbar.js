import { useEffect, useCallback } from "react";

import PropTypes from "prop-types";

import {
  BsInfoCircle as Info,
  BsExclamationCircle as Error,
  BsCheckCircle as Success,
  BsExclamationTriangle as Warning,
  BsXCircle as Close,
} from "react-icons/bs";

import {
  CustomSnackbar,
  IconContainer,
  InfoContainer,
  ChildrenContainer,
  IconButton,
} from "./Snackbar.style";

const Icon = ({ variant }) => {
  switch (variant) {
    case "error":
      return <Error />;
    case "success":
      return <Success />;
    case "warning":
      return <Warning />;
    default:
      return <Info />;
  }
};

const Snackbar = ({ variant, children, autoHideDuration, onClose, id }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(id);
    }, autoHideDuration);
    return () => clearTimeout(timer);
  }, [id, onClose]);

  const handleClose = useCallback(() => {
    onClose(id);
  }, [id, onClose]);

  return (
    <CustomSnackbar variant={variant} autoHideDuration={autoHideDuration}>
      <InfoContainer>
        <IconContainer>
          <Icon variant={variant} />
        </IconContainer>
        <ChildrenContainer>{children}</ChildrenContainer>
      </InfoContainer>
      <IconButton size="24px" onClick={handleClose}>
        <Close />
      </IconButton>
    </CustomSnackbar>
  );
};

Snackbar.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.func.isRequired,
  autoHideDuration: PropTypes.number,
  onClose: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

Snackbar.defaultProps = {
  variant: "info",
  autoHideDuration: 5000,
};

export default Snackbar;
