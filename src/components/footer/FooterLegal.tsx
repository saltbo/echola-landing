import { memo } from "react";


const FooterLegal = ({ className = "", homeHref = "/", supportHref }: { className?: string; homeHref?: string; supportHref?: string }) => (
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
        {supportHref && <>
            <span className="text-gray-400 dark:text-gray-500">•</span>
            <a href={supportHref} className="flex items-center gap-2 text-body hover:text-heading transition-colors font-medium"><span>Support</span></a>
        </>}
    </div>
);

export default memo(FooterLegal);
