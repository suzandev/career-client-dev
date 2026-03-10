import React, { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import ApplicationsStats from "./ApplicationsStats";

const MyApplications = () => {
  const { user } = useAuth();
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    if (user?.email) {
      axios
        .get(`http://localhost:3000/applications?email=${user.email}`, {
          withCredentials: true,
        })
        .then((res) => setApplications(res.data));
    }
  }, [user?.email]);

  return (
    <div>
      <ApplicationsStats applications={applications} />
    </div>
  );
};

export default MyApplications;
