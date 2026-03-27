"use client";

import { useState, useEffect } from "react";
import WorkflowBoard from "../components/WorkflowBoard";
import KeyEntry from "../components/KeyEntry";
import { getWorkflowProject } from "../lib/pocketbase";

export default function WorkflowPage() {
  const [projectId, setProjectId] = useState<string | null>(null);
  const [projectTitle, setProjectTitle] = useState<string | null>(null);
  const [hasAccess, setHasAccess] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const restoreWorkflowSession = async () => {
      if (typeof window === "undefined") {
        return;
      }

      const storedProjectId = sessionStorage.getItem("projectId");
      const storedProjectTitle = sessionStorage.getItem("projectTitle");

      if (storedProjectId) {
        setProjectId(storedProjectId);
        setHasAccess(true);

        if (storedProjectTitle) {
          setProjectTitle(storedProjectTitle);
        } else {
          const project = await getWorkflowProject(storedProjectId);
          const fallbackTitle = project?.project_title ?? null;

          if (fallbackTitle) {
            sessionStorage.setItem("projectTitle", fallbackTitle);
            setProjectTitle(fallbackTitle);
          }
        }
      }

      setIsLoading(false);
    };

    void restoreWorkflowSession();
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    document.title = projectTitle
      ? `${projectTitle} | Workflow | Waves Studio`
      : "Client Workflow | Waves Studio";
  }, [projectTitle]);

  const handleAccessGranted = (id: string, title: string) => {
    sessionStorage.setItem("projectId", id);
    sessionStorage.setItem("projectTitle", title);
    setProjectId(id);
    setProjectTitle(title);
    setHasAccess(true);
  };

  if (isLoading) {
    return null;
  }

  if (!hasAccess) {
    return <KeyEntry onAccessGranted={handleAccessGranted} />;
  }

  return <WorkflowBoard projectId={projectId} projectTitle={projectTitle} />;
}
