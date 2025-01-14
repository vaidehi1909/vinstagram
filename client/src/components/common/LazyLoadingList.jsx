import React, { useState, useEffect, useRef } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import { useInView } from "react-intersection-observer";

const LazyLoadingList = (props) => {
  const { fetchQuery, children, limit = 10 } = props;
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  //   const [initialLoad, setInitialLoad] = useState(true); // Tracks initial fetch
  const isFetchingRef = useRef(true); // Ref to prevent simultaneous fetches

  const { ref, inView } = useInView({
    threshold: 1.0, // Trigger when fully in view
    // skip: initialLoad, // Skip observing during the initial load
  });

  const {
    data: responseData,
    isLoading,
    isFetching,
    isError,
  } = fetchQuery({
    page,
    limit,
  });

  useEffect(() => {
    if (responseData?.payload && isFetchingRef.current) {
      setData((prev) => [...prev, ...responseData.payload]);
      if (responseData.payload.length < limit) {
        setHasMore(false); // No more data to fetch
      }
      isFetchingRef.current = false; // Allow next fetch
    }
  }, [responseData]);

  useEffect(() => {
    if (inView && hasMore && !isFetchingRef.current) {
      isFetchingRef.current = true; // Lock fetching
      setPage((prev) => prev + 1); // Load the next page
    }
  }, [inView, hasMore]);

  //   // Handle initial load separately
  //   useEffect(() => {
  //     if (responseData && initialLoad) {
  //       setInitialLoad(false); // Disable initial load mode after first fetch
  //     }
  //   }, [responseData]);

  if (isError) {
    return <Typography>Error loading data.</Typography>;
  }

  return (
    <>
      {data.map((item) =>
        React.Children.map(children, (child) =>
          React.cloneElement(child, { item })
        )
      )}
      {(isFetching || isLoading) && (
        <Box sx={{ textAlign: "center", my: 2 }}>
          <CircularProgress />
        </Box>
      )}
      {!isFetching && !isLoading && hasMore && <div ref={ref}></div>}
    </>
  );
};

export default LazyLoadingList;
