import React from 'react'
import { Header } from '@/components/header'
import { CartProvider } from '@/context/cart-context'

export interface StoreLayoutProps {
  children: React.ReactNode
}

export default function StoreLayout({ children }: StoreLayoutProps) {
  return (
    <CartProvider>
      <div className="mx-auto grid min-h-screen max-w-[1600px] grid-rows-app gap-5 px-8 py-8">
        <Header />
        {children}
      </div>
    </CartProvider>
  )
}
