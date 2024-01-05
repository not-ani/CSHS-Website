import rss from "@astrojs/rss";

export async function GET(context) {
  return rss({
    title: "Creek CSHS",
    description: "Cherry Creek Computer Science Honor Society",
    site: site.context,
  });
}
