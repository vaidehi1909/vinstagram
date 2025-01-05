import React from "react";
import { Box } from "@mui/material";
import { useGetPostCommentsQuery } from "../../../redux/post/postApi";
import CommentItem from "./Item";

const mockComments = [
  {
    user: {
      userName: "_rushii_56",
      profileImage: "https://via.placeholder.com/32",
    },
    text: "Itne me gaan fat gaya 😂",
    likes: 2,
    hours: "2h",
  },
  {
    user: {
      userName: "its_vishal_023",
      profileImage: "https://via.placeholder.com/32",
    },
    text: "Ek pune Infosys me bhi bhejdo..humko bhi wfh chahiye 😂",
    likes: 5,
    hours: "3h",
  },
  {
    user: {
      userName: "rupp_the_rookie",
      profileImage: "https://via.placeholder.com/32",
    },
    text: "Happy new year bolne aya hga",
    likes: 1,
    hours: "4h",
  },
  {
    user: {
      userName: "t.h.e.s.a.u.r.a.b.h",
      profileImage: "https://via.placeholder.com/32",
    },
    text: "Next time backbenchers will be seen wearing leopard costumes at night",
    likes: 3,
    hours: "5h",
  },
  {
    user: {
      userName: "suhasshidore8",
      profileImage: "https://via.placeholder.com/32",
    },
    text: "@ritu_chaudhari_97 Ai replace humans ❌ Animal replace humans ✅",
    likes: 0,
    hours: "6h",
  },
];

const CommentList = ({ postId }) => {
  const { data, isLoading, isError, isFetching } =
    useGetPostCommentsQuery(postId);

  if (isLoading || isFetching) {
    return <h1>Loading...</h1>;
  }

  const comments = data?.payload?.length ? data.payload : mockComments;

  return (
    <Box sx={{ flex: 1, overflow: "auto", p: 2 }}>
      {/* Comments here */}
      {comments.map((comment, index) => (
        <CommentItem key={index} comment={comment} />
      ))}
    </Box>
  );
};

export default CommentList;
