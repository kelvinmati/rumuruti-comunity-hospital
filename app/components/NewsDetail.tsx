import { useLoaderData, Link } from "react-router";
import { client } from "~/config/contentfulClient";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
export async function loader({ params }: { params: { postId: string } }) {
  const post = await client.getEntry(params.postId);
  return post;
}

export default function NewsDetail() {
  const post = useLoaderData();
  const { title, date, image, content } = post.fields;

  return (
    <section className="font-body bg-white py-10 md:py-16 min-h-screen">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@700;800&family=Inter:wght@400;500;600&display=swap');
        .font-heading { font-family: 'Plus Jakarta Sans', sans-serif; }
        .font-body { font-family: 'Inter', sans-serif; }
      `}</style>

      <div className="max-w-3xl mx-auto px-5 md:px-8">
        <Link
          to="/news"
          className="inline-flex items-center gap-2 text-[#C81854] text-sm font-semibold mb-8 hover:underline"
        >
          ← Back to News
        </Link>

        <span className="text-xs font-bold tracking-wide uppercase text-[#6B7280]">
         {new Date(date).toLocaleDateString()}
        </span>

        <h1 className="font-heading font-extrabold text-[#0B2A4A] text-2xl md:text-3xl mt-3 leading-tight">
          {title}
        </h1>

        <div className="mt-6 rounded-xl overflow-hidden">
          <img
            src={image.fields.file.url}
            alt={title}
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="mt-8 text-[#374151] text-[15px] leading-relaxed prose prose-sm max-w-none">
          {typeof content === "string" ? (
            <p>{content}</p>
          ) : content && content.nodeType ? (
            documentToReactComponents(content)
          ) : null}
        </div>
      </div>
    </section>
  );
}
