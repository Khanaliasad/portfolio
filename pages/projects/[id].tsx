import React from "react";
import { Project } from "../../typings";
import { fetchProjects } from "../../utils/fetchProjects";
import { useRouter } from "next/router";
import About from "../../src/component/About";

const ProjectPage = ({ projects }: any) => {
  const router = useRouter();
  const { id } = router.query;
  const data = projects.filter((p: any) => p._id === id);
  // console.log("context", data);
  return (
    <main
      className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-30 
      scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80"
    >
      <About name={"PROJECTS"} title={data?.title} project={data[0]} />
    </main>
  );
};

export default ProjectPage;

export const getStaticProps: any = async () => {
  const projects: Project[] = await fetchProjects();

  return {
    props: {
      projects,
    },
  } as unknown;
};

export async function getStaticPaths() {
  const res = await fetchProjects();
  const paths = res.map((post) => ({
    params: { id: post._id.toString() },
  }));
  return { paths, fallback: true };
}
