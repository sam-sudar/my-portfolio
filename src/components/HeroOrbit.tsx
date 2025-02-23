import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

// TODO: 4:38:51

export const HeroOrbit = ({
  children,
  size,
  rotation,
  shouldOrbit,
  spinDuration,
}: PropsWithChildren<{
  size: number;
  rotation: number;
  shouldOrbit?: boolean;
  spinDuration?: string;
}>) => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-20">
      <div
        className={twMerge(shouldOrbit === true && "animate-spin")}
        style={{
          animationDuration: spinDuration,
        }}
      >
        <div
          className="  flex items-start justify-start"
          style={{
            height: `${size}px`,
            width: `${size}px`,
            transform: `rotate(${rotation}deg)`,
          }}
        >
          <div
            className="inline-flex"
            style={{ transform: `rotate(${rotation * -1}deg)` }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
