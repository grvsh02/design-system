import * as React from "react";

function SvgTwitter(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M23.25 5.133a9.46 9.46 0 01-2.65.717 4.57 4.57 0 002.03-2.513c-.908.531-1.9.904-2.932 1.102a4.647 4.647 0 00-3.371-1.44c-2.55 0-4.615 2.035-4.615 4.543a4.37 4.37 0 00.119 1.036 13.158 13.158 0 01-9.516-4.749 4.485 4.485 0 00-.627 2.283c0 1.575.821 2.967 2.062 3.783a4.57 4.57 0 01-2.1-.567v.056c0 2.203 1.595 4.036 3.704 4.453-.397.106-.805.16-1.216.16-.291 0-.582-.028-.868-.085.587 1.805 2.294 3.117 4.315 3.155a9.356 9.356 0 01-6.835 1.88A13.063 13.063 0 007.816 21c8.501 0 13.146-6.924 13.146-12.928 0-.197-.006-.394-.015-.586a9.304 9.304 0 002.303-2.353z"
      />
    </svg>
  );
}

export default SvgTwitter;
