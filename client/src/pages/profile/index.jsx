import React from "react";
import Layout from "../../components/Layout/index";
import ProfilePage from "../../components/Profile/ProfilePage";
import withAuth from "../../../redux/ProtectedRoute";

export const Profile = () => {
  return (
    <Layout>
      <ProfilePage />
    </Layout>
  );
};

export default withAuth(Profile);