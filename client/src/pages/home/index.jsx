import React from 'react'
import Layout from "../../components/layout";
import { Box, Grid } from "@mui/material";
import StoryBar from "../../components/layout/StoryBar";
import FeedList from "../../components/Feed/List";
import Suggestions from "../../components/layout/Suggestions";

const FeedLayout = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <Grid item xs={12} md={8}>
          {/* Add StoryBar Above Feed */}
          <StoryBar />
          <FeedList />
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: { xs: "none", md: "block" },
            padding: 2,
            // borderLeft: "1px solid #ddd",
          }}
        >
          <Suggestions />
        </Grid>
      </Grid>
    </Box>
  );
};

export const Home = () => {
  return (
    <Layout>
      <FeedLayout />
    </Layout>
  );
};

export default Home
