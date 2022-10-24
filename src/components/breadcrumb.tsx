import React from 'react';

export type BreadcrumbPropType = {
    items: {
        key: string,
        title: string,
    }[],
    className?: string,
    homeIcon?: {
        key: string,
        icon: any,
    }
    onClick?: (key: string) => void
};


const Breadcrumb = ({ items, className = '', onClick = () => {}}: BreadcrumbPropType) => {

    return (
        <ul className={`text-lg p-0 flex align-middle ${className}`}>
            {items.length > 0 &&
                items.map((item) =>
                    <li key={item.key} className="flex text-slate-500" >
                        <div className={typeof onClick === "function" ? "mx-3 cursor-pointer " : "mx-3 " } onClick={() => onClick(item.key)}>{item.title}</div>
                        <div className="flex">/</div>
                    </li>
                )}
        </ul>
    );
}

export default Breadcrumb;