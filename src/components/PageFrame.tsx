import { useEffect, useRef, type ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface PageFrameProps {
  title: string;
  bodyClass?: string;
  children: ReactNode;
}

function toAppUrl(anchor: HTMLAnchorElement): string | null {
  const href = anchor.getAttribute("href");
  if (
    !href ||
    href.startsWith("#") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:")
  ) {
    return null;
  }

  const url = new URL(href, window.location.href);
  if (url.origin !== window.location.origin) return null;
  return `${url.pathname}${url.search}${url.hash}`;
}

export function PageFrame({ title, bodyClass, children }: PageFrameProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    document.title = title;
    document.body.className = bodyClass ?? "";
    const root = rootRef.current;
    if (!root) return;

    const handleNavigation = (event: MouseEvent) => {
      const anchor = (event.target as Element | null)?.closest("a");
      if (!(anchor instanceof HTMLAnchorElement)) return;
      const url = toAppUrl(anchor);
      if (!url) return;
      event.preventDefault();
      navigate(url);
    };

    root.addEventListener("click", handleNavigation);

    return () => {
      root.removeEventListener("click", handleNavigation);
      document.body.className = "";
    };
  }, [bodyClass, location.key, navigate, title]);

  return (
    <div ref={rootRef} className="page-frame">
      {children}
    </div>
  );
}
