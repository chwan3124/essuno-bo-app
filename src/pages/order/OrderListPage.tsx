import MainLayout from '../../components/layout/MainLayout'

interface Order {
  id: string
  customer: string
  product: string
  amount: number
  payment: string
  status: '결제완료' | '상품준비중' | '배송중' | '배송완료' | '주문취소'
  orderedAt: string
}

const orders: Order[] = [
  {
    id: 'ORD-20260825-001',
    customer: '김민수',
    product: 'ESSUNO Oversized T-Shirt 외 1건',
    amount: 89000,
    payment: '카드',
    status: '결제완료',
    orderedAt: '2026.08.25 21:42',
  },
  {
    id: 'ORD-20260825-002',
    customer: '이서연',
    product: 'ESSUNO Wide Denim',
    amount: 79000,
    payment: '카드',
    status: '상품준비중',
    orderedAt: '2026.08.25 20:18',
  },
  {
    id: 'ORD-20260825-003',
    customer: '박지훈',
    product: 'ESSUNO Basic Hoodie',
    amount: 69000,
    payment: '카카오페이',
    status: '배송중',
    orderedAt: '2026.08.25 18:31',
  },
  {
    id: 'ORD-20260825-004',
    customer: '최유진',
    product: 'ESSUNO Nylon Jacket',
    amount: 129000,
    payment: '카드',
    status: '배송완료',
    orderedAt: '2026.08.25 16:20',
  },
  {
    id: 'ORD-20260825-005',
    customer: '정현우',
    product: 'ESSUNO Cargo Pants',
    amount: 89000,
    payment: '네이버페이',
    status: '주문취소',
    orderedAt: '2026.08.25 14:05',
  },
  {
    id: 'ORD-20260824-006',
    customer: '강지민',
    product: 'ESSUNO Logo Cap 외 2건',
    amount: 118000,
    payment: '카드',
    status: '배송완료',
    orderedAt: '2026.08.24 22:11',
  },
  {
    id: 'ORD-20260824-007',
    customer: '윤도현',
    product: 'ESSUNO Oversized T-Shirt',
    amount: 39000,
    payment: '카카오페이',
    status: '배송중',
    orderedAt: '2026.08.24 19:43',
  },
]

