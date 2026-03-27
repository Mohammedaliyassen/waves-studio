import { Project } from "./definitions";

export interface ProjectsResponse {
  projects: Project[];
  isMockData: boolean;
}

// Mock data for fallback
const mockProjects: Project[] = [
  {
    id: "1",
    collectionId: "projects",
    title: "Sample Project 1",
    description: "This is a sample project description",
    project_imgs: [],
    tools: [],
    title_ar: "مشروع تجريبي 1",
    description_ar: "هذا وصف لمشروع تجريبي",
    title_en: "Sample Project 1",
    description_en: "This is a sample project description",
    main_img: "/projects/sample1.jpg",
    live_url: "https://example.com",
    repo_github: "https://github.com/example",
    created: new Date().toISOString(),
    updated: new Date().toISOString(),
  },
  {
    id: "2",
    collectionId: "projects",
    title: "Sample Project 2",
    description: "Another sample project description",
    project_imgs: [],
    tools: [],
    title_ar: "مشروع تجريبي 2",
    description_ar: "وصف آخر لمشروع تجريبي",
    title_en: "Sample Project 2",
    description_en: "Another sample project description",
    main_img: "/projects/sample2.jpg",
    live_url: "https://example2.com",
    repo_github: "https://github.com/example2",
    created: new Date().toISOString(),
    updated: new Date().toISOString(),
  },
];

// Fetches all projects
export async function getProjects(): Promise<ProjectsResponse> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_POCKETBASE_URL}/api/collections/projects/records`,
      { cache: "no-store" }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch projects");
    }

    const data = await res.json();
    return {
      projects: data.items ?? [],
      isMockData: false
    };
  } catch (error) {
    console.error("Database Error:", error);
    return {
      projects: mockProjects,
      isMockData: true
    };
  }
}

export interface ProjectResponse {
  project: Project | null;
  isMockData: boolean;
}

// Fetches a single project by its ID
export async function getProjectById(id: string): Promise<ProjectResponse> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_POCKETBASE_URL}/api/collections/projects/records/${id}`,
      {
        next: { revalidate: 60 }, // Revalidate every 60 seconds
      }
    );
    if (!res.ok) {
      return { project: null, isMockData: false }; // Return null if project not found
    }
    const data = await res.json();
    return { project: data as Project, isMockData: false };
  } catch (error) {
    console.error("Database Error:", error);
    // Return mock data for sample projects when database is unavailable
    const mockProject = mockProjects.find(p => p.id === id);
    return { project: mockProject || null, isMockData: true };
  }
}
