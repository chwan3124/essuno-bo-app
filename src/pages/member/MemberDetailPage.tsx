import { useNavigate, useParams } from 'react-router-dom'
import MainLayout from '../../components/layout/MainLayout'

const MemberDetailPage = () => {
  const navigate = useNavigate()
  const { memberId } = useParams()

  return (
    <MainLayout>
      <div className="p-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <button
              type="button"
              onClick={() => navigate('/members')}
              className="mb-4 text-sm text-[#8b95a1] hover:text-[#191f28]"
            >
              ← 회원 목록
            </button>

            <h1 className="text-2xl font-bold text-[#191f28]">
              회원 상세
            </h1>

            <p className="mt-2 text-sm text-[#8b95a1]">
              회원 정보와 주문 내역을 확인할 수 있습니다.
            </p>
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              className="rounded-xl border border-[#e5e8eb] bg-white px-5 py-3 text-sm font-semibold text-[#4e5968] hover:bg-[#f7f8fa]"
            >
              회원 정보 수정
            </button>

            <button
              type="button"
              className="rounded-xl bg-[#191f28] px-5 py-3 text-sm font-semibold text-white hover:bg-[#333d4b]"
            >
              저장
            </button>
          </div>
        </div>

        {/* Member Profile */}
        <div className="mt-8 grid grid-cols-3 gap-6">
          <div className="rounded-2xl border border-[#e5e8eb] bg-white p-6">
            <div className="flex items-center gap-5">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#f2f4f6] text-2xl font-bold text-[#6b7684]">
                김
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#191f28]">
                  김민수
                </h2>

                <p className="mt-1 text-sm text-[#8b95a1]">
                  minsu@example.com
                </p>

                <span className="mt-3 inline-flex rounded-md bg-[#f0edff] px-2.5 py-1 text-xs font-semibold text-[#7357d9]">
                  VIP
                </span>
              </div>
            </div>

            <div className="mt-6 border-t border-[#f0f1f3] pt-5">
              <div className="flex justify-between">
                <span className="text-sm text-[#8b95a1]">
                  회원 상태
                </span>

                <span className="rounded-md bg-[#e8f7ee] px-2.5 py-1 text-xs font-semibold text-[#20a464]">
                  정상
                </span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-[#e5e8eb] bg-white p-6">
            <p className="text-sm text-[#8b95a1]">
              총 주문
            </p>

            <p className="mt-3 text-3xl font-bold text-[#191f28]">
              24
              <span className="ml-1 text-sm font-normal text-[#6b7684]">
                건
              </span>
            </p>

            <p className="mt-2 text-xs text-[#8b95a1]">
              최근 주문 2026.08.25
            </p>
          </div>

          <div className="rounded-2xl border border-[#e5e8eb] bg-white p-6">
            <p className="text-sm text-[#8b95a1]">
              누적 구매금액
            </p>

            <p className="mt-3 text-3xl font-bold text-[#191f28]">
              1,840,000
              <span className="ml-1 text-sm font-normal text-[#6b7684]">
                원
              </span>
            </p>

            <p className="mt-2 text-xs text-[#8b95a1]">
              평균 주문금액 76,667원
            </p>
          </div>
        </div>

        {/* Basic Information */}
        <div className="mt-6 rounded-2xl border border-[#e5e8eb] bg-white">
          <div className="border-b border-[#f0f1f3] px-6 py-5">
            <h2 className="font-bold text-[#191f28]">
              기본 정보
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-x-12 gap-y-6 p-6">
            <InfoRow
              label="회원번호"
              value={`MEM-${memberId ?? '00001'}`}
            />

            <InfoRow
              label="가입일"
              value="2026.01.12"
            />

            <InfoRow
              label="이름"
              value="김민수"
            />

            <InfoRow
              label="이메일"
              value="minsu@example.com"
            />

            <InfoRow
              label="연락처"
              value="010-1234-5678"
            />

            <InfoRow
              label="회원등급"
              value="VIP"
            />
          </div>
        </div>

        {/* Address */}
        <div className="mt-6 rounded-2xl border border-[#e5e8eb] bg-white">
          <div className="border-b border-[#f0f1f3] px-6 py-5">
            <h2 className="font-bold text-[#191f28]">
              배송지 정보
            </h2>
          </div>

          <div className="p-6">
            <div className="rounded-xl bg-[#fafbfc] p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-[#333d4b]">
                    기본 배송지
                  </p>

                  <p className="mt-2 text-sm text-[#6b7684]">
                    김민수 · 010-1234-5678
                  </p>

                  <p className="mt-1 text-sm text-[#6b7684]">
                    (13561) 경기도 성남시 분당구 정자동
                  </p>

                  <p className="mt-1 text-sm text-[#6b7684]">
                    123동 456호
                  </p>
                </div>

                <span className="rounded-md bg-[#e8f3ff] px-2.5 py-1 text-xs font-semibold text-[#3182f6]">
                  기본
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Order History */}
        <div className="mt-6 overflow-hidden rounded-2xl border border-[#e5e8eb] bg-white">
          <div className="flex items-center justify-between border-b border-[#f0f1f3] px-6 py-5">
            <div>
              <h2 className="font-bold text-[#191f28]">
                주문 내역
              </h2>

              <p className="mt-1 text-sm text-[#8b95a1]">
                최근 주문 내역입니다.
              </p>
            </div>

            <button
              type="button"
              onClick={() => navigate('/orders')}
              className="text-sm font-semibold text-[#3182f6]"
            >
              전체보기
            </button>
          </div>

          <table className="w-full text-sm">
            <thead className="bg-[#fafbfc]">
              <tr className="border-b border-[#e5e8eb] text-left text-xs font-semibold text-[#8b95a1]">
                <th className="px-6 py-4">
                  주문번호
                </th>

                <th className="px-4 py-4">
                  상품
                </th>

                <th className="px-4 py-4">
                  결제금액
                </th>

                <th className="px-4 py-4">
                  상태
                </th>

                <th className="px-6 py-4">
                  주문일
                </th>
              </tr>
            </thead>

            <tbody>
              <OrderRow
                id="ORD-20260825-001"
                product="ESSUNO Oversized T-Shirt 외 1건"
                amount="89,000원"
                status="결제완료"
                date="2026.08.25"
              />

              <OrderRow
                id="ORD-20260820-034"
                product="ESSUNO Wide Denim"
                amount="79,000원"
                status="배송완료"
                date="2026.08.20"
              />

              <OrderRow
                id="ORD-20260812-091"
                product="ESSUNO Nylon Jacket"
                amount="129,000원"
                status="배송완료"
                date="2026.08.12"
              />

              <OrderRow
                id="ORD-20260801-122"
                product="ESSUNO Logo Cap"
                amount="29,000원"
                status="배송완료"
                date="2026.08.01"
              />
            </tbody>
          </table>
        </div>

        {/* Bottom */}
        <div className="mt-6 flex justify-between">
          <button
            type="button"
            className="rounded-xl border border-[#f04452] px-5 py-3 text-sm font-semibold text-[#f04452] hover:bg-[#fff0f0]"
          >
            회원 정지
          </button>

          <button
            type="button"
            onClick={() => navigate('/members')}
            className="rounded-xl bg-[#191f28] px-6 py-3 text-sm font-semibold text-white hover:bg-[#333d4b]"
          >
            목록으로
          </button>
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

const OrderRow = ({
  id,
  product,
  amount,
  status,
  date,
}: {
  id: string
  product: string
  amount: string
  status: string
  date: string
}) => {
  return (
    <tr className="border-b border-[#f0f1f3] last:border-0 hover:bg-[#fafbfc]">
      <td className="px-6 py-5 font-medium text-[#333d4b]">
        {id}
      </td>

      <td className="px-4 py-5 text-[#6b7684]">
        {product}
      </td>

      <td className="px-4 py-5 font-semibold text-[#333d4b]">
        {amount}
      </td>

      <td className="px-4 py-5">
        <span
          className={`inline-flex rounded-md px-2.5 py-1 text-xs font-semibold ${
            status === '결제완료'
              ? 'bg-[#e8f3ff] text-[#3182f6]'
              : 'bg-[#e8f7ee] text-[#20a464]'
          }`}
        >
          {status}
        </span>
      </td>

      <td className="px-6 py-5 text-[#8b95a1]">
        {date}
      </td>
    </tr>
  )
}

export default MemberDetailPage