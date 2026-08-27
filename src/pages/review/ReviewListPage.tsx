import MainLayout from '../../components/layout/MainLayout'

interface Review {
  id: number
  product: string
  member: string
  rating: number
  content: string
  status: '공개' | '숨김'
  createdAt: string
}

const reviews: Review[] = [
  {
    id: 1,
    product: 'ESSUNO Oversized T-Shirt',
    member: '김민수',
    rating: 5,
    content: '핏도 좋고 재질도 생각보다 좋아요. 데일리로 입기 좋습니다.',
    status: '공개',
    createdAt: '2026.08.25',
  },
  {
    id: 2,
    product: 'ESSUNO Wide Denim',
    member: '이서연',
    rating: 4,
    content: '핏이 예쁘게 떨어져요. 다만 허리가 조금 크게 나왔습니다.',
    status: '공개',
    createdAt: '2026.08.25',
  },
  {
    id: 3,
    product: 'ESSUNO Basic Hoodie',
    member: '박지훈',
    rating: 5,
    content: '두께감도 적당하고 핏이 마음에 듭니다.',
    status: '공개',
    createdAt: '2026.08.24',
  },
  {
    id: 4,
    product: 'ESSUNO Nylon Jacket',
    member: '최유진',
    rating: 3,
    content: '디자인은 마음에 드는데 생각보다 얇네요.',
    status: '공개',
    createdAt: '2026.08.24',
  },
  {
    id: 5,
    product: 'ESSUNO Cargo Pants',
    member: '정현우',
    rating: 2,
    content: '배송은 빨랐는데 상품에 실밥이 조금 있습니다.',
    status: '숨김',
    createdAt: '2026.08.23',
  },
  {
    id: 6,
    product: 'ESSUNO Logo Cap',
    member: '강지민',
    rating: 5,
    content: '깔끔하고 어디에나 잘 어울려요.',
    status: '공개',
    createdAt: '2026.08.22',
  },
  {
    id: 7,
    product: 'ESSUNO Oversized T-Shirt',
    member: '윤도현',
    rating: 4,
    content: '색감이 예쁘고 사이즈도 만족스럽습니다.',
    status: '공개',
    createdAt: '2026.08.21',
  },
]

const ReviewListPage = () => {
  return (
    <MainLayout>
      <div className="p-8">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-[#191f28]">
            리뷰 관리
          </h1>

          <p className="mt-2 text-sm text-[#8b95a1]">
            고객이 작성한 리뷰를 관리할 수 있습니다.
          </p>
        </div>

        {/* Summary */}
        <div className="mt-8 grid grid-cols-4 gap-5">
          <SummaryCard
            title="전체 리뷰"
            value="8,421"
            unit="개"
          />

          <SummaryCard
            title="오늘 작성"
            value="38"
            unit="개"
          />

          <SummaryCard
            title="평균 평점"
            value="4.6"
            unit="점"
          />

          <SummaryCard
            title="숨김 리뷰"
            value="24"
            unit="개"
          />
        </div>

        {/* Search / Filter */}
        <div className="mt-6 rounded-2xl border border-[#e5e8eb] bg-white p-5">
          <div className="flex gap-3">
            <select className="h-11 rounded-lg border border-[#e5e8eb] bg-white px-3 text-sm text-[#4e5968] outline-none focus:border-[#3182f6]">
              <option>전체</option>
              <option>상품명</option>
              <option>회원명</option>
              <option>리뷰 내용</option>
            </select>

            <div className="flex flex-1">
              <input
                type="text"
                placeholder="상품명, 회원명 또는 리뷰 내용을 검색해주세요."
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
              평점
            </span>

            {['전체', '5점', '4점', '3점', '2점', '1점'].map(
              (rating, index) => (
                <button
                  key={rating}
                  className={`rounded-lg px-4 py-2 text-sm ${
                    index === 0
                      ? 'bg-[#191f28] font-semibold text-white'
                      : 'border border-[#e5e8eb] text-[#6b7684]'
                  }`}
                >
                  {rating}
                </button>
              ),
            )}
          </div>

          <div className="mt-4 flex items-center gap-3">
            <span className="text-sm font-semibold text-[#4e5968]">
              상태
            </span>

            {['전체', '공개', '숨김'].map((status, index) => (
              <button
                key={status}
                className={`rounded-lg px-4 py-2 text-sm ${
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

        {/* Review Table */}
        <div className="mt-5 overflow-hidden rounded-2xl border border-[#e5e8eb] bg-white">
          <div className="flex items-center justify-between border-b border-[#f0f1f3] px-6 py-4">
            <p className="text-sm font-semibold text-[#333d4b]">
              전체 리뷰{' '}
              <span className="text-[#3182f6]">8,421</span>
            </p>

            <select className="rounded-lg border border-[#e5e8eb] px-3 py-2 text-sm text-[#6b7684] outline-none">
              <option>최신순</option>
              <option>오래된순</option>
              <option>평점 높은순</option>
              <option>평점 낮은순</option>
            </select>
          </div>

          <table className="w-full text-sm">
            <thead className="bg-[#fafbfc]">
              <tr className="border-b border-[#e5e8eb] text-left text-xs font-semibold text-[#8b95a1]">
                <th className="w-14 px-6 py-4">
                  <input type="checkbox" />
                </th>

                <th className="px-4 py-4">
                  상품
                </th>

                <th className="px-4 py-4">
                  작성자
                </th>

                <th className="px-4 py-4">
                  평점
                </th>

                <th className="px-4 py-4">
                  리뷰 내용
                </th>

                <th className="px-4 py-4">
                  상태
                </th>

                <th className="px-6 py-4">
                  작성일
                </th>
              </tr>
            </thead>

            <tbody>
              {reviews.map((review) => (
                <tr
                  key={review.id}
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
                    <p className="font-medium text-[#333d4b]">
                      {review.product}
                    </p>
                  </td>

                  <td className="px-4 py-5 text-[#6b7684]">
                    {review.member}
                  </td>

                  <td className="px-4 py-5">
                    <div className="flex items-center gap-2">
                      <span className="text-[#f59f00]">
                        {'★'.repeat(review.rating)}
                        <span className="text-[#e5e7eb]">
                          {'★'.repeat(5 - review.rating)}
                        </span>
                      </span>

                      <span className="font-semibold text-[#333d4b]">
                        {review.rating}.0
                      </span>
                    </div>
                  </td>

                  <td className="max-w-[420px] px-4 py-5">
                    <p className="truncate text-[#6b7684]">
                      {review.content}
                    </p>
                  </td>

                  <td className="px-4 py-5">
                    <ReviewStatus status={review.status} />
                  </td>

                  <td className="whitespace-nowrap px-6 py-5 text-[#8b95a1]">
                    {review.createdAt}
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

const ReviewStatus = ({
  status,
}: {
  status: Review['status']
}) => {
  const styles: Record<Review['status'], string> = {
    공개: 'bg-[#e8f7ee] text-[#20a464]',
    숨김: 'bg-[#f2f4f6] text-[#6b7684]',
  }

  return (
    <span
      className={`inline-flex rounded-md px-2.5 py-1 text-xs font-semibold ${styles[status]}`}
    >
      {status}
    </span>
  )
}

export default ReviewListPage