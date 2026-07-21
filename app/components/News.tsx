import { useLoaderData, Link } from "react-router";
import { client } from "~/config/contentfulClient";

export async function loader() {
  const response = await client.getEntries({
    content_type: "blog",
  });
  return response.items;
}

export default function News() {
  const posts = useLoaderData();

  return (
    <section className="font-body bg-white py-10 md:py-14">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@700;800&family=Inter:wght@400;500;600&display=swap');
        .font-heading { font-family: 'Plus Jakarta Sans', sans-serif; }
        .font-body { font-family: 'Inter', sans-serif; }
      `}</style>

      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <h2 className="font-heading font-extrabold text-[#C81854] text-[15px] tracking-wide uppercase mb-5">
          News & Insights
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {posts.map((post: any) => {
            const { title, date, image } = post.fields;
            return (
              <Link
                key={post.sys.id}
                to={`/news/${post.sys.id}`}
                className="flex flex-col group"
              >
                <div className="h-28 rounded-lg overflow-hidden mb-3">
                  <img
                    src={image.fields.file.url}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <span className="text-[10.5px] font-bold tracking-wide uppercase text-[#6B7280]">
                  {new Date(post.fields.date).toLocaleDateString()}
                </span>
                <h3 className="font-heading font-bold text-[#0B2A4A] text-[14px] mt-1.5 leading-snug group-hover:text-[#C81854] transition-colors">
                  {title}
                </h3>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}