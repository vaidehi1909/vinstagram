import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { useLazyGetFeedPostQuery } from "../../../redux/post/postApi";
import FeedItem from "./Item";

const FeedList = () => {
  const [posts, setPosts] = useState([]);
  const [getFeedPost, { isLoading }] = useLazyGetFeedPostQuery();

  // Replace this with your actual data fetching logic
  useEffect(() => {
    getFeedPost({ page: 1, limit: 10 }).then(({ data }) => setPosts(data));
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
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
      {posts?.payload?.length > 0 &&
        posts.payload.map((post) => <FeedItem key={post._id} post={post} />)}
    </Grid>
  );
};

export default FeedList;
