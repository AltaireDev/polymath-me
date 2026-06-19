"use client"

/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/refs */

import { useMDXComponent } from "next-contentlayer2/hooks"

export function MdxRenderer({ code }: { code: string }) {
  const Component = useMDXComponent(code)
  return <Component />
}