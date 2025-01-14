import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Container,
  Select,
  MenuItem,
  FormControl,
  Switch,
  styled,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import EditProfileImg from "./EditProfileImg";
import { useUpdateUserProfileMutation } from "../../../redux/user/userApi";
import { addToast } from "../../../redux/toast/toastSlice";

const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    backgroundColor: "#fff",
  },
}));

// const DisabledTextField = styled(TextField)(({ theme }) => ({
//   "& .MuiOutlinedInput-root": {
//     backgroundColor: "#f5f5f5",
//   },
// }));

const EditProfile = () => {
  const { user } = useSelector((state) => state.auth);
  const [bio, setBio] = useState(user.bio || "");
  const [gender, setGender] = useState(user.gender || "");
  const [isPrivate, setIsPrivate] = useState(user.accountType === "private");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useDispatch();
  const [updateUser] = useUpdateUserProfileMutation();

  const onSubmit = () => {
    setIsSubmitting(true);
    updateUser({
      bio,
      gender,
      accountType: isPrivate ? "private" : "public",
    })
      .unwrap()
      .then(() => {
        dispatch(addToast({ message: "Profile updated", severity: "success" }));
      })
      .catch((error) => {
        const errorMsg = error?.data?.message || "Something went wrong";
        dispatch(addToast({ message: errorMsg, severity: "error" }));
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h5" fontWeight="bold" sx={{ mb: 4 }}>
        Edit profile
      </Typography>

      <EditProfileImg user={user} />

      {/* <Box sx={{ mb: 2 }}>
        <Typography variant="subtitle1" fontWeight="medium" sx={{ mb: 1 }}>
          Website
        </Typography>
        <DisabledTextField
          fullWidth
          placeholder="Website"
          disabled
          helperText="Editing your links is only available on mobile. Visit the Vinstagram app and edit your profile to change the websites in your bio."
        />
      </Box> */}

      <Box sx={{ mb: 2 }}>
        <Typography variant="subtitle1" fontWeight="medium" sx={{ mb: 1 }}>
          Bio
        </Typography>
        <StyledTextField
          fullWidth
          multiline
          disabled={isSubmitting}
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
            disabled={isSubmitting}
            onChange={(e) => setGender(e.target.value)}
            sx={{ backgroundColor: "#fff" }}
          >
            <MenuItem value="female">Female</MenuItem>
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="custom">Custom</MenuItem>
            <MenuItem value="other">Prefer not to say</MenuItem>
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
          Private account
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
            When your account is public, your profile and posts can be seen by
            anyone, on or off Vinstagram, even if they don't have an Vinstagram
            account. When your account is private, only the followers you
            approve can see what you share, including your photos or videos on
            hashtag and location pages, and your followers and following lists.
            Certain info on your profile, like your profile picture and
            username, is visible to everyone on and off Vinstagram.
          </Typography>
          <Switch
            checked={isPrivate}
            disabled={isSubmitting}
            onChange={(e) => setIsPrivate(e.target.checked)}
            color="primary"
          />
        </Box>
      </Box>

      <Box sx={{ mb: 2, display: "flex", justifyContent: "flex-end" }}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          disabled={isSubmitting}
          sx={{ textTransform: "none", borderRadius: 2 }}
          onClick={onSubmit}
        >
          Submit
        </Button>
      </Box>
    </Container>
  );
};

export default EditProfile;
