import MainLayout from '../../components/layout/MainLayout'

interface Member {
  id: number
  name: string
  email: string
  phone: string
  grade: '일반' | '실버' | '골드' | 'VIP'
  status: '정상' | '정지'
  orders: number
  totalPurchase: number
  joinedAt: string
}

const members: Member[] = [
  {
    id: 1,
    name: '김민수',
    email: 'minsu@example.com',
    phone: '010-1234-5678',
    grade: 'VIP',
    status: '정상',
    orders: 24,
    totalPurchase: 1840000,
    joinedAt: '2026.01.12',
  },
  {
    id: 2,
    name: '이서연',
    email: 'seoyeon@example.com',
    phone: '010-2345-6789',
    grade: '골드',
    status: '정상',
    orders: 17,
    totalPurchase: 920000,
    joinedAt: '2026.02.03',
  },
  {
    id: 3,
    name: '박지훈',
    email: 'jihoon@example.com',
    phone: '010-3456-7890',
    grade: '실버',
    status: '정상',
    orders: 8,
    totalPurchase: 420000,
    joinedAt: '2026.03.18',
  },
  {
    id: 4,
    name: '최유진',
    email: 'yujin@example.com',
    phone: '010-4567-8901',
    grade: '골드',
    status: '정상',
    orders: 13,
    totalPurchase: 780000,
    joinedAt: '2026.04.02',
  },
  {
    id: 5,
    name: '정현우',
    email: 'hyunwoo@example.com',
    phone: '010-5678-9012',
    grade: '일반',
    status: '정상',
    orders: 3,
    totalPurchase: 156000,
    joinedAt: '2026.05.21',
  },
  {
    id: 6,
    name: '강지민',
    email: 'jimin@example.com',
    phone: '010-6789-0123',
    grade: 'VIP',
    status: '정상',
    orders: 31,
    totalPurchase: 2430000,
    joinedAt: '2025.12.10',
  },
  {
    id: 7,
    name: '윤도현',
    email: 'dohyun@example.com',
    phone: '010-7890-1234',
    grade: '일반',
    status: '정지',
    orders: 2,
    totalPurchase: 89000,
    joinedAt: '2026.06.11',
  },
]

