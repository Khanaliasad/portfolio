import { Project } from "../typings";

export const fetchProjects = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SANITY_BASE_URL}/api/getProjects`
    );
    const data = await res.json();
    const projects: Project[] = data.project;

    return projects;
  } catch (error: any) {
    console.error("error in fetching projects", error);
    const res = await fetch(
      `https://sanity-be-prortfolio--rad-clafoutis-3664d7.netlify.app/api/getProjects`
    );
    const data = await res.json();
    const projects: Project[] = data.project;

    return projects;
  }
};
