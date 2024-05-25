import React from "react";

type Props = {
  color: string;
  isEven?: boolean;
  children: React.ReactNode;
};

export const DescriptionFrame = (props: Props) => {
  const { color, isEven, children } = props;
  return (
    <>
      {isEven ? (
        <svg
          width="328"
          height="243"
          viewBox="0 0 328 243"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_0_1)">
            <path
              d="M4.83995 18.799C4.383 9.66006 11.6696 2 20.82 2H307.18C316.33 2 323.617 9.66006 323.16 18.799L314.76 186.799C314.334 195.314 307.306 202 298.78 202H29.22C20.694 202 13.6657 195.314 13.24 186.799L4.83995 18.799Z"
              fill="#FAFAFA"
            />
            <path
              d="M7.33683 18.6742C6.95128 10.9632 13.0994 4.5 20.82 4.5H307.18C314.901 4.5 321.049 10.9632 320.663 18.6742L312.263 186.674C311.904 193.859 305.974 199.5 298.78 199.5H29.22C22.0262 199.5 16.0961 193.859 15.7368 186.674L7.33683 18.6742Z"
              stroke={color}
              strokeWidth="5"
            />
          </g>
          <path
            d="M261.3 212.845V218.178C261.3 221.989 258.211 225.078 254.4 225.078C250.589 225.078 247.5 221.989 247.5 218.178V214.37C247.5 207.538 241.962 202 235.13 202H234V197H298V202C293.566 202 289.957 205.566 289.902 209.999L289.631 232.267C289.558 238.216 284.715 243 278.766 243C272.765 243 267.9 238.135 267.9 232.134V212.845C267.9 211.023 266.423 209.545 264.6 209.545C262.777 209.545 261.3 211.023 261.3 212.845Z"
            fill={color}
          />
          <defs>
            <filter
              id="filter0_d_0_1"
              x="0.819336"
              y="0"
              width="326.361"
              height="208"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_0_1"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_0_1"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      ) : (
        <svg
          width="328"
          height="243"
          viewBox="0 0 328 243"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_0_1)">
            <path
              d="M13.24 17.201C13.6657 8.68564 20.694 2 29.22 2H298.78C307.306 2 314.334 8.68565 314.76 17.201L323.16 185.201C323.617 194.34 316.33 202 307.18 202H20.82C11.6696 202 4.383 194.34 4.83995 185.201L13.24 17.201Z"
              fill="#FAFAFA"
            />
            <path
              d="M15.7368 17.3258C16.0961 10.141 22.0262 4.5 29.22 4.5H298.78C305.974 4.5 311.904 10.141 312.263 17.3258L320.663 185.326C321.049 193.037 314.901 199.5 307.18 199.5H20.82C13.0994 199.5 6.95128 193.037 7.33683 185.326L15.7368 17.3258Z"
              stroke={color}
              strokeWidth="5"
            />
          </g>
          <path
            d="M261.3 212.845V218.178C261.3 221.989 258.211 225.078 254.4 225.078C250.589 225.078 247.5 221.989 247.5 218.178V214.37C247.5 207.538 241.962 202 235.13 202H234V197H298V202C293.566 202 289.957 205.566 289.902 209.999L289.631 232.267C289.558 238.216 284.715 243 278.766 243C272.765 243 267.9 238.135 267.9 232.134V212.845C267.9 211.023 266.423 209.545 264.6 209.545C262.777 209.545 261.3 211.023 261.3 212.845Z"
            fill={color}
          />
          <circle cx="254.5" cy="233.5" r="4.5" fill={color} />
          <defs>
            <filter
              id="filter0_d_0_1"
              x="0.819336"
              y="0"
              width="326.361"
              height="208"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_0_1"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_0_1"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      )}
      <div
        className="absolute flex flex-col items-center"
        style={{ top: "49px" }}
      >
        {children}
      </div>
    </>
  );
};
