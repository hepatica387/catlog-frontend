# FELIA CATLOG Frontend

Create React App 기반 React + TypeScript SPA입니다.

## 실행

```bash
npm install
npm start
```

## 검증

```bash
npm run typecheck
npm run build
```

## 구조

- `src/pages`: 라우트 단위 화면 컴포넌트
- `src/components`: 여러 화면에서 사용하는 공통 컴포넌트
- `src/routes`: React Router 설정
- `src/constants`: 경로 등 공통 상수
- `src/styles`: 전역 스타일
- `public/assets`: 이미지 정적 자산
- `public/js`: 기존 화면 동작을 유지하는 페이지별 스크립트

`PageFrame`은 문서 제목, 내부 링크 이동, 페이지별 기존 스크립트 실행을 공통 처리합니다.

라우팅은 정적 호스팅과 새로고침을 지원하도록 `HashRouter`를 사용합니다. 예: `/#/adoption`
