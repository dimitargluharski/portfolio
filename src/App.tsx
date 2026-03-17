import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import { Sidebar } from './components/Sidebar'
import { TopBar } from './components/TopBar'
import { useTheme } from './hooks/useTheme'
import { ExperiencePage } from './pages/ExperiencePage'
import { HomePage } from './pages/HomePage'
import { WorkPage } from './pages/WorkPage'

function AppLayout() {
  const { isDark, cycleTheme } = useTheme()
  const shellThemeClass = isDark
    ? 'border-slate-700 bg-slate-900 text-slate-100'
    : 'border-slate-400/80 bg-slate-50 text-slate-950'

  return (
    <div
      className={`grid min-h-screen grid-cols-1 border-x lg:grid-cols-[280px_minmax(0,1fr)] ${shellThemeClass}`}
    >
      <Sidebar />

      <main className="px-4 pb-10 pt-6 sm:px-6 lg:px-10 lg:pb-14 lg:pt-9" id="top">
        <TopBar isDark={isDark} onThemeToggle={cycleTheme} />
        <Outlet />
      </main>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="work" element={<WorkPage />} />
        <Route path="experience" element={<ExperiencePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}

export default App
