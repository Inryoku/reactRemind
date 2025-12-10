import { useState } from "react";
import { useNavigate } from "react-router";
import type { Job } from "../entities/joblist";
import { saveApplication } from "../features/applications";

type JobApplyProps = {
  job: Job;
};

export function JobApply({ job }: JobApplyProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-slate-50 text-slate-900">
        <main className="mx-auto max-w-3xl px-4 py-10">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="text-sm text-slate-600 hover:text-slate-900"
          >
            ← Back to jobs
          </button>

          <section className="mt-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h1 className="text-xl font-semibold text-slate-900">
              Application sent
            </h1>
            <p className="mt-2 text-sm text-slate-700">
              Thanks for applying for <strong>{job.title}</strong> at{" "}
              <strong>{job.company}</strong>. We&apos;ll let you know if the
              employer gets back to you.
            </p>
          </section>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <main className="mx-auto max-w-3xl px-4 py-10">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="text-sm text-slate-600 hover:text-slate-900"
        >
          ← Back to jobs
        </button>

        <section className="mt-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <header>
            <p className="text-xs uppercase tracking-wide text-slate-500">
              Applying for
            </p>
            <h1 className="mt-1 text-xl font-semibold text-slate-900">
              {job.title}
            </h1>
            <p className="mt-1 text-sm text-slate-600">
              {job.company} ・ {job.location}
            </p>
          </header>

          <form
            className="mt-6 space-y-4"
            onSubmit={(event) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              const name = String(formData.get("name") || "");
              const email = String(formData.get("email") || "");
              const message = String(formData.get("message") || "");
              const resumeUrl = String(formData.get("resumeUrl") || "");

              saveApplication(job, { name, email, message, resumeUrl });
              setIsSubmitted(true);
            }}
          >
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-slate-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500"
                  placeholder="Your full name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700">
                Message
              </label>
              <textarea
                rows={4}
                name="message"
                className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500"
                placeholder="Briefly introduce yourself and why this job fits you."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700">
                Resume / Portfolio URL
              </label>
              <input
                type="url"
                name="resumeUrl"
                className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500"
                placeholder="https://..."
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="inline-flex items-center rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Submit application
              </button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
}
