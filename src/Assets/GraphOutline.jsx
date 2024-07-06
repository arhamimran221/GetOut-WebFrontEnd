import React from "react";

const GraphOutline = (props) => {
  return (
    <div>
      <svg
        width="300"
        height="71"
        viewBox="0 0 300 71"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_288_7828)">
          <mask
            id="mask0_288_7828"
            style={{ maskType: "luminance" }}
            maskUnits="userSpaceOnUse"
            x="-5"
            y="-3"
            width="310"
            height="77"
          >
            <path d="M305 -2.11035H-5V73.8896H305V-2.11035Z" fill="white" />
          </mask>
          <g mask="url(#mask0_288_7828)">
            <path
              d="M0 67.3896C9.54545 67.3896 17.7273 49.8896 27.2727 49.8896C36.8182 49.8896 45 67.3896 54.5455 67.3896C64.0909 67.3896 72.2727 32.3896 81.8182 32.3896C91.3636 32.3896 99.5455 49.8896 109.091 49.8896C118.636 49.8896 126.818 14.8896 136.364 14.8896C145.909 14.8896 154.091 49.8896 163.636 49.8896C173.182 49.8896 181.364 32.3896 190.909 32.3896C200.455 32.3896 208.636 67.3896 218.182 67.3896C227.727 67.3896 235.909 32.3896 245.455 32.3896C255 32.3896 263.182 49.8896 272.727 49.8896C282.273 49.8896 290.455 32.3896 300 32.3896"
              stroke={props.stroke}
              strokeWidth="6"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_288_7828">
            <rect y="0.889648" width="300" height="70" rx="8" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default GraphOutline;
