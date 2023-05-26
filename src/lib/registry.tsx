"use client";

import React, { useState, useEffect } from "react";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";

export default function StyledComponentsRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const [styledComponentsStyleSheet] = useState(() => {
    if (typeof window === "undefined") {
      return new ServerStyleSheet();
    } else {
      return null;
    }
  });

  useEffect(() => {
    if (styledComponentsStyleSheet) {
      return () => styledComponentsStyleSheet.instance.clearTag();
    }
  }, [styledComponentsStyleSheet]);

  if (typeof window !== "undefined" && styledComponentsStyleSheet) {
    return (
      <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
        {children}
      </StyleSheetManager>
    );
  }

  return <>{children}</>;
}
