import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import {
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Box,
} from "@mui/material";
function About({ image }) {
  //render an about page giving details som ejistory and the tech used to build out this site
  //give a brief history of hot or not
  //show auth, email, material UI css and BOT to click and maybe a scraper?

  return (
    <div>
      <Paper
        style={{
          height: "100vh",
          backgroundImage: `url(${"https://images.creativemarket.com/0.1.0/ps/1046651/2000/2000/m1/fpnw/wm0/80s-inspired-patterns-2.0-02-.jpg?1456936583&s=d8e1ae51ac718b8fd73306485d9a1170"})`,
        }}
      >
        <Box
          justifyContent="center"
          alignItems="center"
          display="flex"
          direction="column"
          padding="200px"
        >
          <Card sx={{ width: "600px", height: "400px" }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 20 }}
                color="text.secondary"
                gutterBottom
                justifyContent="center"
                alignItems="center"
                display="flex"
              >
                About Us
              </Typography>

              <Typography
                justifyContent="center"
                alignItems="center"
                display="flex"
                sx={{ mb: 1.5 }}
                color="text.secondary"
              >
                adjective
              </Typography>
              <Typography
                justifyContent="center"
                alignItems="center"
                display="flex"
                variant="body2"
              >
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Paper>
    </div>
  );
}

export default About;
