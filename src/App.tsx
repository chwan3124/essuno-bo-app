import { Route, Routes } from 'react-router-dom'

import './App.css'
import LoginPage from './pages/auth/LoginPage'
import DashboardPage from './pages/auth/DashboardPage'
import ProductListPage from './pages/product/ProductListPage'
import ProductDetailPage from './pages/product/ProductDetailPage'
import OrderListPage from './pages/order/OrderListPage'
import OrderDetailPage from './pages/order/OrderDetailPage'
import MemberListPage from './pages/member/MemberListPage'
import MemberDetailPage from './pages/member/MemberDetailPage'
import ReviewListPage from './pages/review/ReviewListPage'
import ReviewDetailPage from './pages/review/ReviewDetailPage'
import ProductCreatePage from './pages/product/ProductCreatePage'

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/products" element={<ProductListPage />} />
      <Route path="/product/:productId" element={<ProductDetailPage />} />
      <Route path="/product/create" element={<ProductCreatePage />} />
      <Route path="/orders" element={<OrderListPage />} />
      <Route path="/order/:id" element={<OrderDetailPage />} />
      <Route path="/members" element={<MemberListPage />} />
      <Route path="/member/:id" element={<MemberDetailPage />} />
      <Route path="/reviews" element={<ReviewListPage />} />
      <Route path="/review/:id" element={<ReviewDetailPage />} />
    </Routes>
  )
}

export default App
