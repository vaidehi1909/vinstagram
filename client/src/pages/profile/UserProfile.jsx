import React from "react";
import Layout from "../../components/Layout/index";
import UserProfile from "../../components/Profile/UserProfile";
import withAuth from "../../../redux/ProtectedRoute";

export const UserProfilePage = () => {
  return (
    <Layout>
      <UserProfile />
    </Layout>
  );
};

export default withAuth(UserProfilePage);
