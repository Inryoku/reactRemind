import { Link } from "react-router";
import type { SavedApplication } from "../features/applications";

type MyApplicationsProps = {
  applications: SavedApplication[];
};

export function MyApplications({ applications }: MyApplicationsProps) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <main className="mx-auto max-w-3xl px-4 py-10">
        <header className="mb-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">
              My applications
            </h1>
            <p className="mt-1 text-sm text-slate-600">
              Applications you&apos;ve sent in this browser session.
            </p>
          </div>
          <Link
            to="/"
            className="text-sm font-medium text-slate-700 hover:text-slate-900"
          >
            ← Back to jobs
          </Link>
        </header>

        {applications.length === 0 ? (
          <p className="text-sm text-slate-600">
            You don&apos;t have any applications yet.
          </p>
        ) : (
          <ul className="space-y-3">
            {applications.map((app) => (
              <li
                key={app.id}
                className="rounded-lg border border-slate-200 bg-white p-4 text-sm shadow-sm"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-slate-500">
                      {app.company}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-slate-900">
                      {app.jobTitle}
                    </p>
                    <p className="mt-1 text-xs text-slate-600">
                      {app.location}
                    </p>
                  </div>
                  <p className="text-xs text-slate-500">
                    {new Date(app.submittedAt).toLocaleString()}
                  </p>
                </div>
                <p className="mt-3 text-xs text-slate-700">
                  Name: {app.name}
                  <br />
                  Email: {app.email}
                  {app.resumeUrl ? (
                    <>
                      <br />
                      Resume:{" "}
                      <a
                        href={app.resumeUrl}
                        className="text-sky-700 underline"
                      >
                        {app.resumeUrl}
                      </a>
                    </>
                  ) : null}
                </p>
                {app.message ? (
                  <p className="mt-2 text-xs text-slate-700">
                    Message: {app.message}
                  </p>
                ) : null}
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}

