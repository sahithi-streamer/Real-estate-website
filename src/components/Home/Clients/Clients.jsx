import React from "react";
import {
  createTheme,
  ThemeProvider,
  Box,
  Typography,
  Card,
  CardHeader,
  Avatar,
  CardMedia,
  CardActions,
  Button,
} from "@mui/material";
import { purple } from "@mui/material/colors";
import ClientData from "../../../data/Client";

const theme = createTheme({
  breakpoints: {
    values: {
      xxs: 0,
      xs: 500,
      sm: 630,
      md: 860,
      lg: 1040,
      xl: 1536,
    },
  },
  palette: {
    primary: purple,
  },
});

function ClientCard({ client }) {
  return (
    <Card>
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: "#ff2322" }} src={client.image} />}
        title={<Typography variant="h6">{client.name}</Typography>}
      />
      <CardMedia height="120" sx={{ padding: "3px 10px" }}>
        <Typography>{client.review}</Typography>
      </CardMedia>
      <CardActions
        sx={{
          padding: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button sx={{ textTransform: "none", fontSize: 13, margin: "0px" }}>
          <Typography variant="subtitle2">History</Typography>
        </Button>
        <Button sx={{ textTransform: "none", fontSize: 12, margin: "0px" }}>
          <Typography variant="subtitle2">More</Typography>
        </Button>
      </CardActions>
    </Card>
  );
}

function Client() {
  return (
    <ThemeProvider theme={theme}>
      <Box paddingBottom={20}>
        <div style={{ display: "flex", flexWrap: "wrap",justifyContent: "center", gap: "16px" }}>
          {ClientData.map((client, index) => (
            <div key={index} style={{ flex: "0 0 300px" }}>
              <ClientCard client={client} />
            </div>
          ))}
        </div>
      </Box>
    </ThemeProvider>
  );
}

export default Client;