const OrderListPage = () => {
  return (
    <MainLayout>
      <div className="p-8">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-[#191f28]">
            주문 관리
          </h1>

          <p className="mt-2 text-sm text-[#8b95a1]">
            고객의 주문 내역과 배송 상태를 관리할 수 있습니다.
          </p>
        </div>

        {/* Summary */}
        <div className="mt-8 grid grid-cols-4 gap-5">
          <SummaryCard
            title="전체 주문"
            value="1,284"
            unit="건"
          />

          <SummaryCard
            title="결제완료"
            value="128"
            unit="건"
          />

          <SummaryCard
            title="상품준비중"
            value="42"
            unit="건"
          />

          <SummaryCard
            title="배송중"
            value="67"
            unit="건"
          />
        </div>

        {/* Search */}
        <div className="mt-6 rounded-2xl border border-[#e5e8eb] bg-white p-5">
          <div className="flex items-center gap-3">
            <select className="h-11 rounded-lg border border-[#e5e8eb] bg-white px-3 text-sm text-[#4e5968] outline-none focus:border-[#3182f6]">
              <option>주문번호</option>
              <option>주문자명</option>
              <option>상품명</option>
            </select>

            <div className="flex flex-1">
              <input
                type="text"
                placeholder="검색어를 입력해주세요."
                className="h-11 w-full rounded-l-lg border border-r-0 border-[#e5e8eb] px-4 text-sm outline-none placeholder:text-[#b0b8c1] focus:border-[#3182f6]"
              />

              <button
                type="button"
                className="rounded-r-lg bg-[#191f28] px-6 text-sm font-semibold text-white"
              >
                검색
              </button>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-3">
            <span className="text-sm font-semibold text-[#4e5968]">
              주문일
            </span>

            <button className="rounded-lg bg-[#f2f4f6] px-4 py-2 text-sm text-[#333d4b]">
              오늘
            </button>

            <button className="rounded-lg border border-[#e5e8eb] px-4 py-2 text-sm text-[#6b7684]">
              7일
            </button>

            <button className="rounded-lg border border-[#e5e8eb] px-4 py-2 text-sm text-[#6b7684]">
              30일
            </button>

            <input
              type="date"
              className="h-9 rounded-lg border border-[#e5e8eb] px-3 text-sm text-[#6b7684] outline-none"
            />

            <span className="text-[#b0b8c1]">~</span>

            <input
              type="date"
              className="h-9 rounded-lg border border-[#e5e8eb] px-3 text-sm text-[#6b7684] outline-none"
            />
          </div>

          <div className="mt-4 flex items-center gap-3">
            <span className="text-sm font-semibold text-[#4e5968]">
              주문 상태
            </span>

            {[
              '전체',
              '결제완료',
              '상품준비중',
              '배송중',
              '배송완료',
              '주문취소',
            ].map((status, index) => (
              <button
                key={status}
                className={`rounded-lg px-3 py-2 text-sm ${
                  index === 0
                    ? 'bg-[#191f28] font-semibold text-white'
                    : 'border border-[#e5e8eb] text-[#6b7684]'
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        {/* Order Table */}
        <div className="mt-5 overflow-hidden rounded-2xl border border-[#e5e8eb] bg-white">
          <div className="flex items-center justify-between border-b border-[#f0f1f3] px-6 py-4">
            <p className="text-sm font-semibold text-[#333d4b]">
              전체 주문{' '}
              <span className="text-[#3182f6]">
                {orders.length}
              </span>
            </p>

            <select className="rounded-lg border border-[#e5e8eb] px-3 py-2 text-sm text-[#6b7684] outline-none">
              <option>최신순</option>
              <option>오래된순</option>
              <option>금액 높은순</option>
              <option>금액 낮은순</option>
            </select>
          </div>

          <table className="w-full text-sm">
            <thead className="bg-[#fafbfc]">
              <tr className="border-b border-[#e5e8eb] text-left text-xs font-semibold text-[#8b95a1]">
                <th className="w-14 px-6 py-4">
                  <input type="checkbox" />
                </th>

                <th className="px-4 py-4">
                  주문번호
                </th>

                <th className="px-4 py-4">
                  주문자
                </th>

                <th className="px-4 py-4">
                  상품
                </th>

                <th className="px-4 py-4">
                  결제금액
                </th>

                <th className="px-4 py-4">
                  결제수단
                </th>

                <th className="px-4 py-4">
                  주문상태
                </th>

                <th className="px-6 py-4">
                  주문일
                </th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order) => (
                <tr
                  key={order.id}
                  className="cursor-pointer border-b border-[#f0f1f3] last:border-0 hover:bg-[#fafbfc]"
                >
                  <td className="px-6 py-5">
                    <input
                      type="checkbox"
                      onClick={(event) => event.stopPropagation()}
                    />
                  </td>

                  <td className="px-4 py-5 font-medium text-[#333d4b]">
                    {order.id}
                  </td>

                  <td className="px-4 py-5">
                    <p className="font-medium text-[#333d4b]">
                      {order.customer}
                    </p>
                  </td>

                  <td className="max-w-[280px] px-4 py-5">
                    <p className="truncate text-[#4e5968]">
                      {order.product}
                    </p>
                  </td>

                  <td className="px-4 py-5 font-semibold text-[#191f28]">
                    {order.amount.toLocaleString()}원
                  </td>

                  <td className="px-4 py-5 text-[#6b7684]">
                    {order.payment}
                  </td>

                  <td className="px-4 py-5">
                    <OrderStatus status={order.status} />
                  </td>

                  <td className="whitespace-nowrap px-6 py-5 text-[#8b95a1]">
                    {order.orderedAt}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2 border-t border-[#f0f1f3] px-6 py-5">
            <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#191f28] text-xs font-semibold text-white">
              1
            </button>

            {[2, 3, 4, 5].map((page) => (
              <button
                key={page}
                className="flex h-8 w-8 items-center justify-center rounded-lg text-xs text-[#6b7684] hover:bg-[#f2f4f6]"
              >
                {page}
              </button>
            ))}

            <button className="ml-1 flex h-8 w-8 items-center justify-center rounded-lg text-xs text-[#6b7684] hover:bg-[#f2f4f6]">
              ›
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

const SummaryCard = ({
  title,
  value,
  unit,
}: {
  title: string
  value: string
  unit: string
}) => {
  return (
    <div className="rounded-2xl border border-[#e5e8eb] bg-white p-6">
      <p className="text-sm text-[#8b95a1]">
        {title}
      </p>

      <div className="mt-3 flex items-end gap-1">
        <p className="text-2xl font-bold text-[#191f28]">
          {value}
        </p>

        <span className="mb-0.5 text-sm text-[#6b7684]">
          {unit}
        </span>
      </div>
    </div>
  )
}

const OrderStatus = ({
  status,
}: {
  status: Order['status']
}) => {
  const styles: Record<Order['status'], string> = {
    결제완료: 'bg-[#e8f3ff] text-[#3182f6]',
    상품준비중: 'bg-[#fff7e6] text-[#f08c00]',
    배송중: 'bg-[#f0edff] text-[#7357d9]',
    배송완료: 'bg-[#e8f7ee] text-[#20a464]',
    주문취소: 'bg-[#fff0f0] text-[#f04452]',
  }

  return (
    <span
      className={`inline-flex rounded-md px-2.5 py-1 text-xs font-semibold ${styles[status]}`}
    >
      {status}
    </span>
  )
}

export default OrderListPage