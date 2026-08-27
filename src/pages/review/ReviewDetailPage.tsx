import { useNavigate, useParams } from 'react-router-dom'
import MainLayout from '../../components/layout/MainLayout'

const ReviewDetailPage = () => {
  const navigate = useNavigate()
  const { reviewId } = useParams()

  return (
    <MainLayout>
      <div className="p-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <button
              type="button"
              onClick={() => navigate('/reviews')}
              className="mb-4 text-sm text-[#8b95a1] hover:text-[#191f28]"
            >
              ← 리뷰 목록
            </button>

            <h1 className="text-2xl font-bold text-[#191f28]">
              리뷰 상세
            </h1>

            <p className="mt-2 text-sm text-[#8b95a1]">
              고객이 작성한 리뷰 내용을 확인하고 관리할 수 있습니다.
            </p>
          </div>

          <span className="rounded-lg bg-[#e8f7ee] px-3 py-2 text-sm font-semibold text-[#20a464]">
            공개
          </span>
        </div>

        {/* Review */}
        <div className="mt-8 grid grid-cols-3 gap-6">
          {/* Review Content */}
          <div className="col-span-2 rounded-2xl border border-[#e5e8eb] bg-white">
            <div className="border-b border-[#f0f1f3] px-6 py-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-[#8b95a1]">
                    리뷰번호
                  </p>

                  <p className="mt-1 font-semibold text-[#333d4b]">
                    REV-{reviewId ?? '00001'}
                  </p>
                </div>

                <p className="text-sm text-[#8b95a1]">
                  2026.08.25 21:35
                </p>
              </div>
            </div>

            <div className="p-6">
              {/* Rating */}
              <div className="flex items-center gap-3">
                <div className="text-2xl tracking-wide text-[#f59f00]">
                  ★★★★★
                </div>

                <span className="text-lg font-bold text-[#191f28]">
                  5.0
                </span>
              </div>

              {/* Content */}
              <div className="mt-6">
                <p className="whitespace-pre-line text-[15px] leading-7 text-[#333d4b]">
                  핏도 좋고 재질도 생각보다 좋아요.
                  {'\n'}
                  데일리로 입기 좋은 것 같아서 자주 입을 것 같습니다.
                  {'\n'}
                  색상도 사진이랑 비슷하고 전체적으로 만족스러워요.
                </p>
              </div>

              {/* Images */}
              <div className="mt-8">
                <p className="mb-3 text-sm font-semibold text-[#4e5968]">
                  첨부 이미지
                </p>

                <div className="grid grid-cols-4 gap-3">
                  {[1, 2, 3].map((image) => (
                    <div
                      key={image}
                      className="flex aspect-square items-center justify-center rounded-xl bg-[#f2f4f6] text-xs text-[#8b95a1]"
                    >
                      REVIEW IMG
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Member */}
          <div className="rounded-2xl border border-[#e5e8eb] bg-white">
            <div className="border-b border-[#f0f1f3] px-6 py-5">
              <h2 className="font-bold text-[#191f28]">
                작성자 정보
              </h2>
            </div>

            <div className="p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f2f4f6] text-lg font-bold text-[#6b7684]">
                  김
                </div>

                <div>
                  <p className="font-semibold text-[#333d4b]">
                    김민수
                  </p>

                  <p className="mt-1 text-xs text-[#8b95a1]">
                    VIP 회원
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-4 border-t border-[#f0f1f3] pt-5">
                <InfoRow
                  label="회원번호"
                  value="MEM-00001"
                />

                <InfoRow
                  label="이메일"
                  value="minsu@example.com"
                />

                <InfoRow
                  label="연락처"
                  value="010-1234-5678"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Product */}
        <div className="mt-6 rounded-2xl border border-[#e5e8eb] bg-white">
          <div className="border-b border-[#f0f1f3] px-6 py-5">
            <h2 className="font-bold text-[#191f28]">
              상품 정보
            </h2>
          </div>

          <div className="flex items-center gap-5 p-6">
            <div className="flex h-24 w-24 items-center justify-center rounded-xl bg-[#f2f4f6] text-xs text-[#8b95a1]">
              PRODUCT IMG
            </div>

            <div className="flex-1">
              <p className="font-semibold text-[#333d4b]">
                ESSUNO Oversized T-Shirt
              </p>

              <p className="mt-2 text-sm text-[#8b95a1]">
                Black / L
              </p>

              <p className="mt-2 text-sm text-[#6b7684]">
                판매가 39,000원
              </p>
            </div>

            <button
              type="button"
              onClick={() => navigate('/products/1')}
              className="rounded-lg border border-[#e5e8eb] px-4 py-2 text-sm font-semibold text-[#4e5968] hover:bg-[#f7f8fa]"
            >
              상품 보기
            </button>
          </div>
        </div>

        {/* Order */}
        <div className="mt-6 rounded-2xl border border-[#e5e8eb] bg-white">
          <div className="border-b border-[#f0f1f3] px-6 py-5">
            <h2 className="font-bold text-[#191f28]">
              주문 정보
            </h2>
          </div>

          <div className="grid grid-cols-3 gap-6 p-6">
            <InfoRow
              label="주문번호"
              value="ORD-20260825-001"
            />

            <InfoRow
              label="주문일"
              value="2026.08.25"
            />

            <InfoRow
              label="주문상태"
              value="배송완료"
            />
          </div>
        </div>

        {/* Admin */}
        <div className="mt-6 rounded-2xl border border-[#e5e8eb] bg-white">
          <div className="border-b border-[#f0f1f3] px-6 py-5">
            <h2 className="font-bold text-[#191f28]">
              리뷰 관리
            </h2>
          </div>

          <div className="p-6">
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#4e5968]">
                리뷰 상태
              </label>

              <select className="h-11 w-48 rounded-lg border border-[#e5e8eb] bg-white px-3 text-sm text-[#4e5968] outline-none focus:border-[#3182f6]">
                <option>공개</option>
                <option>숨김</option>
              </select>
            </div>

            <div className="mt-6">
              <label className="mb-2 block text-sm font-semibold text-[#4e5968]">
                관리자 메모
              </label>

              <textarea
                rows={4}
                placeholder="리뷰 관련 관리자 메모를 입력해주세요."
                className="w-full resize-none rounded-lg border border-[#e5e8eb] p-4 text-sm outline-none placeholder:text-[#b0b8c1] focus:border-[#3182f6]"
              />
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-6 flex justify-between">
          <button
            type="button"
            className="rounded-xl border border-[#f04452] px-5 py-3 text-sm font-semibold text-[#f04452] hover:bg-[#fff0f0]"
          >
            리뷰 삭제
          </button>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => navigate('/reviews')}
              className="rounded-xl border border-[#e5e8eb] bg-white px-5 py-3 text-sm font-semibold text-[#4e5968] hover:bg-[#f7f8fa]"
            >
              취소
            </button>

            <button
              type="button"
              className="rounded-xl bg-[#191f28] px-6 py-3 text-sm font-semibold text-white hover:bg-[#333d4b]"
            >
              저장
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

const InfoRow = ({
  label,
  value,
}: {
  label: string
  value: string
}) => {
  return (
    <div className="flex">
      <span className="w-24 shrink-0 text-sm text-[#8b95a1]">
        {label}
      </span>

      <span className="text-sm font-medium text-[#333d4b]">
        {value}
      </span>
    </div>
  )
}

export default ReviewDetailPage