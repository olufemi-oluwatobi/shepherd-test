import React, { useState, useEffect } from "react";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";

/**
 *
 * StyledComponentsRegistry component is responsible for managing the integration of styled-components library
 * with server-side rendering (SSR) and client-side rendering (CSR) in a React application.
 */
export default function StyledComponentsRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  /**
   * useState hook is used to initialize the styledComponentsStyleSheet state.
   * In the server-side environment, it creates a new ServerStyleSheet instance.
   * In the client-side environment, it initializes the state to null.
   */
  const [styledComponentsStyleSheet] = useState(() => {
    if (typeof window === "undefined") {
      return new ServerStyleSheet();
    } else {
      return null;
    }
  });

  /**
   * The useEffect hook is used to perform cleanup when the component is unmounted.
   * It clears the style tag associated with the ServerStyleSheet instance, if available.
   */
  useEffect(() => {
    if (styledComponentsStyleSheet) {
      return () => styledComponentsStyleSheet.instance.clearTag();
    }
  }, [styledComponentsStyleSheet]);

  /**
   * In the client-side environment (typeof window !== "undefined") and if the styledComponentsStyleSheet is available,
   * the component wraps the children with the StyleSheetManager component from styled-components.
   * It provides the style sheet instance to ensure proper style application during rendering.
   */
  if (typeof window !== "undefined" && styledComponentsStyleSheet) {
    return (
      <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
        {children}
      </StyleSheetManager>
    );
  }

  /**
   * If the component is being rendered in a server-side environment or the styledComponentsStyleSheet is not available,
   * it simply renders the children without any additional wrapping.
   */
  return <>{children}</>;
}
