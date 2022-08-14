import React from 'react';
import  { EyeBold, ArrowDownBold, ShoppingCartBold, ArrowSquareRightBold, MinusSquareBold, AddSquareBold, ArrowSquareLeftBold, TickSquareBold, ArrowLeftBold, ArrowRightBold, ArrowUpBold, CategoryBold, FrameBold, HeartBold, SmsTrackingBold, SearchNormalBold, CloseCircleBold, SortBold, TrashBold } from '../icons/bold';
import { TrashOutline, SortOutline, EyeOutline, TickSquareOutline, CloseCircleOutline, SearchNormalOutline, SmsTrackingOutline, HeartOutline, FrameOutline, CategoryOutline, ArrowUpOutline, ArrowRightOutline, ArrowLeftOutline, ArrowSquareLeftOutline, ArrowDownOutline, ArrowRight1Outline, AddOutline, ShoppingCartOutline, MinusOutline,  } from '../icons/outline';


type IconProps = {
    fill?: string;
    stroke?: string;
    type?: string;
    size?: 'base' | 'sm' | 'xs';
    icon? : keyof BoldTypes | keyof OutlineTypes;
}

type OutlineTypes = {
    ShoppingCartOutline: typeof ShoppingCartOutline;
    AddOutline: typeof AddOutline;
    ArrowDownOutline: typeof ArrowDownOutline;
    ArrowLeftOutline: typeof ArrowLeftOutline;
    ArrowRight1Outline: typeof ArrowRight1Outline;
    ArrowRightOutline: typeof ArrowRightOutline;
    ArrowSquareLeftOutline: typeof ArrowSquareLeftOutline;
    ArrowUpOutline: typeof ArrowUpOutline;
    CategoryOutline: typeof CategoryOutline;
    CloseCircleOutline: typeof CloseCircleOutline;
    EyeOutline: typeof EyeOutline;
    FrameOutline: typeof FrameOutline;
    HeartOutline: typeof HeartOutline;
    MinusOutline: typeof MinusOutline;
    SearchNormalOutline: typeof SearchNormalOutline;
    SmsTrackingOutline: typeof SmsTrackingOutline;
    SortOutline: typeof SortOutline;
    TickSquareOutline: typeof TickSquareOutline;
    TrashOutline: typeof TrashOutline;
}

type BoldTypes = {
    Eye: typeof EyeBold;
    Trash: typeof TrashBold;
    Sort: typeof SortBold;
    CloseCircle: typeof CloseCircleBold;
    SearchNormal: typeof SearchNormalBold;
    SmsTracking: typeof SmsTrackingBold;
    Heart: typeof HeartBold;
    Frame: typeof FrameBold;
    Category: typeof CategoryBold;
    ShoppingCart: typeof ShoppingCartBold;
    ArrowUp: typeof ArrowUpBold;
    ArrowRight: typeof ArrowRightBold;
    ArrowSquareRight: typeof ArrowSquareRightBold;
    ArrowSquareLeft: typeof ArrowSquareLeftBold;
    ArrowLeft: typeof ArrowLeftBold;
    ArrowDown: typeof ArrowDownBold;
    TickSquare: typeof TickSquareBold;
    MinusSquare: typeof MinusSquareBold;
    AddSquare: typeof AddSquareBold;
}

const OutlineTypes = {
    "Eye" : EyeOutline,
    "Trash" : TrashOutline,
    "Sort" : SortOutline,
    "CloseCircle" : CloseCircleOutline,
    "SearchNormal" : SearchNormalOutline,
    "SmsTracking" : SmsTrackingOutline,
    "Heart" : HeartOutline,
    "Frame" : FrameOutline,
    "Category" : CategoryOutline,
    "ShoppingCart" : ShoppingCartOutline,
    "ArrowUp" : ArrowUpOutline,
    "ArrowRight" : ArrowRightOutline,
    "ArrowSquareLeft" : ArrowSquareLeftOutline,
    "ArrowLeft" : ArrowLeftOutline,
    "ArrowDown" : ArrowDownOutline,
    "TickSquare" : TickSquareOutline,
    "MinusSquare" : MinusOutline,
    "AddSquare" : AddOutline
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
    "ShoppingCart": ShoppingCartBold,
    "ArrowUp": ArrowUpBold,
    "ArrowRight": ArrowRightBold,
    "ArrowSquareRight": ArrowSquareRightBold,
    "ArrowSquareLeft": ArrowSquareLeftBold,
    "ArrowLeft": ArrowLeftBold,
    "ArrowDown": ArrowDownBold,
    "TickSquare": TickSquareBold,
    "MinusSquare": MinusSquareBold,
    "AddSquare": AddSquareBold,
}

const Icon = ({ fill, stroke, type = "Bold", icon = "ShoppingCart" , size }: IconProps) => {

    let IconComponent : any;
    if (type === "Bold") {
        type BoldTypesKey = keyof typeof BoldTypes;
        const iconObj = icon as BoldTypesKey;
        IconComponent = BoldTypes[iconObj];
    } else {
        type OutlineTypesKey = keyof typeof OutlineTypes;
        const iconObj = icon as OutlineTypesKey;
        IconComponent = OutlineTypes[iconObj];
    }
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