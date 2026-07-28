import type { HTMLAttributes } from "react";

export type IridescenceProps = Omit<HTMLAttributes<HTMLDivElement>, "color"> & {
  color?: [number, number, number];
  speed?: number;
  amplitude?: number;
  mouseReact?: boolean;
};

export default function Iridescence(props: IridescenceProps): React.ReactElement;
