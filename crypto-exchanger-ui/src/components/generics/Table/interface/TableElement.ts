import { HTMLAttributes } from "react";

export type TableElement<T> = HTMLAttributes<T> & {
  children: React.ReactNode;
};
