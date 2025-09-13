import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

//join classes conditionaly, then clean the conflicts
export const cn = (...inputs: ClassValue[]): string => {
  return twMerge(clsx(inputs));
};