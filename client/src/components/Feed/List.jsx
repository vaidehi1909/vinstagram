import React from "react";
import { Grid } from "@mui/material";
import { useGetFeedPostQuery } from "../../../redux/post/postApi";
import FeedItem from "./Item";
import LazyLoadingList from "../common/LazyLoadingList";

const FeedList = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        padding: { xs: 2, md: 4 },
        paddingX: { xs: 0, md: 4, lg: 15 },
        maxWidth: "935px",
        margin: "0 auto",
      }}
    >
      <LazyLoadingList fetchQuery={useGetFeedPostQuery} limit={5}>
        <FeedItem />
      </LazyLoadingList>
    </Grid>
  );
};

export default FeedList;
