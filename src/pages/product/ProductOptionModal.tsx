import { useEffect, useState } from 'react'
import type { ProductOptionItem } from '../../api/product/ProductApi'


type ProductOptionModalProps = {
isOpen: boolean
option: ProductOptionItem | null
onClose: () => void
onSave: (option: ProductOptionItem) => void
}

const ProductOptionModal = ({
    isOpen,
    option,
    onClose,
    onSave,
  }: ProductOptionModalProps) => {
const [color, setColor] = useState('')
const [size, setSize] = useState('')
const [price, setPrice] = useState(0)
const [stock, setStock] = useState(0)

useEffect(() => {
  if (option) {
    setColor(option.name)
    setSize(option.size)
    setPrice(option.price)
    setStock(option.stock)
  }
  }, [option])

  if (!isOpen) return null

  const handleSave = () => {
      if (color.trim() === '' || size.trim() === '') {
      alert('색상과 사이즈를 입력해 주세요.')
      return
    }

    if (
      !Number.isFinite(price) ||
      price < 0 ||
      !Number.isInteger(stock) ||
      stock < 0
    ) {
      alert('금액과 재고를 올바르게 입력해 주세요.')
      return
    }

    onSave({
      id: option == null ? undefined : option.id,
      name: color.trim(),
      size: size.trim(),
      price,
      stock,
    })
  }

return (
    <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
        onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose()
        }}
    >
    <div role="dialog" aria-modal="true" aria-labelledby="option-modal-title" className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl" >
    <div className="flex items-center justify-between">
    <h2 id="option-modal-title" className="text-xl font-bold text-[#191f28]" >
    단품 옵션 수정
    </h2>

      <button
        type="button"
        onClick={onClose}
        aria-label="닫기"
        className="text-xl text-[#8b95a1] hover:text-[#191f28]"
      >
        ✕
      </button>
    </div>

    <p className="mt-2 text-sm text-[#8b95a1]">
      상품 옵션과 재고 정보를 수정합니다.
    </p>

    <div className="mt-6 space-y-5">
  
      <div>
        <label className="mb-2 block text-sm font-semibold text-[#4e5968]">
          색상
        </label>

        <input
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="h-11 w-full rounded-lg border border-[#e5e8eb] px-4 text-sm outline-none focus:border-[#3182f6]"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-[#4e5968]">
          사이즈
        </label>

        <input
          value={size}
          onChange={(e) => setSize(e.target.value)}
          className="h-11 w-full rounded-lg border border-[#e5e8eb] px-4 text-sm outline-none focus:border-[#3182f6]"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="mb-2 block text-sm font-semibold text-[#4e5968]">
            추가 금액
          </label>

          <div className="relative">
            <input
              type="number"
              min={0}
              value={price}
              onChange={(e) =>
                setPrice(Number(e.target.value))
              }
              className="h-11 w-full rounded-lg border border-[#e5e8eb] px-4 pr-10 text-sm outline-none focus:border-[#3182f6]"
            />

            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-[#8b95a1]">
              원
            </span>
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-[#4e5968]">
            재고 수량
          </label>

          <div className="relative">
            <input
              type="number"
              min={0}
              step={1}
              value={stock}
              onChange={(e) => setStock(Number(e.target.value))}
              className="h-11 w-full rounded-lg border border-[#e5e8eb] px-4 pr-10 text-sm outline-none focus:border-[#3182f6]"
            />

            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-[#8b95a1]">
              개
            </span>
          </div>
        </div>
      </div>
    </div>

    <div className="mt-8 flex justify-end gap-2">
      <button
        type="button"
        onClick={onClose}
        className="rounded-lg border border-[#e5e8eb] px-5 py-3 text-sm font-semibold text-[#4e5968] hover:bg-[#f7f8fa]"
      >
        취소
      </button>

      <button
        type="button"
        onClick={handleSave}
        className="rounded-lg bg-[#191f28] px-5 py-3 text-sm font-semibold text-white hover:bg-[#333d4b]"
      >
        저장
      </button>
    </div>
  </div>
</div>

)
}

export default ProductOptionModal