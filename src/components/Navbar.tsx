import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Icon from "@/components/ui/icon"

const navLinks = [
  { to: "/doctors", label: "Врачи округа" },
  { to: "/archive", label: "Архивные материалы" },
  { to: "/departments", label: "Отделения сегодня" },
  { to: "/sources", label: "Источники информации" },
]

export function Navbar() {
  return (
    <nav className="relative z-10 w-full px-6 py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold font-heading text-gray-900">
          Медицина Севера
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Button asChild size="lg" className="hover:bg-indigo-700 text-white bg-slate-900">
            <Link to="/history">Начать изучение</Link>
          </Button>
        </div>

        {/* Mobile menu */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Icon name="Menu" size={20} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="mt-10 flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="text-base font-medium text-gray-800 hover:text-indigo-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
                <Button asChild size="lg" className="hover:bg-indigo-700 text-white bg-slate-900 mt-2">
                  <Link to="/history">Начать изучение</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