const MemberListPage = () => {
  return (
    <MainLayout>
      <div className="p-8">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-[#191f28]">
            회원 관리
          </h1>

          <p className="mt-2 text-sm text-[#8b95a1]">
            ESSUNO 회원 정보를 관리할 수 있습니다.
          </p>
        </div>

        {/* Summary */}
        <div className="mt-8 grid grid-cols-4 gap-5">
          <SummaryCard
            title="전체 회원"
            value="12,842"
            unit="명"
          />

          <SummaryCard
            title="오늘 가입"
            value="42"
            unit="명"
          />

          <SummaryCard
            title="VIP 회원"
            value="328"
            unit="명"
          />

          <SummaryCard
            title="정지 회원"
            value="12"
            unit="명"
          />
        </div>

        {/* Search */}
        <div className="mt-6 rounded-2xl border border-[#e5e8eb] bg-white p-5">
          <div className="flex gap-3">
            <select className="h-11 rounded-lg border border-[#e5e8eb] bg-white px-3 text-sm text-[#4e5968] outline-none focus:border-[#3182f6]">
              <option>전체</option>
              <option>회원명</option>
              <option>이메일</option>
              <option>전화번호</option>
              <option>회원번호</option>
            </select>

            <div className="flex flex-1">
              <input
                type="text"
                placeholder="회원명, 이메일, 전화번호를 검색해주세요."
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
              회원 등급
            </span>

            {['전체', '일반', '실버', '골드', 'VIP'].map(
              (grade, index) => (
                <button
                  key={grade}
                  className={`rounded-lg px-4 py-2 text-sm ${
                    index === 0
                      ? 'bg-[#191f28] font-semibold text-white'
                      : 'border border-[#e5e8eb] text-[#6b7684]'
                  }`}
                >
                  {grade}
                </button>
              ),
            )}
          </div>
        </div>

        {/* Table */}
        <div className="mt-5 overflow-hidden rounded-2xl border border-[#e5e8eb] bg-white">
          <div className="flex items-center justify-between border-b border-[#f0f1f3] px-6 py-4">
            <p className="text-sm font-semibold text-[#333d4b]">
              전체 회원{' '}
              <span className="text-[#3182f6]">12,842</span>
            </p>

            <select className="rounded-lg border border-[#e5e8eb] px-3 py-2 text-sm text-[#6b7684] outline-none">
              <option>가입일 최신순</option>
              <option>가입일 오래된순</option>
              <option>구매금액 높은순</option>
              <option>주문 많은순</option>
            </select>
          </div>

          <table className="w-full text-sm">
            <thead className="bg-[#fafbfc]">
              <tr className="border-b border-[#e5e8eb] text-left text-xs font-semibold text-[#8b95a1]">
                <th className="w-14 px-6 py-4">
                  <input type="checkbox" />
                </th>

                <th className="px-4 py-4">
                  회원
                </th>

                <th className="px-4 py-4">
                  연락처
                </th>

                <th className="px-4 py-4">
                  등급
                </th>

                <th className="px-4 py-4">
                  주문
                </th>

                <th className="px-4 py-4">
                  누적 구매금액
                </th>

                <th className="px-4 py-4">
                  상태
                </th>

                <th className="px-6 py-4">
                  가입일
                </th>
              </tr>
            </thead>

            <tbody>
              {members.map((member) => (
                <tr
                  key={member.id}
                  className="cursor-pointer border-b border-[#f0f1f3] last:border-0 hover:bg-[#fafbfc]"
                >
                  <td className="px-6 py-5">
                    <input
                      type="checkbox"
                      onClick={(event) =>
                        event.stopPropagation()
                      }
                    />
                  </td>

                  <td className="px-4 py-5">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f2f4f6] text-sm font-semibold text-[#6b7684]">
                        {member.name.charAt(0)}
                      </div>

                      <div>
                        <p className="font-semibold text-[#333d4b]">
                          {member.name}
                        </p>

                        <p className="mt-1 text-xs text-[#8b95a1]">
                          {member.email}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-4 py-5 text-[#6b7684]">
                    {member.phone}
                  </td>

                  <td className="px-4 py-5">
                    <GradeBadge grade={member.grade} />
                  </td>

                  <td className="px-4 py-5 text-[#4e5968]">
                    {member.orders.toLocaleString()}건
                  </td>

                  <td className="px-4 py-5 font-medium text-[#333d4b]">
                    {member.totalPurchase.toLocaleString()}원
                  </td>

                  <td className="px-4 py-5">
                    <StatusBadge status={member.status} />
                  </td>

                  <td className="whitespace-nowrap px-6 py-5 text-[#8b95a1]">
                    {member.joinedAt}
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

const GradeBadge = ({
  grade,
}: {
  grade: Member['grade']
}) => {
  const styles: Record<Member['grade'], string> = {
    일반: 'bg-[#f2f4f6] text-[#6b7684]',
    실버: 'bg-[#f1f3f5] text-[#495057]',
    골드: 'bg-[#fff7e6] text-[#d48806]',
    VIP: 'bg-[#f0edff] text-[#7357d9]',
  }

  return (
    <span
      className={`inline-flex rounded-md px-2.5 py-1 text-xs font-semibold ${styles[grade]}`}
    >
      {grade}
    </span>
  )
}

const StatusBadge = ({
  status,
}: {
  status: Member['status']
}) => {
  const styles: Record<Member['status'], string> = {
    정상: 'bg-[#e8f7ee] text-[#20a464]',
    정지: 'bg-[#fff0f0] text-[#f04452]',
  }

  return (
    <span
      className={`inline-flex rounded-md px-2.5 py-1 text-xs font-semibold ${styles[status]}`}
    >
      {status}
    </span>
  )
}

export default MemberListPage