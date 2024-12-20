'use client'

import Link from 'next/link'
import MaxwidthWrapper from './MaxWidthWrapper'
import { buttonVariants } from './ui/button'
import { ArrowRight } from 'lucide-react'
import { useSession } from 'next-auth/react'

const Navbar = () => {
  const { status, data: session } = useSession()
  console.log('session', session)
  const user = undefined
  const isAdmin = false
  return (
    <nav className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxwidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href={'/'} className="flex z-40 font-semibold">
            case<span className="text-green-600">cobra</span>
          </Link>

          <div className="h-full flex items-center space-x-4">
            {user ? (
              <>
                <Link
                  href={'/api/auth/logout'}
                  className={buttonVariants({ variant: 'ghost', size: 'sm' })}
                >
                  Sign out
                </Link>
                {isAdmin ? (
                  <Link
                    href={'/api/auth/logout'}
                    className={buttonVariants({ variant: 'ghost', size: 'sm' })}
                  >
                    Dashboard⭐️
                  </Link>
                ) : null}
                <Link
                  href={'/configure/upload'}
                  className={buttonVariants({
                    size: 'sm',
                    className: 'hidden sm:flex items-center gap-1',
                  })}
                >
                  Create case
                  <ArrowRight className="ml-1.5 h-5 w-5" />
                </Link>
              </>
            ) : (
              <>
                {/* <Link
                  href={'/api/auth/register'}
                  className={buttonVariants({ variant: 'ghost', size: 'sm' })}
                >
                  Sign up
                </Link> */}
                <h1>Hello {session && session.user!.name}!</h1>
                <div className="h-8 w-px bg-zinc-200 sm:block"></div>
                <Link
                  href={'/api/auth/signin'}
                  // href={'/api/auth/login'}
                  className={buttonVariants({ variant: 'ghost', size: 'sm' })}
                >
                  Login
                </Link>

                <Link
                  href={'/configure/upload'}
                  className={buttonVariants({
                    size: 'sm',
                    className: 'hidden sm:flex items-center gap-1',
                  })}
                >
                  Create case
                  <ArrowRight className="ml-1.5 h-5 w-5" />
                </Link>
              </>
            )}
          </div>
        </div>
      </MaxwidthWrapper>
    </nav>
  )
}

export default Navbar
