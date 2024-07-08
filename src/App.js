import './App.css';
import { useGlobalContext } from './Context';
import Favorites from './components/Favorites'
import Modal from './components/Modal'
import Search from './components/Search';
import Meals from './components/Meals'




export default function App() {
  const { showModal, favorites } = useGlobalContext()

  return (
    <main>

      <Search />
      {favorites.length > 0 && <Favorites />}

      <Meals />
      {showModal && <Modal />}
    </main>
  )
}



