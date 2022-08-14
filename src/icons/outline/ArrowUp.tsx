import * as React from "react";

function SvgArrowUp(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19.92 15.8c-.19 0-.38-.07-.53-.22l-6.52-6.52c-.48-.48-1.26-.48-1.74 0l-6.52 6.52c-.29.29-.77.29-1.06 0a.754.754 0 010-1.06L10.07 8a2.74 2.74 0 013.86 0l6.52 6.52c.29.29.29.77 0 1.06-.15.14-.34.22-.53.22z"
      />
    </svg>
  );
}

export default SvgArrowUp;
