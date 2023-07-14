import About from "../sections/about";
import CardFeatures from "../sections/cardfeatures";
import Contact from "../sections/contact";
import Main from "../sections/main";

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
