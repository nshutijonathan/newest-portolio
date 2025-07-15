"use client";

import { HomeV1, HomeV2 } from "./ui";

export default function Home() {
  const shouldUseV1 = false;

  if (shouldUseV1) {
    return <HomeV1 />;
  }

  return <HomeV2 />;
}
