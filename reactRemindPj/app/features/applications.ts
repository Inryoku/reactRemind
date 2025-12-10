import type { Job } from "../entities/joblist";

export type SavedApplication = {
  id: string;
  jobId: string;
  jobTitle: string;
  company: string;
  location: string;
  name: string;
  email: string;
  message?: string;
  resumeUrl?: string;
  submittedAt: string;
};

const STORAGE_KEY = "reactRemind.applications";

export function loadApplications(): SavedApplication[] {
  if (typeof window === "undefined") return [];

  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed;
  } catch {
    return [];
  }
}

export function saveApplication(
  job: Job,
  data: { name: string; email: string; message?: string; resumeUrl?: string }
): void {
  if (typeof window === "undefined") return;

  const current = loadApplications();
  const next: SavedApplication = {
    id: `${job.id}-${Date.now()}`,
    jobId: job.id,
    jobTitle: job.title,
    company: job.company,
    location: job.location,
    name: data.name,
    email: data.email,
    message: data.message,
    resumeUrl: data.resumeUrl,
    submittedAt: new Date().toISOString(),
  };

  const updated = [...current, next];
  window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
}

