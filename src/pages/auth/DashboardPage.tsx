import MainLayout from '../../components/layout/MainLayout'

const DashboardPage = () => {
  return (
    <MainLayout>
      <div className="p-8">
        <h1 className="text-2xl font-bold text-[#191f28]">
          대시보드
        </h1>

        <p className="mt-2 text-sm text-[#8b95a1]">
          ESSUNO 쇼핑몰의 주요 현황을 확인하세요.
        </p>

        {/* 통계 카드 */}
        <div className="mt-8 grid grid-cols-4 gap-5">
          <div className="rounded-2xl border border-[#e5e8eb] bg-white p-6">
            <p className="text-sm text-[#8b95a1]">오늘 매출</p>
            <p className="mt-3 text-2xl font-bold text-[#191f28]">
              ₩2,450,000
            </p>
          </div>

          <div className="rounded-2xl border border-[#e5e8eb] bg-white p-6">
            <p className="text-sm text-[#8b95a1]">오늘 주문</p>
            <p className="mt-3 text-2xl font-bold text-[#191f28]">
              128건
            </p>
          </div>

          <div className="rounded-2xl border border-[#e5e8eb] bg-white p-6">
            <p className="text-sm text-[#8b95a1]">신규 회원</p>
            <p className="mt-3 text-2xl font-bold text-[#191f28]">
              42명
            </p>
          </div>

          <div className="rounded-2xl border border-[#e5e8eb] bg-white p-6">
            <p className="text-sm text-[#8b95a1]">상품</p>
            <p className="mt-3 text-2xl font-bold text-[#191f28]">
              1,284개
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default DashboardPage