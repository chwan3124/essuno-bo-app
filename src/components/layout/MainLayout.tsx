import Sidebar from './Sidebar'

interface MainLayoutProps {
  children: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex h-screen overflow-hidden bg-[#f7f8fa]">
      {/* Sidebar */}
      <aside className="w-64 shrink-0">
        <Sidebar />
      </aside>

      {/* Content */}
      <main className="flex-1 overflow-auto">
        <div className="min-w-[1200px] p-8">
          {children}
        </div>
      </main>
    </div>
  )
}

export default MainLayout