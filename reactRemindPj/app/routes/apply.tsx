import { useParams } from "react-router";
import { JobApply } from "../components/job-apply";
import { jobList } from "../entities/joblist";

export default function ApplyRoute() {
  const params = useParams();
  const jobId = params.jobId;

  const job = jobId ? jobList.find((j) => j.id === jobId) : undefined;

  if (!job) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-10 text-slate-900">
        <p className="text-sm text-slate-700">Job not found.</p>
      </main>
    );
  }

  return <JobApply job={job} />;
}

