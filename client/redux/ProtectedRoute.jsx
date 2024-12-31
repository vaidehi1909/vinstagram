import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLazyUserProfileQuery } from "./auth/authApi";

const withAuth = (WrappedComponent) => {
  const Wrapper = (props) => {
    const [loading, setLoading] = useState(true);

    const token = useSelector((state) => state.auth?.token);
    const [getUserProfile] = useLazyUserProfileQuery();
    const navigate = useNavigate();

    // Perform authentication check here
    // const isAuthenticated = false; // Replace with your authentication logic
    useEffect(() => {
      if (!token) {
        navigate("/login"); // Redirect to login page if not authenticated
      }
      if (loading && token) {
        getUserProfile().then((res) => {
          if (res?.isError) {
            // setLoading(false); // Set loading to false if error
            navigate("/login"); // Redirect to login page if not authenticated
          } else {
            setLoading(false);
          }
        });
      }
    }, [token]);

    if (loading) {
      return (
        <div className="d-flex justify-content-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ); // Show loading state while checking authentication
    }

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default withAuth;
