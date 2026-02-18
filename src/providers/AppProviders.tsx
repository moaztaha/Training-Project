"use client";
interface Props {
  children: ReactNode;
}
import { ReactNode } from "react";
import ThemeProvider from "./ThemeProvider";
export default function AppProviders({ children }: Props) {
  return(
    <ThemeProvider>
        {children}
    </ThemeProvider>
  )
}