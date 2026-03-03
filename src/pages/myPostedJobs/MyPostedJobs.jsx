import React, { Suspense } from "react";
import useAuth from "../../hooks/useAuth";
import JobLists from "./JobLists";
import { jobsCreatedByPromise } from "../../api/JobsApi";

const MyPostedJobs = () => {
  const { user } = useAuth();
  return (
    <div>
      <Suspense>
        <JobLists jobsCreatedByPromise={jobsCreatedByPromise(user.email)} />
      </Suspense>
    </div>
  );
};

export default MyPostedJobs;
