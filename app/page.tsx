import About from "../sections/about";
import CardFeatures from "../sections/cardfeatures";
import Contact from "../sections/contact";
import Main from "../sections/main";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contigo Asia",
  description: "Contigo - Debit Card and Remittances for the Unbanned",
  viewport: ""
};

export default async function Page() {
  return (
    <>
      <Main />
      <CardFeatures />
      <About />
      <Contact />
    </>
  );
}
