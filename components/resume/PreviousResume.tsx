import { XIcon } from "@phosphor-icons/react";
import Image from "next/image";

const PreviousResume = () => {
    return (
        <div className="previous-resume-item">
            <Image src="/image/resume-pdf-icon.png" alt="resume" width={24} height={24} />
            <div className="previous-resume-item-details">
                <h3 className="line-height-reset mb-4">Shravani_UX_Designer_Dec.pdf</h3>
                <p className="p-0 m-0 line-height-reset">31st Oct, 2025</p>
            </div>
            <div className="ml-auto">
                <button className="p-0 border-0 bg-transparent cursor-pointer">
                    <XIcon color="#FF1818" size={16} />
                </button>
            </div>
        </div>
    )
}

export default PreviousResume;
