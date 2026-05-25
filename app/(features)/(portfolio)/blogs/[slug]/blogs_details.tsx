"use client";

// import Image from "next/image";
import { Calendar, Clock } from "lucide-react";
import { useBlogDetails } from "../blogs.services";
// import Link from "next/link";

type Props = {
  slug: string;
};

export default function BlogDetailsPage({ slug }: Props) {
  const { data: blog, isLoading, isError } = useBlogDetails(slug);

  if (isLoading) return <p className="p-10">Loading...</p>;
  if (isError || !blog) return <p className="p-10">Blog not found.</p>;

  const authorName = `${blog.author?.first_name ?? ""} ${
    blog.author?.last_name ?? ""
  }`.trim();

  const initials = `${blog.author?.first_name?.[0] ?? ""}${
    blog.author?.last_name?.[0] ?? ""
  }`;

  const publishedDate = new Date(blog.published_at).toLocaleDateString(
    "en-GB",
    {
      day: "2-digit",
      month: "long",
      year: "numeric",
    },
  );

  return (
    <main className="min-h-screen bg-[#f9f5f0] text-[#2c1a10]">
      {/* <section className="relative overflow-hidden bg-gradient-to-br from-[#f0e6db] via-[#e8d5c4] to-[#dcc9b5] px-5 py-14 text-center md:px-10 md:py-20">
        <span className="mb-6 inline-block rounded-full bg-[#866452] px-5 py-2 text-[11px] font-bold uppercase tracking-widest text-white">
          {blog.category?.name}
        </span>

        <h1 className="mx-auto max-w-3xl font-serif text-3xl font-semibold leading-tight md:text-5xl">
          {blog.title}
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-base font-light leading-8 text-[#5a3e2e] md:text-lg">
          {blog.excerpt}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-[#866452]">
          <Meta icon={<Calendar size={16} />} text={publishedDate} />
          <Meta
            icon={<Clock size={16} />}
            text={`${blog.reading_time} min read`}
          />
          <Meta icon={<User size={16} />} text={`By ${authorName}`} />
        </div>
      </section> */}

      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-5 py-12 md:grid-cols-[260px_1fr] md:gap-16 md:px-10 md:py-16">
        <aside className="space-y-5 md:sticky md:top-24 md:self-start">
          <div className="rounded-xl border  border-[#e8d9cc] bg-white p-6">
            <h2 className="mb-4 font-serif text-lg font-semibold">Insights</h2>
            <SidebarItem label="Category" value={blog.category?.name} />
            <Divider />
            <SidebarItem
              label="Posted date"
              value={publishedDate}
              icon={<Calendar size={14} />}
            />
            <Divider />
            <SidebarItem
              label="Reading time"
              value={`${blog.reading_time} min read`}
              icon={<Clock size={14} />}
            />
          </div>

          <div className="rounded-xl border border-[#e8d9cc] bg-white p-6">
            <h2 className="mb-4 font-serif text-lg font-semibold">Author</h2>

            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#e8d9cc] bg-[#f0e8de] font-serif font-semibold text-[#866452]">
                {initials}
              </div>

              <div>
                <p className="text-sm font-bold">{authorName}</p>
                <p className="text-xs text-[#866452]">{blog.author?.email}</p>
              </div>
            </div>
          </div>
        </aside>

        <article
          className="prose max-w-none prose-headings:font-serif prose-headings:text-[#2c1a10] prose-p:font-light prose-p:leading-8 prose-p:text-[#5a3e2e] prose-li:text-[#5a3e2e] prose-img:rounded-2xl"
          dangerouslySetInnerHTML={{ __html: blog.body }}
        />
      </section>
    </main>
  );
}

// function Meta({ icon, text }: { icon: React.ReactNode; text: string }) {
//   return (
//     <div className="flex items-center gap-2">
//       {icon}
//       <span>{text}</span>
//     </div>
//   );
// }

function SidebarItem({
  label,
  value,
  icon,
}: {
  label: string;
  value?: string;
  icon?: React.ReactNode;
}) {
  return (
    <div>
      <p className="mb-1 text-[11px] font-bold uppercase tracking-widest text-[#866452]">
        {label}
      </p>
      <div className="flex items-center gap-2 text-sm text-[#5a3e2e]">
        {icon}
        {value}
      </div>
    </div>
  );
}

function Divider() {
  return <hr className="my-4 border-[#e8d9cc]" />;
}
