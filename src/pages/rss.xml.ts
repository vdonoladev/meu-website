import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE } from "@consts";

type Context = {
  site: string;
};

export async function GET(context: Context) {
  const posts = await getCollection("blog");
  const projects = await getCollection("projects");

  const items = [
    ...posts.map((p) => ({ ...p, _type: "blog" as const })),
    ...projects.map((p) => ({ ...p, _type: "projects" as const })),
  ];

  items.sort(
    (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime(),
  );

  return rss({
    title: SITE.TITLE,
    description: SITE.DESCRIPTION,
    site: context.site,
    items: items.map((item) => ({
      title: item.data.title,
      description: item.data.summary,
      pubDate: item.data.date,
      link: item._type === "blog"
        ? `/blog/${item.slug}/`
        : `/projetos/${item.slug}/`,
    })),
  });
}