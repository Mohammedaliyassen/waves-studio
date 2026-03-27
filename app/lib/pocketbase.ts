const POCKETBASE_URL = process.env.NEXT_PUBLIC_POCKETBASE_URL;

export interface WorkflowProject {
  id: string;
  key_access: string;
  project_title: string;
  project_description: string;
  client_email: string;
  created: string;
  updated: string;
}

export interface WorkflowTask {
  id: string;
  project_id: string;
  title: string;
  task_description: string;
  status: "planned" | "in_progress" | "done";
  order_number: number;
  created: string;
  updated: string;
}

export interface TaskHistory {
  id: string;
  task_id: string;
  action: string;
  details: string;
  timestamp: string;
}

export async function validateAccessKey(
  keyAccess: string
): Promise<WorkflowProject | null> {
  try {
    const encodedKey = encodeURIComponent(keyAccess);
    const response = await fetch(
      `${POCKETBASE_URL}/api/collections/workflow_projects/records?filter=(key_access="${encodedKey}")`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch project");
    }

    const data = await response.json();

    if (data.items && data.items.length >= 1) {
      return data.items[0] as WorkflowProject;
    }

    return null;
  } catch (error) {
    console.error("Error validating access key:", error);
    throw error;
  }
}

export async function getProjectTasks(
  projectId: string
): Promise<WorkflowTask[]> {
  try {
    const encodedId = encodeURIComponent(projectId);
    const response = await fetch(
      `${POCKETBASE_URL}/api/collections/workflow_tasks/records?filter=(project_id="${encodedId}")&sort=order_number`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch tasks");
    }

    const data = await response.json();
    return (data.items || []) as WorkflowTask[];
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw error;
  }
}

export async function getWorkflowProject(
  projectId: string
): Promise<WorkflowProject | null> {
  try {
    const encodedId = encodeURIComponent(projectId);
    const response = await fetch(
      `${POCKETBASE_URL}/api/collections/workflow_projects/records/${encodedId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch workflow project");
    }

    return (await response.json()) as WorkflowProject;
  } catch (error) {
    console.error("Error fetching workflow project:", error);
    return null;
  }
}

export async function updateTaskStatus(
  taskId: string,
  newStatus: "planned" | "in_progress" | "done"
): Promise<WorkflowTask> {
  try {
    const response = await fetch(
      `${POCKETBASE_URL}/api/collections/workflow_tasks/records/${taskId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status: newStatus,
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to update task status");
    }

    return await response.json();
  } catch (error) {
    console.error("Error updating task status:", error);
    throw error;
  }
}

export async function updateTaskOrder(
  taskId: string,
  newOrderNumber: number
): Promise<WorkflowTask> {
  try {
    const response = await fetch(
      `${POCKETBASE_URL}/api/collections/workflow_tasks/records/${taskId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          order_number: newOrderNumber,
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to update task order");
    }

    return await response.json();
  } catch (error) {
    console.error("Error updating task order:", error);
    throw error;
  }
}

export async function createTaskHistory(
  taskId: string,
  action: string,
  details: string
): Promise<TaskHistory> {
  try {
    const response = await fetch(
      `${POCKETBASE_URL}/api/collections/task_history/records`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          task_id: taskId,
          action,
          details,
          timestamp: new Date().toISOString(),
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to create task history");
    }

    return await response.json();
  } catch (error) {
    console.error("Error creating task history:", error);
    throw error;
  }
}

export async function getTaskHistory(taskId: string): Promise<TaskHistory[]> {
  try {
    const encodedId = encodeURIComponent(taskId);
    const response = await fetch(
      `${POCKETBASE_URL}/api/collections/task_history/records?filter=(task_id="${encodedId}")&sort=timestamp`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch task history");
    }

    const data = await response.json();
    return (data.items || []) as TaskHistory[];
  } catch (error) {
    console.error("Error fetching task history:", error);
    throw error;
  }
}
