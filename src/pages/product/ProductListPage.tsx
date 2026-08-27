import MainLayout from '../../components/layout/MainLayout'

interface Product {
  id: number
  name: string
  category: string
  price: number
  stock: number
  status: '판매중' | '품절' | '판매중지'
  createdAt: string
}

const products: Product[] = [
  {
    id: 1,
    name: 'ESSUNO Oversized T-Shirt',
    category: '상의',
    price: 39000,
    stock: 128,
    status: '판매중',
    createdAt: '2026.08.25',
  },
  {
    id: 2,
    name: 'ESSUNO Wide Denim',
    category: '하의',
    price: 79000,
    stock: 54,
    status: '판매중',
    createdAt: '2026.08.24',
  },
  {
    id: 3,
    name: 'ESSUNO Basic Hoodie',
    category: '상의',
    price: 69000,
    stock: 0,
    status: '품절',
    createdAt: '2026.08.23',
  },
  {
    id: 4,
    name: 'ESSUNO Nylon Jacket',
    category: '아우터',
    price: 129000,
    stock: 32,
    status: '판매중',
    createdAt: '2026.08.22',
  },
  {
    id: 5,
    name: 'ESSUNO Cargo Pants',
    category: '하의',
    price: 89000,
    stock: 21,
    status: '판매중',
    createdAt: '2026.08.21',
  },
  {
    id: 6,
    name: 'ESSUNO Logo Cap',
    category: '잡화',
    price: 29000,
    stock: 0,
    status: '판매중지',
    createdAt: '2026.08.20',
  },
]

const ProductListPage = () => {
  return (
    <MainLayout>
      <div className="p-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-[#191f28]">
              상품 관리
            </h1>

            <p className="mt-2 text-sm text-[#8b95a1]">
              등록된 상품을 관리할 수 있습니다.
            </p>
          </div>

          <button
            type="button"
            className="rounded-xl bg-[#191f28] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#333d4b]"
          >
            상품 등록
          </button>
        </div>

        {/* Search / Filter */}
        <div className="mt-8 rounded-2xl border border-[#e5e8eb] bg-white p-5">
          <div className="flex gap-3">
            <select className="h-11 rounded-lg border border-[#e5e8eb] bg-white px-3 text-sm text-[#4e5968] outline-none focus:border-[#3182f6]">
              <option>전체 카테고리</option>
              <option>상의</option>
              <option>하의</option>
              <option>아우터</option>
              <option>잡화</option>
            </select>

            <select className="h-11 rounded-lg border border-[#e5e8eb] bg-white px-3 text-sm text-[#4e5968] outline-none focus:border-[#3182f6]">
              <option>전체 상태</option>
              <option>판매중</option>
              <option>품절</option>
              <option>판매중지</option>
            </select>

            <div className="flex flex-1">
              <input
                type="text"
                placeholder="상품명 또는 상품번호를 검색해주세요."
                className="h-11 w-full rounded-l-lg border border-r-0 border-[#e5e8eb] px-4 text-sm outline-none placeholder:text-[#b0b8c1] focus:border-[#3182f6]"
              />

              <button
                type="button"
                className="rounded-r-lg bg-[#191f28] px-5 text-sm font-semibold text-white"
              >
                검색
              </button>
            </div>
          </div>
        </div>

        {/* Product Table */}
        <div className="mt-5 overflow-hidden rounded-2xl border border-[#e5e8eb] bg-white">
          <div className="flex items-center justify-between border-b border-[#f0f1f3] px-6 py-4">
            <p className="text-sm font-semibold text-[#333d4b]">
              전체 상품 <span className="text-[#3182f6]">6</span>
            </p>

            <select className="rounded-lg border border-[#e5e8eb] px-3 py-2 text-sm text-[#6b7684] outline-none">
              <option>최신순</option>
              <option>가격 높은순</option>
              <option>가격 낮은순</option>
              <option>재고 적은순</option>
            </select>
          </div>

          <table className="w-full text-sm">
            <thead className="bg-[#fafbfc]">
              <tr className="border-b border-[#e5e8eb] text-left text-xs font-semibold text-[#8b95a1]">
                <th className="w-16 px-6 py-4">
                  <input type="checkbox" />
                </th>
                <th className="px-4 py-4">상품</th>
                <th className="px-4 py-4">카테고리</th>
                <th className="px-4 py-4">판매가</th>
                <th className="px-4 py-4">재고</th>
                <th className="px-4 py-4">상태</th>
                <th className="px-4 py-4">등록일</th>
                <th className="w-24 px-6 py-4">관리</th>
              </tr>
            </thead>

            <tbody>
              {products.map((product) => (
                <tr
                  key={product.id}
                  className="border-b border-[#f0f1f3] last:border-0 hover:bg-[#fafbfc]"
                >
                  <td className="px-6 py-5">
                    <input type="checkbox" />
                  </td>

                  <td className="px-4 py-5">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#f2f4f6] text-xs text-[#8b95a1]">
                        IMG
                      </div>

                      <div>
                        <p className="font-semibold text-[#333d4b]">
                          {product.name}
                        </p>

                        <p className="mt-1 text-xs text-[#8b95a1]">
                          #{String(product.id).padStart(5, '0')}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-4 py-5 text-[#6b7684]">
                    {product.category}
                  </td>

                  <td className="px-4 py-5 font-medium text-[#333d4b]">
                    {product.price.toLocaleString()}원
                  </td>

                  <td
                    className={`px-4 py-5 font-medium ${
                      product.stock === 0
                        ? 'text-[#f04452]'
                        : 'text-[#333d4b]'
                    }`}
                  >
                    {product.stock.toLocaleString()}개
                  </td>

                  <td className="px-4 py-5">
                    <StatusBadge status={product.status} />
                  </td>

                  <td className="px-4 py-5 text-[#8b95a1]">
                    {product.createdAt}
                  </td>

                  <td className="px-6 py-5">
                    <button
                      type="button"
                      className="text-sm font-medium text-[#6b7684] hover:text-[#191f28]"
                    >
                      수정
                    </button>
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

            <button className="flex h-8 w-8 items-center justify-center rounded-lg text-xs text-[#6b7684] hover:bg-[#f2f4f6]">
              2
            </button>

            <button className="flex h-8 w-8 items-center justify-center rounded-lg text-xs text-[#6b7684] hover:bg-[#f2f4f6]">
              3
            </button>

            <button className="flex h-8 w-8 items-center justify-center rounded-lg text-xs text-[#6b7684] hover:bg-[#f2f4f6]">
              4
            </button>

            <button className="flex h-8 w-8 items-center justify-center rounded-lg text-xs text-[#6b7684] hover:bg-[#f2f4f6]">
              5
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

const StatusBadge = ({
  status,
}: {
  status: Product['status']
}) => {
  const styles = {
    판매중: 'bg-[#e8f3ff] text-[#3182f6]',
    품절: 'bg-[#fff0f0] text-[#f04452]',
    판매중지: 'bg-[#f2f4f6] text-[#6b7684]',
  }

  return (
    <span
      className={`inline-flex rounded-md px-2.5 py-1 text-xs font-semibold ${styles[status]}`}
    >
      {status}
    </span>
  )
}

export default ProductListPage