import * as React from "react";

function SvgShoppingCart(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5.281 8.248A2 2 0 017.266 6H20a2 2 0 012 2v2.679a2 2 0 01-1.813 1.991L7.93 13.819a2 2 0 01-2.172-1.743l-.478-3.828z"
        strokeWidth={1.5}
      />
      <path
        d="M5.5 11l-.901-8.11A1 1 0 003.605 2H2"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <circle cx={9} cy={19} r={2.25} strokeWidth={1.5} />
      <circle cx={18} cy={19} r={2.25} strokeWidth={1.5} />
    </svg>
  );
}

export default SvgShoppingCart;
