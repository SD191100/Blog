import Explore from "@/components/screens/Explore";
import { Metadata } from "next";



export const metadata: Metadata = {
  title: "Explore | d.sh",
  description: "Search Guides by Tags",
};



export default async function TagsPage() {
  return (
    <>
      <Explore />
    </>
  );
}
