import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Avatar,
  Container,
  Select,
  MenuItem,
  FormControl,
  Switch,
  Paper,
  styled,
} from "@mui/material";

// Custom styled components
const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  marginBottom: theme.spacing(3),
  backgroundColor: "#F8F9FA",
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    backgroundColor: "#fff",
  },
}));

const DisabledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    backgroundColor: "#f5f5f5",
  },
}));

const EditProfile = () => {
  const [bio, setBio] = useState("");
  const [gender, setGender] = useState("Female");
  const [suggestions, setSuggestions] = useState(true);

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h5" fontWeight="bold" sx={{ mb: 4 }}>
        Edit profile
      </Typography>

      <StyledPaper elevation={0}>
        <Box display="flex" alignItems="center" gap={2}>
          <Avatar sx={{ width: 56, height: 56 }} />
          <Box>
            <Typography variant="subtitle1" fontWeight="medium">
              modi.vaidehi
            </Typography>
            <Typography variant="body2" color="text.secondary">
              modi vaidehi
            </Typography>
          </Box>
          <Button
            variant="contained"
            sx={{
              ml: "auto",
              textTransform: "none",
              borderRadius: 2,
            }}
          >
            Change photo
          </Button>
        </Box>
      </StyledPaper>

      <Box sx={{ mb: 2 }}>
        <Typography variant="subtitle1" fontWeight="medium" sx={{ mb: 1 }}>
          Website
        </Typography>
        <DisabledTextField
          fullWidth
          placeholder="Website"
          disabled
          helperText="Editing your links is only available on mobile. Visit the Instagram app and edit your profile to change the websites in your bio."
        />
      </Box>

      <Box sx={{ mb: 2 }}>
        <Typography variant="subtitle1" fontWeight="medium" sx={{ mb: 1 }}>
          Bio
        </Typography>
        <StyledTextField
          fullWidth
          multiline
          rows={4}
          placeholder="Bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          inputProps={{ maxLength: 150 }}
          helperText={`${bio.length} / 150`}
          FormHelperTextProps={{
            sx: { textAlign: "right" },
          }}
        />
      </Box>

      <Box sx={{ mb: 2 }}>
        <Typography variant="subtitle1" fontWeight="medium" sx={{ mb: 1 }}>
          Gender
        </Typography>
        <FormControl fullWidth>
          <Select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            sx={{ backgroundColor: "#fff" }}
          >
            <MenuItem value="Female">Female</MenuItem>
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Custom">Custom</MenuItem>
            <MenuItem value="Prefer not to say">Prefer not to say</MenuItem>
          </Select>
        </FormControl>
        <Typography
          variant="caption"
          color="text.secondary"
          sx={{ mt: 1, display: "block" }}
        >
          This won't be part of your public profile.
        </Typography>
      </Box>

      <Box sx={{ mb: 2 }}>
        <Typography variant="subtitle1" fontWeight="medium" sx={{ mb: 1 }}>
          Show account suggestions on profiles
        </Typography>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ maxWidth: "80%" }}
          >
            Choose whether people can see similar account suggestions on your
            profile, and whether your account can be suggested on other
            profiles.
          </Typography>
          <Switch
            checked={suggestions}
            onChange={(e) => setSuggestions(e.target.checked)}
            color="primary"
          />
        </Box>
      </Box>
    </Container>
  );
};

export default EditProfile;
