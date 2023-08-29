import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const randColor = () =>  {
  return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
}