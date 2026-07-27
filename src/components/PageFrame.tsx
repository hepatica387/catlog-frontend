import { useEffect, useRef, type ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface PageFrameProps {
  title: string;
  scriptUrl?: string;
  bodyClass?: string;
  children: ReactNode;
}

function toAppUrl(anchor: HTMLAnchorElement): string | null {
  const href = anchor.getAttribute("href");
  if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) {
    return null;
  }

  const url = new URL(href, window.location.href);
  if (url.origin !== window.location.origin) return null;
  return `${url.pathname}${url.search}${url.hash}`;
}

export function PageFrame({ title, scriptUrl, bodyClass, children }: PageFrameProps) {
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
    let active = true;
    if (scriptUrl) {
      fetch(scriptUrl)
        .then((response) => {
          if (!response.ok) throw new Error(`${scriptUrl} 로드 실패`);
          return response.text();
        })
        .then((source) => {
          // 기존 페이지별 스크립트를 격리된 함수 범위에서 실행합니다.
          // eslint-disable-next-line no-new-func
          if (active) Function(source)();
        })
        .catch((error: unknown) => {
          console.error(`[CATLOG] ${title} 스크립트 실행 실패`, error);
        });
    }

    return () => {
      active = false;
      root.removeEventListener("click", handleNavigation);
      document.body.className = "";
    };
  }, [bodyClass, location.key, navigate, scriptUrl, title]);

  return (
    <div ref={rootRef} className="page-frame">
      {children}
    </div>
  );
}
