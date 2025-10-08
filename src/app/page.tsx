import { Metadata } from "next";
import HomeSixPage from "./(homes)/home-6/page";

export const metadata: Metadata = {
  title: "Liko - Home Page",
};

export default function Home() {
  return (
    <>
      <HomeSixPage />
    </>
  );
}
