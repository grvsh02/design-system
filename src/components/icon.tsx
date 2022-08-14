import React from 'react';
import  { TrashBold, SortBold, CloseCircleBold, SearchNormalBold, SmsTrackingBold, HeartBold, FrameBold, CategoryBold, ArrowUpBold, ArrowRightBold, ArrowLeftBold, ArrowSquareLeftBold, ArrowDownBold, TickSquareBold, AddSquareBold, MinusSquareBold, ArrowSquareRightBold, EyeBold, ShoppingCartBold } from '../icons/bold';
import { EyeOutline, TickSquareOutline, ArrowDownOutline, ArrowLeftOutline, ArrowSquareLeftOutline, ArrowRightOutline, ArrowUpOutline, ShoppingCartOutline, CategoryOutline, FrameOutline, HeartOutline, SmsTrackingOutline, SearchNormalOutline, SortOutline, CloseCircleOutline, TrashOutline, ArrowRight1Outline, AddOutline } from '../icons/outline';


type IconProps = {
    fill?: string;
    stroke?: string;
    type?: string;
    icon?: keyof [BoldTypes, OutlineTypes];
    size?: 'base' | 'sm' | 'xs'
}

type OutlineTypes = {
    EyeOutline: typeof EyeOutline;
    TickSquareOutline: typeof TickSquareOutline;
    ArrowDownOutline: typeof ArrowDownOutline;
    ArrowLeftOutline: typeof ArrowLeftOutline;
    ArrowSquareLeftOutline: typeof ArrowSquareLeftOutline;
    ArrowRightOutline: typeof ArrowRightOutline;
    ArrowUpOutline: typeof ArrowUpOutline;
    ShoppingCartOutline: typeof ShoppingCartOutline;
    CategoryOutline: typeof CategoryOutline;
    FrameOutline: typeof FrameOutline;
    HeartOutline: typeof HeartOutline;
    SmsTrackingOutline: typeof SmsTrackingOutline;
    SearchNormalOutline: typeof SearchNormalOutline;
    SortOutline: typeof SortOutline;
    CloseCircleOutline: typeof CloseCircleOutline;
    TrashOutline: typeof TrashOutline;
    ArrowRight1Outline: typeof ArrowRight1Outline;
    AddOutline: typeof AddOutline;
}

type BoldTypes = {
    ShoppingCartBold: typeof ShoppingCartBold;
    AddSquareBold: typeof AddSquareBold;
    ArrowDownBold: typeof ArrowDownBold;
    ArrowLeftBold: typeof ArrowLeftBold;
    ArrowRightBold: typeof ArrowRightBold;
    ArrowSquareLeftBold: typeof ArrowSquareLeftBold;
    ArrowSquareRightBold: typeof ArrowSquareRightBold;
    ArrowUpBold: typeof ArrowUpBold;
    CategoryBold: typeof CategoryBold;
    CloseCircleBold: typeof CloseCircleBold;
    EyeBold: typeof EyeBold;
    FrameBold: typeof FrameBold;
    HeartBold: typeof HeartBold;
    MinusSquareBold: typeof MinusSquareBold;
    SearchNormalBold: typeof SearchNormalBold;
    SmsTrackingBold: typeof SmsTrackingBold;
    SortBold: typeof SortBold;
    TickSquareBold: typeof TickSquareBold;
    TrashBold: typeof TrashBold;
}


const BoldTypes = {
    "Eye": EyeBold,
    "Trash": TrashBold,
    "Sort": SortBold,
    "CloseCircle": CloseCircleBold,
    "SearchNormal": SearchNormalBold,
    "SmsTracking": SmsTrackingBold,
    "Heart": HeartBold,
    "Frame": FrameBold,
    "Category": CategoryBold,
    "ArrowUp": ArrowUpBold,
    "ArrowRight": ArrowRightBold,
    "ArrowLeft": ArrowLeftBold,
    "ArrowSquareLeft": ArrowSquareLeftBold,
    "ArrowDown": ArrowDownBold,
    "TickSquare": TickSquareBold,
    "AddSquare": AddSquareBold,
    "MinusSquare": MinusSquareBold,
    "ArrowSquareRight": ArrowSquareRightBold,
    "ShoppingCart": ShoppingCartBold
}

const Icon = ({ fill, stroke, type, icon = "ShoppingCart" , size }: IconProps) => {

    const IconComponent = BoldTypes[icon];
    let height ;
    let width ;
    if (size === 'base') {
        height = '20px';
        width = '20px';
    } else if (size === 'sm') {
        height = '15px';
        width = '15px';
    } else if (size === 'xs') {
        height = '15px';
        width = '15px';
    }

    return (
        <div style={{height:height,
            width: width}} className="size">
            <IconComponent fill={fill} stroke={stroke} />
        </div>
    )
}

export default Icon;