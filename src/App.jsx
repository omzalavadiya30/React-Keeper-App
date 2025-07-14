import Footer from './components/Footer'
import Header from './components/Header'
import NoteManager from './components/NoteManager'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 overflow-x-hidden bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-yellow-100 via-gray-100 to-white">
      <Header />
      <main className="flex-1 w-full">
        <NoteManager />
      </main>
      <Footer />
    </div>
  )
}

export default App
