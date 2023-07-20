import Image from "next/image";
import logoHorizontal from "../public/logo_horizontal.svg";
import background from "../public/images/image1.jpeg";
export default function Main() {
    return (
        <section id="main" className="relative">
            <Image alt="background" src={background} fill={true} style={{
                objectFit: "cover"
            }} />
            <div className="relative z-10 flex flex-col items-center justify-center gap-y-8 pt-32">
                <Image alt="Contigo Logo" className="w-1/2" src={logoHorizontal} />
                <h2 className="font-samarkan text-8xl">Coming Soon</h2>
            </div>
        </section>
    )
}