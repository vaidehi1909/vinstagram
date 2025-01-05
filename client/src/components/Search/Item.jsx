import React from "react";
import { Box, Avatar, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { addSearch } from "../../../redux/user/recentSearchSlice";
import { useNavigate } from "react-router-dom";

const SearchItem = ({ user }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate({ relative: false });
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        px: 2,
        py: 1,
        "&:hover": { bgcolor: "#fafafa", cursor: "pointer" },
      }}
      onClick={() => {
        dispatch(addSearch(user));
        navigate(`/profile/${user._id}`);
      }}
    >
      <Avatar
        sx={{ width: 44, height: 44, mr: 2 }}
        src={user.profileImage || `/api/placeholder/${44}/${44}`}
      />
      <Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <Typography sx={{ fontWeight: "medium", fontSize: 14 }}>
            {user.userName}
          </Typography>
          {user.verified && (
            <Box
              component="span"
              sx={{
                color: "#3897f0",
                fontSize: "1.2rem",
              }}
            >
              ✓
            </Box>
          )}
        </Box>
        <Typography sx={{ color: "#8e8e8e", fontSize: 14 }}>
          {user.fullName}
        </Typography>
      </Box>
    </Box>
  );
};

export default SearchItem;
