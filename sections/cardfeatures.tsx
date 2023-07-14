import Image from "next/image";
import card from "../public/card.svg";
export default function CardFeatures() {
    return (
        <section className="relative bg-image3 p-32">
            <div className="w-fit rounded-xl bg-yellow-900/30 p-8">
                <h2 className="font-samarkan text-7xl text-white">Card Features</h2>
                <ul className="text-4xl text-white">
                    <li>No Fees</li>
                    <li>Low Cost Remittances</li>
                    <li>Bank Account Card</li>
                    <li>No SS# or ITIN# Required</li>
                </ul>
            </div>
            <Image className="absolute top-32 right-96 w-1/4" src={card} alt="Card" />

        </section>
    )
}