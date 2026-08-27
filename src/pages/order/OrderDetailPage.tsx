import { useNavigate, useParams } from 'react-router-dom'
import MainLayout from '../../components/layout/MainLayout'

const OrderDetailPage = () => {
  const navigate = useNavigate()
  const { orderId } = useParams()

  return (
    <MainLayout>
      <div className="p-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <button
              type="button"
              onClick={() => navigate('/orders')}
              className="mb-4 text-sm text-[#8b95a1] hover:text-[#191f28]"
            >
              ← 주문 목록
            </button>

            <h1 className="text-2xl font-bold text-[#191f28]">
              주문 상세
            </h1>

            <p className="mt-2 text-sm text-[#8b95a1]">
              주문 정보를 확인하고 배송 상태를 관리할 수 있습니다.
            </p>
          </div>

          <button
            type="button"
            onClick={() => navigate('/orders')}
            className="rounded-xl border border-[#e5e8eb] bg-white px-5 py-3 text-sm font-semibold text-[#4e5968] hover:bg-[#f7f8fa]"
          >
            목록으로
          </button>
        </div>

        {/* Order Status */}
        <div className="mt-8 rounded-2xl border border-[#e5e8eb] bg-white p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-[#8b95a1]">
                주문번호
              </p>

              <p className="mt-2 text-lg font-bold text-[#191f28]">
                {orderId ?? 'ORD-20260825-001'}
              </p>
            </div>

            <span className="rounded-lg bg-[#e8f3ff] px-3 py-2 text-sm font-semibold text-[#3182f6]">
              결제완료
            </span>
          </div>

          {/* Progress */}
          <div className="mt-8 flex items-center">
            <OrderStep
              title="주문접수"
              active
            />

            <div className="h-px flex-1 bg-[#3182f6]" />

            <OrderStep
              title="결제완료"
              active
            />

            <div className="h-px flex-1 bg-[#e5e8eb]" />

            <OrderStep title="상품준비" />

            <div className="h-px flex-1 bg-[#e5e8eb]" />

            <OrderStep title="배송중" />

            <div className="h-px flex-1 bg-[#e5e8eb]" />

            <OrderStep title="배송완료" />
          </div>
        </div>

        {/* Main Content */}
        <div className="mt-6 grid grid-cols-3 gap-6">
          {/* Order Products */}
          <div className="col-span-2 rounded-2xl border border-[#e5e8eb] bg-white">
            <div className="border-b border-[#f0f1f3] px-6 py-5">
              <h2 className="font-bold text-[#191f28]">
                주문 상품
              </h2>

              <p className="mt-1 text-sm text-[#8b95a1]">
                총 2개 상품
              </p>
            </div>

            <div className="divide-y divide-[#f0f1f3]">
              <ProductItem
                name="ESSUNO Oversized T-Shirt"
                option="Black / L"
                quantity={1}
                price={39000}
              />

              <ProductItem
                name="ESSUNO Wide Denim"
                option="Blue / M"
                quantity={1}
                price={79000}
              />
            </div>

            {/* Price */}
            <div className="border-t border-[#e5e8eb] px-6 py-5">
              <div className="space-y-3 text-sm">
                <PriceRow
                  label="상품 금액"
                  value="118,000원"
                />

                <PriceRow
                  label="배송비"
                  value="3,000원"
                />

                <PriceRow
                  label="할인 금액"
                  value="-32,000원"
                />

                <div className="my-4 border-t border-[#f0f1f3]" />

                <PriceRow
                  label="최종 결제금액"
                  value="89,000원"
                  bold
                />
              </div>
            </div>
          </div>

          {/* Customer */}
          <div className="rounded-2xl border border-[#e5e8eb] bg-white">
            <div className="border-b border-[#f0f1f3] px-6 py-5">
              <h2 className="font-bold text-[#191f28]">
                주문자 정보
              </h2>
            </div>

            <div className="space-y-5 p-6">
              <InfoRow
                label="주문자"
                value="김민수"
              />

              <InfoRow
                label="연락처"
                value="010-1234-5678"
              />

              <InfoRow
                label="이메일"
                value="minsu@example.com"
              />
            </div>
          </div>
        </div>

        {/* Delivery */}
        <div className="mt-6 rounded-2xl border border-[#e5e8eb] bg-white">
          <div className="border-b border-[#f0f1f3] px-6 py-5">
            <h2 className="font-bold text-[#191f28]">
              배송 정보
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-8 p-6">
            <div className="space-y-5">
              <InfoRow
                label="받는 사람"
                value="김민수"
              />

              <InfoRow
                label="연락처"
                value="010-1234-5678"
              />

              <InfoRow
                label="우편번호"
                value="13561"
              />

              <InfoRow
                label="주소"
                value="경기도 성남시 분당구 정자동"
              />
            </div>

            <div className="space-y-5">
              <InfoRow
                label="상세주소"
                value="123동 456호"
              />

              <InfoRow
                label="배송 요청사항"
                value="문 앞에 놓아주세요."
              />

              <InfoRow
                label="택배사"
                value="CJ대한통운"
              />

              <InfoRow
                label="운송장번호"
                value="123456789012"
              />
            </div>
          </div>
        </div>

        {/* Payment */}
        <div className="mt-6 rounded-2xl border border-[#e5e8eb] bg-white">
          <div className="border-b border-[#f0f1f3] px-6 py-5">
            <h2 className="font-bold text-[#191f28]">
              결제 정보
            </h2>
          </div>

          <div className="grid grid-cols-3 gap-6 p-6">
            <InfoRow
              label="결제수단"
              value="신용카드"
            />

            <InfoRow
              label="결제일시"
              value="2026.08.25 21:42"
            />

            <InfoRow
              label="결제금액"
              value="89,000원"
            />
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="mt-6 flex justify-between">
          <button
            type="button"
            className="rounded-xl border border-[#f04452] px-5 py-3 text-sm font-semibold text-[#f04452] hover:bg-[#fff0f0]"
          >
            주문 취소
          </button>

          <div className="flex gap-2">
            <button
              type="button"
              className="rounded-xl border border-[#e5e8eb] bg-white px-5 py-3 text-sm font-semibold text-[#4e5968]"
            >
              송장 등록
            </button>

            <button
              type="button"
              className="rounded-xl bg-[#191f28] px-6 py-3 text-sm font-semibold text-white hover:bg-[#333d4b]"
            >
              배송 처리
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

const OrderStep = ({
  title,
  active = false,
}: {
  title: string
  active?: boolean
}) => {
  return (
    <div className="flex min-w-[90px] flex-col items-center gap-2">
      <div
        className={`flex h-8 w-8 items-center justify-center rounded-full ${
          active
            ? 'bg-[#191f28] text-white'
            : 'bg-[#f2f4f6] text-[#b0b8c1]'
        }`}
      >
        {active ? '✓' : ''}
      </div>

      <span
        className={`text-xs font-medium ${
          active ? 'text-[#191f28]' : 'text-[#8b95a1]'
        }`}
      >
        {title}
      </span>
    </div>
  )
}

const ProductItem = ({
  name,
  option,
  quantity,
  price,
}: {
  name: string
  option: string
  quantity: number
  price: number
}) => {
  return (
    <div className="flex items-center gap-5 px-6 py-5">
      <div className="flex h-20 w-20 items-center justify-center rounded-xl bg-[#f2f4f6] text-xs text-[#8b95a1]">
        IMG
      </div>

      <div className="flex-1">
        <p className="font-semibold text-[#333d4b]">
          {name}
        </p>

        <p className="mt-1 text-sm text-[#8b95a1]">
          {option}
        </p>

        <p className="mt-2 text-xs text-[#8b95a1]">
          수량 {quantity}개
        </p>
      </div>

      <p className="font-semibold text-[#191f28]">
        {price.toLocaleString()}원
      </p>
    </div>
  )
}

const PriceRow = ({
  label,
  value,
  bold = false,
}: {
  label: string
  value: string
  bold?: boolean
}) => {
  return (
    <div className="flex items-center justify-between">
      <span
        className={
          bold
            ? 'font-bold text-[#191f28]'
            : 'text-[#8b95a1]'
        }
      >
        {label}
      </span>

      <span
        className={
          bold
            ? 'text-lg font-bold text-[#191f28]'
            : 'font-medium text-[#333d4b]'
        }
      >
        {value}
      </span>
    </div>
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

export default OrderDetailPage