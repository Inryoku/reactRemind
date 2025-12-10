import { Link } from "react-router";
import type { Job } from "../entities/joblist";
import { jobList as defaultJobs } from "../entities/joblist";

type JobBoardProps = { jobList?: Job[] };

export function JobBoard({ jobList = defaultJobs }: JobBoardProps) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <main className="mx-auto max-w-5xl px-4 py-10">
        <header className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">
              Job listings
            </h1>
            <p className="mt-1 text-sm text-slate-600">
              Pick a job that fits your schedule and style.
            </p>
          </div>
          <Link
            to="/my-applications"
            className="text-sm font-medium text-slate-700 hover:text-slate-900"
          >
            My applications
          </Link>
        </header>

        <div className="space-y-4">
          {jobList.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </main>
    </div>
  );
}

function JobCard({ job }: { job: Job }) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-wide text-slate-500">
            {job.company}
          </p>
          <h2 className="mt-1 text-lg font-semibold text-slate-900">
            {job.title}
          </h2>
          <p className="mt-1 text-sm text-slate-600">{job.location}</p>
        </div>
        <div className="text-right">
          <p className="text-xs font-semibold uppercase text-slate-500">
            Wage
          </p>
          <p className="text-sm font-semibold text-slate-900">{job.wage}</p>
          <p className="mt-1 text-xs text-slate-600">{job.shift}</p>
        </div>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-slate-700">
        {job.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {job.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {job.perks.map((perk) => (
          <span
            key={perk}
            className="rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 text-xs text-emerald-700"
          >
            {perk}
          </span>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-3">
        <Link
          to={`/apply/${job.id}`}
          className="inline-flex items-center rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          Apply now
        </Link>
        <button className="text-sm font-semibold text-slate-700 hover:text-slate-900">
          View details
        </button>
      </div>
    </article>
  );
}
