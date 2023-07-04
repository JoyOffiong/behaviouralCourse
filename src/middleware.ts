export { default } from 'next-auth/middleware'

export const config = {
  matcher: [
    '/dashboard',
    '/dashboard/:path*',
    '/courses', '/courses/:path*',
    '/students', '/students/:path*',
    '/account', '/account/:path*',
  ]
}