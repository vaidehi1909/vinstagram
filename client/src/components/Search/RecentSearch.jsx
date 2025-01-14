import React, { useEffect } from "react";
import { IconButton, Box, Typography } from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";
import SearchItem from "./Item";
import { useDispatch, useSelector } from "react-redux";
import {
  loadSearches,
  removeSearch,
  clearSearches,
} from "../../../redux/user/recentSearchSlice";

const RecentSearch = ({ onClose }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const recentSearches = useSelector((state) => state.recentSearch.searches);

  // Load recent searches for the logged-in user
  useEffect(() => {
    if (user._id) {
      dispatch(loadSearches(user._id));
    }
  }, [user, dispatch]);

  const handleClearAll = () => {
    dispatch(clearSearches());
  };

  const handleRemoveRecent = (id) => {
    dispatch(removeSearch(id));
  };

  return (
    <Box sx={{ pt: 0 }}>
      <Box
        sx={{
          px: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography sx={{ fontSize: 16, fontWeight: "bold" }}>
          Recent
        </Typography>
        {recentSearches.length > 0 && (
          <Typography
            onClick={handleClearAll}
            sx={{
              color: "#0095f6",
              fontSize: 14,
              fontWeight: "medium",
              cursor: "pointer",
              "&:hover": { opacity: 0.7 },
            }}
          >
            Clear all
          </Typography>
        )}
      </Box>

      {recentSearches.length === 0 ? (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "200px",
            color: "#8e8e8e",
          }}
        >
          No recent searches.
        </Box>
      ) : (
        <Box>
          {recentSearches.map((user) => (
            <Box
              key={user._id}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                px: 2,
                py: 1,
                "&:hover": { bgcolor: "#fafafa" },
              }}
            >
              <SearchItem user={user} onClose={onClose} />
              <IconButton
                onClick={() => handleRemoveRecent(user._id)}
                size="small"
                sx={{ color: "#8e8e8e" }}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default RecentSearch;
