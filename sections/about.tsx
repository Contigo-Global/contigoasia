import Image from "next/image";
import marc_image from "../public/images/marc.jpg";
import raul_image from "../public/images/raul.jpg";
import styles from "./about.module.css";
import background from "../public/images/image3.jpeg";

const People = [
    {
        name: "Dr. Raul Hinojosa",
        position: "CEO, Contigo",
        image: raul_image,
        description: <RaulDescription />,
    },
    {
        name: "Marc Canter",
        position: "COO, Contigo",
        image: marc_image,
        description: <MarcDescription />,
    },
];
export default function About() {
    return (
        <section id="about" className="relative p-16">
            <Image alt="background" src={background} fill={true} style={{
                objectFit: "cover"
            }} />
            <div className="relative z-10 rounded-xl bg-slate-900/60 p-16">
                <h2 className="text-center font-samarkan text-7xl text-white">About</h2>
                <div className="flex h-full flex-col justify-around gap-y-16 lg:flex-row">
                    {People.map((person, idx) => (
                        <div key={idx} className="flex lg:w-1/2">
                            <div className="flex flex-col items-center gap-y-2">
                                <Image
                                    className={styles.image}
                                    alt={`Image of ${person.name}`}
                                    src={person.image}
                                />
                                <h3 className={styles.name}>{person.name}</h3>
                                <h4 className={styles.title}>{person.position}</h4>
                                {person.description}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

function RaulDescription() {
    return (
        <div className={styles.description}>
            <p>
                <b>Dr. Raul Hinojosa</b> is Founding Director of the{" "}
                <u>North American Integration and Development Center</u> and Associate
                Professor in the{" "}
                <b>
                    César E. Chávez Department of Chicana, Chicano and Central American
                    Studies
                </b>{" "}
                at the University of California, Los Angeles. He received a B.A.
                (Economics), M.A. (Anthropology) and Ph.D. (Political Science) at the
                University of Chicago. He is the author of numerous articles and books
                on the political economy of regional integrations in various parts of
                the world, including trade, investment and migration relations between
                the U.S., Mexico, Latin American and the Pacific Rim.
            </p>
            <br />
            <p>
                Dr. Hinojosa is also co-founder of the{" "}
                <u>North American Development Bank</u>.
            </p>
            <br />
            <p>
                Dr. Hinojisa&apos;s recent work has focused on researching and
                identifying Social Equity footprint, which can be quantified and
                utilized in assessing and ranking long term Energy Transition planning,
                as well as ESG investments.
            </p>
        </div>
    );
}

function MarcDescription() {
    return (
        <div className={styles.description}>
            <p>
                <b>Marc Canter</b> is a 40+ software entrepreneur, best known for
                co-founding <b>MacroMind</b>, which became <b>Macromedia</b> [MACR.]
            </p>
            <br />
            <p>
                Marc has been called <i>&quot;one of the fathers of multimedia&quot;</i>
                , and is a specialist in taking ideas and turning them into software
                startups.
            </p>
            <br />
            <p>
                Marc has been part of and has participated in every era of the software
                business, since the early 80&apos;s.
            </p>
        </div>
    );
}