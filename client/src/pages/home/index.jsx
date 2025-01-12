import React from 'react'
import Layout from "../../components/Layout/index";
import { Box, Grid } from "@mui/material";
import StoryBar from "../../components/Layout/StoryBar";
import FeedList from "../../components/Feed/List";
import SuggestionsList from "../../components/Follower/SuggestionList";

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
          <SuggestionsList />
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
