import './App.css';
import { useGlobalContext } from './Context';
import Favorites from './components/Favorites'
import Modal from './components/Modal'
import Search from './components/Search';
import Meals from './components/Meals'
import { Helmet, HelmetProvider } from "react-helmet-async";





export default function App() {
  const { showModal, favorites } = useGlobalContext()

  return (
    <HelmetProvider>
    <>
     <Helmet>
     <title>Discover Delicious Recipes - Your Meal Guide</title>
          <meta name="description" content="Find and explore a variety of delicious recipes with easy-to-follow instructions. Save your favorites and cook like a pro!" />
          <meta name="keywords" content="recipes, meal finder, food, cooking, ingredients, quick recipes, healthy meals, best meals, easy cooking" />
          <meta property="og:title" content="Discover Delicious Recipes - Your Meal Guide" />
          <meta property="og:description" content="Explore a world of flavors with our recipe collection. Find your next favorite meal today!" />
          <meta property="og:image" content="URL_TO_YOUR_IMAGE" />
          <meta property="og:url" content="YOUR_WEBSITE_URL" />
          <meta name="twitter:title" content="Discover Delicious Recipes - Your Meal Guide" />
          <meta name="twitter:description" content="Find easy-to-make, healthy, and delicious recipes from around the world." />
      </Helmet>
      
    <main>

      <Search />
      {favorites.length > 0 && <Favorites />}

      <Meals />
      {showModal && <Modal />}
    </main>
    </>
    </HelmetProvider>
  )
}



