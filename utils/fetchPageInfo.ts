import { PageInfo } from "../typings";

export const fetchPageInfos = async () => {
  // const baseUrl = "http://localhost:3000";

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SANITY_BASE_URL}/api/getPageInfo`
  );
  const data = await res.json();
  const pageInfo: PageInfo = data.pageInfo;

  return pageInfo;
};
