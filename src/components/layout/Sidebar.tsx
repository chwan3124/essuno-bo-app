import { NavLink } from 'react-router-dom'

const menuItems = [
  { label: '대시보드', path: '/' },
  { label: '주문 관리', path: '/orders' },
  { label: '상품 관리', path: '/products' },
  { label: '회원 관리', path: '/members' },
  { label: '리뷰 관리', path: '/reviews' },
]

const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-0 flex h-screen w-60 flex-col border-r border-[#e5e8eb] bg-white">
      {/* Logo */}
      <div className="flex h-16 items-center border-b border-[#f0f1f3] px-6">
        <span className="text-lg font-black tracking-[0.2em] text-[#191f28]">
          ESSUNO
        </span>
      </div>

      {/* Menu */}
      <nav className="flex-1 px-3 py-5">
        <p className="mb-3 px-3 text-xs font-semibold text-[#8b95a1]">
          MANAGEMENT
        </p>

        <div className="space-y-1">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                [
                  'block rounded-lg px-3 py-2.5 text-sm font-medium transition',
                  isActive
                    ? 'bg-[#f2f4f6] text-[#191f28]'
                    : 'text-[#6b7684] hover:bg-[#f7f8fa] hover:text-[#191f28]',
                ].join(' ')
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>

      {/* Bottom */}
      <div className="border-t border-[#f0f1f3] p-3">
        <div className="flex items-center justify-between rounded-lg px-3 py-2.5">
          <div>
            <p className="text-sm font-semibold text-[#333d4b]">
              관리자
            </p>
            <p className="mt-0.5 text-xs text-[#8b95a1]">
              admin@essuno.com
            </p>
          </div>

          <button
            type="button"
            className="text-xs text-[#8b95a1] hover:text-[#191f28]"
          >
            로그아웃
          </button>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar