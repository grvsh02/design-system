import React from 'react';

type AvatarProps = {
    imgUrl?: string,
    size: 'base' | 'sm' | 'xs';
    altText?: string;
    onClick?: () => void;
    altColors?: AvatarColorProps;
}

type AvatarColorProps = {
    fillColor?: string;
    textColor?: string;
}

const Avatar = ({size = "base", imgUrl, altText, onClick = () => {}, altColors }: AvatarProps) => {

    const getName = () => {
        const _alt = (altText?.trim() || '');
        const words = _alt.split(' ');
        if (words.length > 1) return _alt[0] + words[words.length - 1][0];
        else if (_alt.length > 1) return _alt[0] + _alt[1];
        return _alt[0] || '';
    };

    const iconSize = size === 'base' ? '96' : size === 'sm' ? '64px' : '40px';

    const renderPlaceholder = () => (
        <svg
            className="rounded-full"
            width={iconSize}
            height={iconSize}
            viewBox="0 0 75 75"
            preserveAspectRatio="xMinYMid meet"
            style={{ backgroundColor: altColors?.fillColor || '#ddd' }}
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <text
                x="50%"
                y="55%"
                dominantBaseline="middle"
                textAnchor="middle"
                fill={altColors?.textColor || '#222'}
                fontSize="32"
                fontWeight="600"
            >
                {getName()?.toUpperCase()}
            </text>
        </svg>
    );

    const _className = (() => {
        if(size === 'base') return 'w-24 h-24';
        if(size === 'sm') return 'w-16 h-16';
        if(size === 'xs') return 'w-10 h-10';
    })();

    return (
        <div className={`${_className}` + (typeof onClick === "function" ? ' hover:cursor-pointer' : '') } onClick={onClick}>
            {!(imgUrl?.length) ?
                renderPlaceholder()
                : <img src={imgUrl} alt="Not Found :_(" className={ `${_className}` + " object-cover rounded-full "} />
            }
        </div>
    )
}

export default Avatar;