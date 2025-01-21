import React from "react";
import {
  Box,
  Skeleton,
  Stack,
  Container,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  AppBar,
  Toolbar,
  IconButton,
  Paper,
  useTheme,
  useMediaQuery,
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const StoryContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(2),
  padding: theme.spacing(2),
  overflowX: "auto",
  "&::-webkit-scrollbar": {
    display: "none",
  },
  scrollbarWidth: "none",
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(1),
    gap: theme.spacing(1),
  },
}));

const MainContent = styled(Box)(({ theme }) => ({
  paddingBottom: theme.spacing(7), // Space for bottom navigation
  [theme.breakpoints.up("sm")]: {
    paddingBottom: theme.spacing(2),
  },
}));

const AppSkeleton = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ pb: { xs: 7, sm: 0 } }}>
      {/* Mobile Header */}
      <AppBar
        position="sticky"
        color="inherit"
        elevation={isMobile ? 0 : 1}
        sx={{
          borderBottom: "1px solid",
          borderColor: "divider",
          display: { sm: "none" },
        }}
      >
        <Toolbar>
          <Skeleton variant="text" width={120} height={32} />
          <Box sx={{ flexGrow: 1 }} />
          <Stack direction="row" spacing={2}>
            <Skeleton variant="circular" width={24} height={24} />
            <Skeleton variant="circular" width={24} height={24} />
          </Stack>
        </Toolbar>
      </AppBar>

      {/* Desktop Header - only shown on larger screens */}
      <Box sx={{ display: { xs: "none", sm: "block" }, mb: 2, pt: 2 }}>
        <Container maxWidth="sm">
          <Stack direction="row" alignItems="center" spacing={2}>
            <Skeleton variant="circular" width={40} height={40} />
            <Skeleton variant="text" width={120} height={24} />
          </Stack>
        </Container>
      </Box>

      <MainContent>
        <Container
          maxWidth="sm"
          disableGutters={isMobile}
          sx={{ bgcolor: { xs: "grey.100", sm: "transparent" } }}
        >
          {/* Stories */}
          <Paper
            elevation={0}
            sx={{
              mb: { xs: 1, sm: 2 },
              bgcolor: "background.paper",
            }}
          >
            <StoryContainer>
              {[...Array(6)].map((_, index) => (
                <Stack key={index} alignItems="center" spacing={1}>
                  <Skeleton
                    variant="circular"
                    width={isMobile ? 56 : 64}
                    height={isMobile ? 56 : 64}
                  />
                  <Skeleton
                    variant="text"
                    width={isMobile ? 56 : 64}
                    height={16}
                  />
                </Stack>
              ))}
            </StoryContainer>
          </Paper>

          {/* Posts */}
          {[...Array(3)].map((_, index) => (
            <Card
              key={index}
              sx={{
                mb: { xs: 1, sm: 2 },
                borderRadius: { xs: 0, sm: 1 },
                boxShadow: { xs: 0, sm: 1 },
              }}
            >
              <CardHeader
                avatar={<Skeleton variant="circular" width={32} height={32} />}
                title={<Skeleton variant="text" width={120} height={20} />}
                subheader={<Skeleton variant="text" width={80} height={16} />}
                sx={{ py: { xs: 1.5, sm: 2 } }}
              />

              <Skeleton
                variant="rectangular"
                width="100%"
                sx={{ paddingTop: "100%" }}
              />

              <CardActions sx={{ px: 2, py: 1 }}>
                <Stack direction="row" spacing={1}>
                  <Skeleton variant="circular" width={28} height={28} />
                  <Skeleton variant="circular" width={28} height={28} />
                  <Skeleton variant="circular" width={28} height={28} />
                </Stack>
              </CardActions>

              <CardContent sx={{ py: 1 }}>
                <Skeleton variant="text" width="60%" height={20} />
                <Skeleton variant="text" width="100%" height={20} />
              </CardContent>
            </Card>
          ))}
        </Container>
      </MainContent>

      {/* Mobile Bottom Navigation */}
      <Paper
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          display: { sm: "none" },
        }}
        elevation={3}
      >
        <BottomNavigation showLabels>
          {[...Array(5)].map((_, index) => (
            <BottomNavigationAction
              key={index}
              icon={<Skeleton variant="circular" width={24} height={24} />}
            />
          ))}
        </BottomNavigation>
      </Paper>
    </Box>
  );
};

export default AppSkeleton;
