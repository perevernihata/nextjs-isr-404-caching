import { notFound } from "next/navigation";
// eslint-disable-next-line no-unused-vars
function asyncComponent<T, R>(fn: (arg: T) => Promise<R>): (arg: T) => R {
  // eslint-disable-next-line no-unused-vars
  return fn as (arg: T) => R;
}

export interface Props {
  params: {
    slug: string;
  };
  isPreviewMode?: boolean;
}

const Article = asyncComponent(async ({ params, isPreviewMode }: Props) => {
  const { slug } = params;

  if (slug !== "works") {
    return notFound();
  }
  return <div>Articles page with slug</div>;
});

export const revalidate = 10;
export const dynamicParams = true;

export async function generateStaticParams() {
  return [
    {
      slug: "works", // Anything not this should be a 404 with no ISR
    },
  ];
}

export default Article;
