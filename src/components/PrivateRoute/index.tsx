'use client'
import { useAuth } from '@/hooks'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

interface PrivateRouteProps {
  children: React.ReactNode
}
export const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const router = useRouter()

  const { accessToken } = useAuth()

  useEffect(() => {
    if (!accessToken) {
      router.push('/login')
    }
  }, [accessToken, router])
  
  return (
    <>
      {accessToken ? (
        children
      ) : (
        <div>
          <h1>Redirecionando...</h1>
        </div>
      )}
    </>
  )

}
