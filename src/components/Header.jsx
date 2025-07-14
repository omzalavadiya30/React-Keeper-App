import { SparklesIcon } from '@heroicons/react/24/solid'

const Header = () => {
  return (
    <header className="w-full bg-gradient-to-r from-blue-500 via-indigo-400 to-purple-400 px-8 py-4 shadow-lg flex items-center relative z-10">
      <SparklesIcon className="h-7 w-7 text-purple-100 mr-2 animate-bounce-slow" />
      <span className="text-2xl font-extrabold text-white tracking-tight drop-shadow">Keeper App</span>
    </header>
  )
}

export default Header