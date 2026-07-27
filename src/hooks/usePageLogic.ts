import { useEffect } from "react";

export type PageLogicInitializer = () => void | (() => void);

export function usePageLogic(initializer: PageLogicInitializer): void {
  useEffect(() => initializer(), [initializer]);
}
