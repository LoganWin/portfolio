import { Link, useLocation } from 'react-router-dom'

const links = [
  { label: 'Home', to: '/' },
  { label: 'References', to: '/reference-page' },
]

export default function Navbar() {
  const location = useLocation()
  return (
    <header className="fixed inset-x-4 top-4 z-50 flex items-center justify-between gap-4 rounded-lg border border-white/10 bg-white/5 p-2 ">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-gradient-to-br from-blue-500 to-indigo-600 font-semibold shadow-md">
          LW
        </div>
        <div className="hidden sm:block">
          <div className="text-sm font-semibold">Logan Winters</div>
          <div className="text-xs text-slate-300/80">WPI Student</div>
        </div>
      </div>

      <nav className="flex items-center gap-3">
        {links.map(link => {
          const isActive =
            link.to === '/' ? location.pathname === '/' : location.pathname.startsWith(link.to)
          return (
            <Link
              key={link.to}
              to={link.to}
              className={`rounded-md px-3 py-2 text-sm transition hover:bg-white/6 ${
                isActive ? 'text-white' : 'text-gray-200/90'
              }`}
            >
              {link.label}
            </Link>
          )
        })}
      </nav>
    </header>
  )
}
