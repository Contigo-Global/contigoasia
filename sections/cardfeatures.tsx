import Image from "next/image";
import card from "../public/card.svg";
import background from "../public/images/image3.jpg";
export default function CardFeatures() {
    return (
        <section id="features" className="relative">
            <Image alt="background" src={background} fill={true} style={{
                objectFit: "cover"
            }} />
            <div className="relative flex h-screen flex-col items-center justify-between p-32 xl:h-auto xl:flex-row">
                <div className="relative z-10 w-fit rounded-xl bg-yellow-900/30 p-8">
                    <h2 className="font-samarkan text-7xl text-white">Card Features</h2>
                    <ul className="text-4xl text-white">
                        <li>No Fees</li>
                        <li>Low Cost Remittances</li>
                        <li>Bank Account Card</li>
                        <li>No SS# or ITIN# Required</li>
                    </ul>
                </div>
                <Image src={card} alt="Card" className="w-4/6 xl:w-1/3" />
            </div>

        </section>
    )
}