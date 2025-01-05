import React, { useState, useEffect, useMemo } from "react";
import {
  Dialog,
  DialogContent,
  InputBase,
  IconButton,
  Box,
  Typography,
} from "@mui/material";
import { Close as CloseIcon, Search as SearchIcon } from "@mui/icons-material";
import { useSearchMutation } from "../../../redux/user/userApi";
import SearchItem from "./Item";
import RecentSearch from "./RecentSearch";
import debounce from "lodash.debounce";

const SearchDrawer = ({ open, onClose }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const [searchUserApi, result] = useSearchMutation();

  const fetchResults = async (search) => {
    searchUserApi({ search });
  };
  // Debounced version of fetchResults
  const debouncedFetchResults = useMemo(() => debounce(fetchResults, 500), []);

  useEffect(() => {
    if (searchQuery) {
      debouncedFetchResults(searchQuery);
    }
  }, [searchQuery]);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
      sx={{
        "& .MuiDialog-paper": {
          width: { xs: "100%", sm: 400 },
          m: 0,
          position: "fixed",
          right: 0,
          height: "100%",
          borderRadius: 0,
          bgcolor: "white",
        },
      }}
    >
      <DialogContent sx={{ p: 0 }}>
        <Box sx={{ p: 3, pb: 2 }}>
          <Typography
            variant="h6"
            sx={{ mb: 3, fontSize: 24, fontWeight: "normal" }}
          >
            Search
          </Typography>
          <Box sx={{ position: "relative", mb: 2 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                bgcolor: "#efefef",
                borderRadius: 2,
                p: "4px 12px",
              }}
            >
              <SearchIcon sx={{ color: "#8e8e8e", mr: 1 }} />
              <InputBase
                fullWidth
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                sx={{
                  "& input": {
                    p: "8px 0",
                    "&::placeholder": {
                      color: "#8e8e8e",
                    },
                  },
                }}
              />
              {searchQuery && (
                <IconButton
                  size="small"
                  onClick={() => setSearchQuery("")}
                  sx={{ color: "#8e8e8e" }}
                >
                  <CloseIcon />
                </IconButton>
              )}
            </Box>
          </Box>
        </Box>

        {!searchQuery ? (
          <RecentSearch />
        ) : (
          <Box sx={{ overflowY: "auto", height: "calc(100% - 140px)" }}>
            {(result?.data?.payload || []).map((user) => (
              <SearchItem key={user._id} user={user} />
            ))}
          </Box>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default SearchDrawer;
