"use client";

import { useMDXComponent } from "next-contentlayer/hooks";

interface MdxRendererProps {
  code: string;
}

export function MdxRenderer({ code }: MdxRendererProps) {
  const Component = useMDXComponent(code);
  
  return <Component />;
}