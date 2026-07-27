import { PageFrame } from "../components/PageFrame";
import { Sidebar } from "../components/Sidebar";
import { TopBar } from "../components/TopBar";
import { Footer } from "../components/Footer";

export function ReservationPage() {
  return (
    <PageFrame title="방문 예약" scriptUrl="/js/reservation.js">
      {/* 왼쪽 사이드바 */}
    <Sidebar />
      {/* 메인 콘텐츠 */}
    <div className="main-content">
      {/* 상단 유저 메뉴 */}
      <TopBar />

      <main className="reservation-container">
        <section className="reservation-page" aria-labelledby="reservationTitle">
          {/* <h1 id="reservationTitle" className="reservation-page-title">
            방문 예약
          </h1> */}

          <div className="reservation-layout">
            <section
              className="reservation-form-panel"
              aria-labelledby="reservationFormTitle"
            >
              <div className="reservation-form-heading">
                <h2 id="reservationFormTitle">방문 예약하기</h2>
                <p>원하시는 날짜와 시간을 선택해주세요.</p>
              </div>

              <form className="reservation-booking-form">
                <div className="reservation-field reservation-place-field">
                  <legend>
                    <span className="reservation-step-badge">1</span>
                    방문 지점 선택
                  </legend>

                  <select id="reservationPlace" name="place" required>
                    <option value="">방문 지점을 선택해주세요</option>
                    <option value="main">FELIA CATLOG 본점</option>
                    <option value="cafe">FELIA 고양이 카페</option>
                  </select>
                </div>

                <div className="reservation-form-grid">
                  <fieldset className="reservation-field reservation-date-field">
                    <legend>
                      <span className="reservation-step-badge">2</span>
                      날짜 선택
                    </legend>
                    <div
                      className="reservation-calendar"
                      aria-label="2024년 5월 예약 가능 날짜"
                    >
                      <div className="calendar-head">
                        <button type="button" aria-label="이전 달">‹</button>
                        <strong>2024년 5월</strong>
                        <button type="button" aria-label="다음 달">›</button>
                      </div>
                      <div className="calendar-weekdays" aria-hidden="true">
                        <span>일</span><span>월</span><span>화</span
                        ><span>수</span><span>목</span><span>금</span
                        ><span>토</span>
                      </div>
                      <div className="calendar-days">
                        <span className="muted">28</span
                        ><span className="muted">29</span
                        ><span className="muted">30</span>
                        <button type="button">1</button
                        ><button type="button">2</button
                        ><button type="button">3</button
                        ><button type="button">4</button>
                        <button type="button">5</button
                        ><button type="button">6</button
                        ><button type="button">7</button
                        ><button type="button">8</button
                        ><button type="button">9</button
                        ><button type="button">10</button
                        ><button type="button">11</button>
                        <button type="button">12</button
                        ><button type="button">13</button
                        ><button type="button">14</button
                        ><button type="button" className="selected">15</button
                        ><button type="button">16</button
                        ><button type="button">17</button
                        ><button type="button">18</button>
                        <button type="button">19</button
                        ><button type="button">20</button
                        ><button type="button">21</button
                        ><button type="button">22</button
                        ><button type="button">23</button
                        ><button type="button">24</button
                        ><button type="button">25</button>
                        <button type="button">26</button
                        ><button type="button">27</button
                        ><button type="button">28</button
                        ><button type="button">29</button
                        ><button type="button">30</button
                        ><button type="button">31</button
                        ><span className="muted">1</span>
                      </div>
                      <div className="calendar-legend">
                        <span><i className="available"></i> 오늘</span>
                        <span><i className="selected"></i> 선택 가능</span>
                        <span><i className="disabled"></i> 선택 불가</span>
                      </div>
                    </div>
                  </fieldset>

                  <div className="reservation-side-fields">
                    <fieldset className="reservation-field reservation-time-field">
                      <legend>
                        <span className="reservation-step-badge">3</span>
                        시간 선택
                      </legend>
                      <div className="reservation-time-list">
                        <button type="button">10:00</button>
                        <button type="button">11:00</button>
                        <button type="button">12:00</button>
                        <button type="button">13:00</button>
                        <button type="button">14:00</button>
                        <button type="button">15:00</button>
                        <button type="button">16:00</button>
                        <button type="button">17:00</button>
                        <button type="button">18:00</button>
                      </div>
                      <p>평일 방문은 약 60분 정도 소요됩니다.</p>
                    </fieldset>

                    <fieldset
                      className="reservation-field reservation-purpose-field"
                    >
                      <legend>
                        <span className="reservation-step-badge">4</span>
                        방문 목적 선택
                      </legend>
                      <div className="reservation-purpose-list">
                        <label
                          ><input type="radio" name="purpose" checked /> 아이
                          만나기</label
                        >
                        <label
                          ><input type="radio" name="purpose" /> 분양
                          상담</label
                        >
                        <label
                          ><input type="radio" name="purpose" /> 환경
                          둘러보기</label
                        >
                        <label
                          ><input type="radio" name="purpose" /> 기타
                          문의</label
                        >
                      </div>
                    </fieldset>

                    <button type="submit" className="reservation-submit-btn">
                      예약하기
                    </button>
                  </div>
                </div>
              </form>
            </section>

            <aside
              className="reservation-guide-panel"
              aria-labelledby="reservationGuideTitle"
            >
              <h2 id="reservationGuideTitle">예약 안내</h2>
              <ul>
                <li>
                  <span className="guide-icon" aria-hidden="true">
                    <img
                      src="./../assets/icon/reservation_icon1.png"
                      alt="예약 변경 및 취소 안내 아이콘"
                    />
                  </span>
                  <div>
                    <strong>예약 변경 및 취소</strong>
                    <p>
                      방문 1일 전까지 홈페이지에서 변경 및 취소가 가능합니다.
                    </p>
                  </div>
                </li>
                <li>
                  <span className="guide-icon" aria-hidden="true">
                    <img
                      src="./../assets/icon/reservation_icon2.png"
                      alt="지각 안내 아이콘"
                    />
                  </span>
                  <div>
                    <strong>지각 안내</strong>
                    <p>
                      예약 시간 10분 이상 지각 시 상담이 어려울 수 있습니다.
                    </p>
                  </div>
                </li>
                <li>
                  <span className="guide-icon" aria-hidden="true">
                    <img
                      src="./../assets/icon/reservation_icon3.png"
                      alt="준비 사항 아이콘"
                    />
                  </span>
                  <div>
                    <strong>준비 사항</strong>
                    <p>궁금한 점을 미리 메모해 오시면 상담이 더 원활합니다.</p>
                  </div>
                </li>
                <li>
                  <span className="guide-icon" aria-hidden="true">
                    <img
                      src="./../assets/icon/reservation_icon4.png"
                      alt="주차 안내 아이콘"
                    />
                  </span>
                  <div>
                    <strong>주차 안내</strong>
                    <p>건물 지하 주차장 이용 가능합니다.</p>
                  </div>
                </li>
              </ul>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </div>
    </PageFrame>
  );
}
