// import { mockSupportGroups } from "@/app/(features)/(dashboard)/user/support-groups/data";
// import { notFound } from "next/navigation";
// import SupportGroupsDetails from "../_components/GroupDetails";

import SupportGroupsDetails from "../_components/GroupDetails";

// type PageProps = {
//   params: Promise<{
//     slug: string;
//   }>;
// };

// export default async function SupportGroupDetailsPage({ params }: PageProps) {
//   const { slug } = await params;
//   const groups = mockSupportGroups.find((item) => item.slug === slug);

//   if (!groups) {
//     notFound();
//   }

//   return <SupportGroupsDetails selectedSlug={slug} />;
// }


interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  return <SupportGroupsDetails selectedSlug={slug} />;
}
