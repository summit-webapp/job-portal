import Link from "next/link"
import { ArrowBack } from "@mui/icons-material"

interface BelowNavProps {
    link?: string;
    text?: string;
    maxWidth?: string | number;
}

const BelowNav = ({ link = "/", text = "Back", maxWidth }: BelowNavProps) => {
    return (
        <div className="bg-white below-nav-header-wrapper mb-6">
            <div className="container py-1" style={maxWidth ? { maxWidth: maxWidth } : {}}>
                <Link href={link} className="d-flex align-items-center">
                    <ArrowBack style={{ width: 20, height: 20, color: "#20D296", margin: 8 }} />
                    <span className="below-nav-header-text">
                        {text}
                    </span>
                </Link>
            </div>
        </div>
    )
}

export default BelowNav
