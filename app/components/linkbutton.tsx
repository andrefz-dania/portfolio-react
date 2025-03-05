import { Link } from "react-router"
import Button from "./button";

export default function LinkButton({type, onClick, className, children, linkUrl}: {type: string, onClick?: () => void, className?: string, children: React.ReactNode, linkUrl: string}) {
    return (
        <Link to={linkUrl}>
        <Button>
            {children}
        </Button>
        </Link>
    );
}