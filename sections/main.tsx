import Image from "next/image";
import logoHorizontal from "../public/logo_horizontal.svg";
export default function Main() {
    return (
        <section id="main" className=" bg-image1 bg-cover">
            <div className="flex flex-col items-center justify-center gap-y-8 pt-32">
                <Image alt="Contigo Logo" className="w-1/2" src={logoHorizontal} />
                <h2 className="font-samarkan text-8xl">Coming Soon</h2>
            </div>
        </section>
    )
}