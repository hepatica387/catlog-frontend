# FELIA CATLOG Frontend

고양이 분양 서비스의 프런트엔드입니다. React, TypeScript, Create React App으로 구성되어 있으며 분양 정보, 상담, 방문 예약, 집사 게시판, 회원 기능을 제공합니다.

## 로컬 개발

Node.js 20과 npm이 필요합니다. 백엔드를 `http://localhost:8080`에서 실행한 뒤 프런트엔드 폴더에서 다음 명령을 실행합니다.

```bash
npm ci
npm start
```

프런트엔드 주소는 `http://localhost:3001`입니다. `.env`의 `PORT=3001` 설정을 사용합니다. 개발 서버는 `package.json`의 `proxy` 설정에 따라 `/api` 요청을 `http://localhost:8080`으로 전달합니다.

## Docker Compose로 전체 프로젝트 실행

프런트엔드와 백엔드를 함께 실행하려면 상위 프로젝트 폴더의 `docker-compose.yml`을 사용합니다. 이 파일과 `frontend/`, `backend/` 폴더가 같은 상위 폴더에 있어야 합니다. MySQL 초기화에는 `backend/sql/schema.sql`을 사용합니다.

```text
catlog/
├─ docker-compose.yml
├─ frontend/             # 이 저장소
└─ backend/              # catlog_backend 저장소
   └─ sql/schema.sql
```

상위 폴더에서 실행합니다.

```bash
docker compose up --build -d
```

기본 접속 주소는 프런트엔드 `http://localhost:3000`, 백엔드 `http://localhost:8080`, MySQL `localhost:3308`입니다. 종료할 때는 같은 폴더에서 `docker compose down`을 실행합니다. MySQL 데이터는 Compose 볼륨 `mysql_data`에 저장됩니다.

Compose 파일은 프런트엔드와 백엔드의 이미지 빌드 방법을 `dockerfile_inline`으로 정의합니다. 프런트엔드 이미지는 Nginx로 정적 파일을 제공하며, `nginx.conf`가 `/api` 요청을 Compose의 `backend` 서비스로 전달합니다. 현재 Compose 구성에서는 별도 `Dockerfile`이 필요하지 않습니다.

포트는 상위 폴더의 `.env`에 `FRONTEND_PORT`, `BACKEND_PORT`, `MYSQL_PORT`를 지정해 변경할 수 있습니다. MySQL 비밀번호는 같은 파일의 `MYSQL_PASSWORD`, `MYSQL_ROOT_PASSWORD`로 변경할 수 있습니다.

## 검증

```bash
npm run typecheck
npm run build
```

GitHub Actions의 프런트엔드 CI도 `npm ci`와 `npm run build`를 실행합니다. 이 저장소에는 프런트엔드 배포 워크플로가 없습니다.

## 코드 구조

- `src/pages`: 화면별 컴포넌트
- `src/components`: 공통 UI 컴포넌트
- `src/routes`: 라우트 설정
- `src/api`: 백엔드 API 호출
- `src/constants`: API 경로와 공통 상수
- `src/contexts`: 인증과 예약 상태
- `src/styles`: 화면 스타일
- `public/assets`: 정적 이미지

라우팅에는 `BrowserRouter`를 사용합니다. 예를 들어 분양 페이지 경로는 `/adoption`입니다. 직접 URL로 접속하거나 새로고침할 때는 Nginx가 `index.html`을 제공하도록 `nginx.conf`에 설정되어 있습니다.
