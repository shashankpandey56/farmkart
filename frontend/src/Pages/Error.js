import { Box, Typography } from "@mui/material";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <Box>
      <Typography variant="h1" color="success">
        Oops!!!
      </Typography>
      <Typography variant="h2"> Something went wrong!!</Typography>
      <Typography variant="h3">
        {err.status}: {err.statusText}
      </Typography>
    </Box>
  );
};

export default Error;
