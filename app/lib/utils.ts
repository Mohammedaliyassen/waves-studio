import { Project } from "./definitions";

function isAbsoluteUrl(value: string) {
    return /^https?:\/\//i.test(value);
}

function buildPocketBaseFileUrl(project: Project, fileName: string) {
    const pocketbaseUrl = process.env.NEXT_PUBLIC_POCKETBASE_URL?.replace(/\/+$/, "");

    if (!pocketbaseUrl) {
        return null;
    }

    return `${pocketbaseUrl}/api/files/${project.collectionId}/${project.id}/${fileName}`;
}

function resolveProjectFileUrl(project: Project, fileName?: string) {
    const trimmedFileName = fileName?.trim();

    if (!trimmedFileName) {
        return "/codelegendlogo.jpg";
    }

    if (isAbsoluteUrl(trimmedFileName) || trimmedFileName.startsWith("/")) {
        return trimmedFileName;
    }

    return buildPocketBaseFileUrl(project, trimmedFileName) ?? "/codelegendlogo.jpg";
}

export function getImageUrl(project: Project) {
    return resolveProjectFileUrl(project, project.main_img);
}
export function getImagesUrl(project: Project): string[] {
    if (!Array.isArray(project.project_imgs)) return [];

    return project.project_imgs.map((img: string) => {
        return resolveProjectFileUrl(project, img);
    });
}
