import React, {useEffect} from 'react';

type TabItemsProps = {
    label?: string,
    key: string,
}

type TabsProps = {
    items?: TabItemsProps[];
    selectedKey?: string;
    className?: string;
    onChange?: (index: any) => void;
    buttonClassName?: string;
}


const VerticalTab = ({ items, selectedKey, onChange = () => {}, className, buttonClassName}: TabsProps) => {

    const [selected, setSelected] = React.useState(selectedKey);

    useEffect(() => {
        onChange(selected);
    },[selected]);

    return (
        <div className={className}>
            {items?.map((item) => {
                return (
                    <div className={"flex py-2 px-5 font-semibold text-base cursor-pointer  " +
                        `${selected == item.key ? 'bg-blue-600 text-slate-50 ' : 'text-slate-800 '}` +
                        `${buttonClassName}`}
                         onClick={() => {
                             setSelected(item.key);
                        }}
                    >
                        <div className="pl-2.5">
                            {item.label}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default VerticalTab;