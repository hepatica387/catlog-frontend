import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import type { GetDiaryType } from "../../types/DiaryPost";

export function MyDiaryPosts({ posts }: { posts: GetDiaryType[] }) {
  return (
    <section className="mypage-panel" aria-labelledby="my-posts-title">
      <div className="mypage-panel-heading">
        <h2 id="my-posts-title">
          <i className="fa-regular fa-file-lines" aria-hidden="true" />
          내가 쓴 집사일기
        </h2>
        <Link className="mypage-outline-button" to={ROUTES.diary}>
          집사일기 가기 <span aria-hidden="true">→</span>
        </Link>
      </div>
      <div className="mypage-table-scroll">
        <table className="mypage-table mypage-posts-table">
          <caption className="sr-only">내가 작성한 집사일기 목록</caption>
          <thead>
            <tr>
              <th scope="col">제목</th>
              <th scope="col">작성일</th>
              <th scope="col">조회수</th>
              <th scope="col">좋아요</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.postId}>
                <td>
                  <div className="mypage-cat-cell">
                    {post.thumbnailUrl && (
                      <img src={post.thumbnailUrl} alt="" />
                    )}
                    <strong>{post.title}</strong>
                  </div>
                </td>
                <td>
                  {post.created_at ? (
                    <time dateTime={post.created_at}>
                      {post.created_at.slice(0, 10).replace(/-/g, ".")}
                    </time>
                  ) : "-"}
                </td>
                <td>{post.viewCount}</td>
                <td>
                  <i className="fa-regular fa-heart" aria-hidden="true" />{" "}
                  {post.likeCount}
                </td>
              </tr>
            ))}
            {posts.length === 0 && (
              <tr>
                <td colSpan={4}>
                  <div className="mypage-empty" role="status">
                    <i
                      className="fa-regular fa-pen-to-square"
                      aria-hidden="true"
                    />
                    <strong>아직 작성한 게시글이 없습니다</strong>
                    <span>고양이와 함께한 소중한 일상을 기록해보세요.</span>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
