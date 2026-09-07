import { memo } from "react";


const FooterLegal = ({ className = "", homeHref = "/" }: { className?: string; homeHref?: string }) => (
    <div className={`flex items-center gap-2 text-base ${className}`}>
        <a
            href={`${homeHref}privacy`}
            className="flex items-center gap-2 text-body hover:text-heading transition-colors font-medium"
        >
            <span>Privacy</span>
        </a>
        <span className="text-gray-400 dark:text-gray-500">•</span>
        <a
            href={`${homeHref}terms`}
            className="flex items-center gap-2 text-body hover:text-heading transition-colors font-medium"
        >
            <span>Terms</span>
        </a>
    </div>
);

export default memo(FooterLegal);
