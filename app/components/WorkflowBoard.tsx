"use client";

import { useState, useEffect } from "react";
import { LogOut, Edit2, Check, X, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  getProjectTasks,
  updateTaskStatus,
  createTaskHistory,
  getTaskHistory,
  type WorkflowTask,
  type TaskHistory,
} from "@/app/lib/pocketbase";

interface Task extends WorkflowTask {
  localDescription?: string;
}

interface Column {
  id: string;
  title: string;
  color: string;
  status: Task["status"];
}

const COLUMNS: Column[] = [
  { id: "1", title: "Planned", color: "bg-blue-600", status: "planned" },
  {
    id: "2",
    title: "In Progress",
    color: "bg-yellow-600",
    status: "in_progress",
  },
  { id: "3", title: "Done", color: "bg-green-600", status: "done" },
];

export default function WorkflowBoard({
  projectId,
  projectTitle,
}: {
  projectId: string | null;
  projectTitle: string | null;
}) {
  const router = useRouter();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [taskHistories, setTaskHistories] = useState<
    Record<string, TaskHistory[]>
  >({});
  const [showHistoryId, setShowHistoryId] = useState<string | null>(null);

  useEffect(() => {
    const fetchTasks = async () => {
      if (!projectId) {
        setLoading(false);
        return;
      }
      try {
        const fetchedTasks = await getProjectTasks(projectId);
        setTasks(fetchedTasks);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, [projectId]);

  const handleFetchTaskHistory = async (taskId: string) => {
    try {
      const history = await getTaskHistory(taskId);
      setTaskHistories((prev) => ({
        ...prev,
        [taskId]: history,
      }));
      setShowHistoryId(taskId);
    } catch (error) {
      console.error("Error fetching task history:", error);
    }
  };

  const moveTask = async (id: string, newStatus: Task["status"]) => {
    const task = tasks.find((t) => t.id === id);
    if (!task) return;

    try {
      await updateTaskStatus(id, newStatus);

      const statusNames: Record<Task["status"], string> = {
        planned: "Planned",
        in_progress: "In Progress",
        done: "Done",
      };
      const oldStatusName =
        statusNames[task.status as keyof typeof statusNames];
      const newStatusName = statusNames[newStatus];

      await createTaskHistory(
        id,
        "STATUS_CHANGE",
        `Status changed from ${oldStatusName} to ${newStatusName}`,
      );

      setTasks(
        tasks.map((t) => (t.id === id ? { ...t, status: newStatus } : t)),
      );
    } catch (error) {
      console.error("Error moving task:", error);
    }
  };

  const logout = () => {
    sessionStorage.removeItem("projectId");
    sessionStorage.removeItem("projectTitle");
    router.push("/");
  };

  const updateTask = async (id: string) => {
    if (!editTitle.trim()) return;

    try {
      const oldTask = tasks.find((t) => t.id === id);
      if (!oldTask) return;

      const updates: Partial<WorkflowTask> = {};

      if (editTitle !== oldTask.title) {
        updates.title = editTitle;
      }

      if (editDescription !== oldTask.task_description) {
        updates.task_description = editDescription;
      }

      if (Object.keys(updates).length === 0) {
        setEditingId(null);
        return;
      }

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_POCKETBASE_URL}/api/collections/workflow_tasks/records/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updates),
        },
      );

      if (!response.ok) {
        throw new Error("Failed to update task");
      }

      const updatedTask = await response.json();

      if (editTitle !== oldTask.title) {
        await createTaskHistory(id, "TITLE_CHANGE", `Title updated`);
      }

      if (editDescription !== oldTask.task_description) {
        await createTaskHistory(
          id,
          "DESCRIPTION_UPDATE",
          `Description updated`,
        );
      }

      setTasks(
        tasks.map((task) =>
          task.id === id
            ? {
                ...task,
                title: editTitle,
                task_description: editDescription,
                updated: updatedTask.updated,
              }
            : task,
        ),
      );

      setEditingId(null);
      setEditTitle("");
      setEditDescription("");
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  const getTasksByStatus = (status: Task["status"]) => {
    return tasks.filter((task) => task.status === status);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <p className="text-gray-400">Loading workflow...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-32 pb-12">
      <AnimatePresence>
        {showHistoryId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            onClick={() => setShowHistoryId(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-slate-800 rounded-xl border border-slate-700 p-6 max-w-md w-full max-h-96 overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-2 mb-4">
                <Clock size={18} className="text-blue-400" />
                <h3 className="text-white font-semibold">Task History</h3>
              </div>
              <div className="space-y-3">
                {taskHistories[showHistoryId]?.length ? (
                  taskHistories[showHistoryId].map((history, idx) => (
                    <div
                      key={idx}
                      className="text-xs text-gray-300 bg-slate-700/50 p-3 rounded border border-slate-600/50"
                    >
                      <p className="font-semibold text-blue-300">
                        {history.action}
                      </p>
                      <p className="text-gray-400 mt-1">{history.details}</p>
                      <p className="text-gray-500 mt-2">
                        {formatDate(history.timestamp)}
                      </p>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-400 text-xs">No history</p>
                )}
              </div>
              <button
                onClick={() => setShowHistoryId(null)}
                className="w-full mt-4 bg-slate-700 hover:bg-slate-600 text-white py-2 rounded text-sm transition-colors"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-6">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div>
            <span className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">
              Project Workflow
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
              {projectTitle || "Your Project"}
            </h1>
            <p className="mt-3 max-w-2xl text-gray-400">
              Track each milestone, review updates, and follow the current
              progress for this project in one place.
            </p>
          </div>
          <button
            onClick={logout}
            className="flex w-fit items-center gap-2 rounded-lg border border-red-600/30 bg-red-600/20 px-4 py-2 text-red-400 transition-colors hover:bg-red-600/30"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {COLUMNS.map((column) => {
            const columnTasks = getTasksByStatus(column.status);

            return (
              <motion.div
                key={column.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col bg-slate-800/50 backdrop-blur rounded-xl border border-slate-700/50 overflow-hidden"
              >
                <div className={`${column.color} px-6 py-4`}>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    <h2 className="text-white font-semibold text-lg">
                      {column.title}
                    </h2>
                    <span className="ml-auto bg-white/20 text-white text-xs px-2 py-1 rounded">
                      {columnTasks.length}
                    </span>
                  </div>
                </div>

                <div className="flex-1 p-4 space-y-3 min-h-[400px] max-h-[600px] overflow-y-auto">
                  <AnimatePresence>
                    {columnTasks.map((task) => {
                      const isEditing = editingId === task.id;
                      return (
                        <motion.div
                          key={task.id}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          transition={{ duration: 0.2 }}
                          className="bg-slate-700/50 border border-slate-600/50 rounded-lg p-4 hover:border-slate-500 transition-colors group cursor-pointer"
                        >
                          {isEditing && (
                            <div className="space-y-2">
                              <input
                                type="text"
                                value={editTitle}
                                onChange={(e) => setEditTitle(e.target.value)}
                                className="w-full bg-slate-600 border border-slate-500 rounded px-2 py-1 text-white text-sm focus:outline-none focus:border-blue-500"
                                placeholder="Task title"
                              />
                              <textarea
                                value={editDescription}
                                onChange={(e) =>
                                  setEditDescription(e.target.value)
                                }
                                className="w-full bg-slate-600 border border-slate-500 rounded px-2 py-1 text-white text-sm focus:outline-none focus:border-blue-500 resize-none"
                                rows={2}
                                placeholder="Description"
                              />
                              <div className="flex gap-2">
                                <button
                                  onClick={() => updateTask(task.id)}
                                  className="flex-1 bg-green-600 hover:bg-green-700 text-white text-sm py-1 rounded flex items-center justify-center gap-1"
                                >
                                  <Check size={14} />
                                  Save
                                </button>
                                <button
                                  onClick={() => setEditingId(null)}
                                  className="flex-1 bg-slate-600 hover:bg-slate-700 text-white text-sm py-1 rounded flex items-center justify-center gap-1"
                                >
                                  <X size={14} />
                                  Cancel
                                </button>
                              </div>
                            </div>
                          )}
                          {!isEditing && (
                            <div
                              className="space-y2"
                              onClick={() => handleFetchTaskHistory(task.id)}
                            >
                              <h3 className="text-white font-semibold mb-1">
                                {task.title}
                              </h3>
                              <p className="text-xs text-gray-500 mb-2">
                                {formatDate(task.updated)}
                              </p>
                              {task.task_description && (
                                <p className="text-gray-400 text-sm mb-3">
                                  {task.task_description}
                                </p>
                              )}
                              <div className="flex justify-between items-center">
                                <div className="flex gap-1">
                                  {column.status !== "done" && (
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        const nextStatus =
                                          column.status === "planned"
                                            ? ("in_progress" as const)
                                            : "done";
                                        moveTask(task.id, nextStatus);
                                      }}
                                      className="text-xs bg-blue-600/20 hover:bg-blue-600/40 text-blue-300 px-2 py-1 rounded transition-colors"
                                    >
                                      Move
                                    </button>
                                  )}
                                </div>
                                <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setEditingId(task.id);
                                      setEditTitle(task.title);
                                      setEditDescription(task.task_description);
                                    }}
                                    className="p-1 bg-slate-600/50 hover:bg-slate-600 text-gray-300 rounded transition-colors"
                                  >
                                    <Edit2 size={14} />
                                  </button>
                                </div>
                              </div>
                            </div>
                          )}
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
