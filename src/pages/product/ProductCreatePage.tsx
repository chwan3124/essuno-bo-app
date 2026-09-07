import { useNavigate } from 'react-router-dom'
import MainLayout from '../../components/layout/MainLayout'
import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { createProduct } from '../../api/product/ProductApi'


const ProductCreatePage = () => {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState(0)
  const [stock, setStock] = useState(0)

  const createMutation = useMutation({
    mutationFn: () => createProduct({
      name,
      category,
      price,
      stock
    }),

    onSuccess: () => {
      alert('상품이 생성되었습니다.')
      navigate('/products')
    },
    
    onError: () => {
      alert('상품 생성에 실패하였습니다.')
    }
  })


  return (
    <MainLayout>
      <div className="p-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <button
              type="button"
              onClick={() => navigate('/products')}
              className="mb-4 text-sm text-[#8b95a1] hover:text-[#191f28]"
            >
              ← 상품 목록
            </button>

            <h1 className="text-2xl font-bold text-[#191f28]">
              상품 상세
            </h1>

            <p className="mt-2 text-sm text-[#8b95a1]">
              상품 정보를 확인하고 수정할 수 있습니다.
            </p>
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              className="rounded-xl border border-[#e5e8eb] bg-white px-5 py-3 text-sm font-semibold text-[#4e5968] hover:bg-[#f7f8fa]"
            >
              취소
            </button>

            <button
              type="button"
              onClick={() => createMutation.mutate()}
              disabled={createMutation.isPending}
              className="rounded-xl bg-[#191f28] px-6 py-3 text-sm font-semibold text-white hover:bg-[#333d4b] cursor-pointer"
            >
              저장
            </button>
          </div>
        </div>

        {/* Product Info */}
        <div className="mt-8 grid grid-cols-3 gap-6">
          {/* Image */}
          <div className="rounded-2xl border border-[#e5e8eb] bg-white p-6">
            <h2 className="mb-5 font-bold text-[#191f28]">
              상품 이미지
            </h2>

            <div className="flex aspect-square items-center justify-center rounded-xl bg-[#f2f4f6] text-sm text-[#8b95a1]">
              상품 이미지
            </div>

            <div className="mt-4 grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="flex aspect-square items-center justify-center rounded-lg bg-[#f2f4f6] text-xs text-[#8b95a1]"
                >
                  IMG
                </div>
              ))}
            </div>
          </div>

          {/* Basic Info */}
          <div className="col-span-2 rounded-2xl border border-[#e5e8eb] bg-white p-6">
            <h2 className="mb-6 font-bold text-[#191f28]">
              기본 정보
            </h2>

            <div className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#4e5968]">
                  상품명
                </label>

                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="h-11 w-full rounded-lg border border-[#e5e8eb] px-4 text-sm outline-none focus:border-[#3182f6]"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#4e5968]">
                    카테고리
                  </label>

                  <select 
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="h-11 w-full rounded-lg border border-[#e5e8eb] bg-white px-3 text-sm outline-none focus:border-[#3182f6]">
                    <option>상의</option>
                    <option>하의</option>
                    <option>아우터</option>
                    <option>잡화</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#4e5968]">
                    판매 상태
                  </label>

                  <select className="h-11 w-full rounded-lg border border-[#e5e8eb] bg-white px-3 text-sm outline-none focus:border-[#3182f6]">
                    <option>판매중</option>
                    <option>판매중지</option>
                    <option>품절</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#4e5968]">
                    판매가
                  </label>

                  <div className="relative">
                    <input
                      type="number"
                      value={price}
                      onChange={(e) => setPrice(Number(e.target.value))}
                      className="h-11 w-full rounded-lg border border-[#e5e8eb] px-4 pr-12 text-sm outline-none focus:border-[#3182f6]"
                    />

                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-[#8b95a1]">
                      원
                    </span>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#4e5968]">
                    재고
                  </label>

                  <div className="relative">
                    <input
                      value={stock}
                      onChange={(e) => setStock(Number(e.target.value))}
                      className="h-11 w-full rounded-lg border border-[#e5e8eb] px-4 pr-12 text-sm outline-none focus:border-[#3182f6]"
                    />

                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-[#8b95a1]">
                      개
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#4e5968]">
                  상품 설명
                </label>

                <textarea
                  rows={6}
                  defaultValue="ESSUNO의 베이직 오버사이즈 티셔츠입니다."
                  className="w-full resize-none rounded-lg border border-[#e5e8eb] p-4 text-sm outline-none focus:border-[#3182f6]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Product Options */}
        <div className="mt-6 rounded-2xl border border-[#e5e8eb] bg-white p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-bold text-[#191f28]">
                상품 옵션
              </h2>

              <p className="mt-1 text-sm text-[#8b95a1]">
                상품의 사이즈와 색상을 관리합니다.
              </p>
            </div>

            <button
              type="button"
              className="rounded-lg border border-[#e5e8eb] px-4 py-2 text-sm font-semibold text-[#4e5968] hover:bg-[#f7f8fa]"
            >
              옵션 추가
            </button>
          </div>

          <div className="mt-5 overflow-hidden rounded-xl border border-[#e5e8eb]">
            <table className="w-full text-sm">
              <thead className="bg-[#fafbfc]">
                <tr className="border-b border-[#e5e8eb] text-left text-xs text-[#8b95a1]">
                  <th className="px-5 py-4">색상</th>
                  <th className="px-5 py-4">사이즈</th>
                  <th className="px-5 py-4">추가 금액</th>
                  <th className="px-5 py-4">재고</th>
                  <th className="px-5 py-4">관리</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b border-[#f0f1f3]">
                  <td className="px-5 py-4">Black</td>
                  <td className="px-5 py-4">M</td>
                  <td className="px-5 py-4">0원</td>
                  <td className="px-5 py-4">42개</td>
                  <td className="px-5 py-4">
                    <button className="text-[#6b7684] hover:text-[#191f28]">
                      수정
                    </button>
                  </td>
                </tr>

                <tr className="border-b border-[#f0f1f3]">
                  <td className="px-5 py-4">Black</td>
                  <td className="px-5 py-4">L</td>
                  <td className="px-5 py-4">0원</td>
                  <td className="px-5 py-4">38개</td>
                  <td className="px-5 py-4">
                    <button className="text-[#6b7684] hover:text-[#191f28]">
                      수정
                    </button>
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4">White</td>
                  <td className="px-5 py-4">M</td>
                  <td className="px-5 py-4">0원</td>
                  <td className="px-5 py-4">48개</td>
                  <td className="px-5 py-4">
                    <button className="text-[#6b7684] hover:text-[#191f28]">
                      수정
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Metadata */}
        <div className="mt-6 rounded-2xl border border-[#e5e8eb] bg-white p-6">
          <h2 className="font-bold text-[#191f28]">
            상품 정보
          </h2>

          <div className="mt-5 grid grid-cols-3 gap-5 text-sm">
            <div>
              <p className="text-[#8b95a1]">상품 번호</p>
              <p className="mt-2 font-medium text-[#333d4b]">
              </p>
            </div>

            <div>
              <p className="text-[#8b95a1]">등록일</p>
              <p className="mt-2 font-medium text-[#333d4b]">
                2026.08.25
              </p>
            </div>

            <div>
              <p className="text-[#8b95a1]">최근 수정일</p>
              <p className="mt-2 font-medium text-[#333d4b]">
                2026.08.25
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="mt-6 flex justify-between">
          <button
            type="button"
            className="rounded-xl border border-[#f04452] px-5 py-3 text-sm font-semibold text-[#f04452] hover:bg-[#fff0f0]"
          >
            상품 삭제
          </button>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => navigate('/products')}
              className="rounded-xl border border-[#e5e8eb] bg-white px-5 py-3 text-sm font-semibold text-[#4e5968]"
            >
              취소
            </button>

            <button
              type="button"
              onClick={() => createMutation.mutate()}
              disabled={createMutation.isPending}
              className="rounded-xl bg-[#191f28] px-6 py-3 text-sm font-semibold text-white hover:bg-[#333d4b] cursor-pointer"
            >
              저장
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default ProductCreatePage