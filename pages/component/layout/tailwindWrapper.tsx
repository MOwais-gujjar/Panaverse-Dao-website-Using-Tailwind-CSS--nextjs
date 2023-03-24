"use client";
import React from "react";
import { ReactNode } from "react";
type props = {
  children: ReactNode;
};
export default function TailwindWrapper({ children }: props) {
  return <>{children}</>;
}
