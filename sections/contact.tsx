import Image from "next/image";
import background from "../public/images/image4.jpg";
export default function Contact() {
    return (
        <section id="contact" className="relative p-24 ">
            <Image alt="background" src={background} fill={true} style={{
                objectFit: "cover"
            }} />
            <div className="relative z-10 mx-auto w-fit rounded-xl bg-slate-900/30 p-8 lg:mx-0">
                <h2 className="font-samarkan text-7xl text-white">Contact</h2>
                <div className="mouse-pointer text-white">
                    <a href="mailto:raul@sfglobalholdingllc.com">
                        <h3 className="text-4xl font-bold xl:text-3xl">
                            Dr Raul Hinojosa
                            <br />
                            raul@sfglobalholdingllc.com
                        </h3>
                    </a>
                </div>
            </div>
        </section>
    );
}