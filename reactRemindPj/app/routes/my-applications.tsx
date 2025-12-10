import { useEffect, useState } from "react";
import { MyApplications } from "../components/my-applications";
import { loadApplications, type SavedApplication } from "../features/applications";

export default function MyApplicationsRoute() {
  const [applications, setApplications] = useState<SavedApplication[]>([]);

  useEffect(() => {
    setApplications(loadApplications());
  }, []);

  return <MyApplications applications={applications} />;
}
