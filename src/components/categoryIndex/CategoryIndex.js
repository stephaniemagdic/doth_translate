import {useEffect, useState} from 'react';
import {fetchAllTitles, fetchAllThemes} from '../../util.js';
import CardsContainer from '../cardsContainer/CardsContainer';
import loadingClock from '../../assets/Loading.png';
import Error from '../error/Error';
import './CategoryIndex.css';

const CategoryIndex = ({category}) => {
  const [allTitles, setAllTitles] = useState([])
  const [allThemes, setAllThemes] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchTitles = async () => {
    try {
      const data = await fetchAllTitles()
      setAllTitles(data.quote)
    } catch (err) {
      setError("no options found")
    }
  }

  const fetchThemes = async () => {
    try {
      const data = await fetchAllThemes()
      setAllThemes(data.quote)
    } catch (err) {
      setError("no options found")
    }
  }

  useEffect(() => {
    const fetchType = category.match.params.type
    if (fetchType === 'theme' ) {
      if (localStorage.themes) {
        const retrievedThemes = JSON.parse(localStorage.getItem('themes'))
        setAllThemes(retrievedThemes)
        setIsLoading(false)
      } else {
        fetchThemes()
        setIsLoading(false)
      }
    } else if (fetchType === 'title') {
      if (localStorage.titles) {
        const retrievedTitles = JSON.parse(localStorage.getItem('titles'))
        setAllTitles(retrievedTitles)
        setIsLoading(false)
      } else {
        fetchTitles()
        setIsLoading(false)
      }
    }
  }, [category.match.params.type])

  return (
    <div className="CategoryIndex">
      {error && <Error type={error}/>}
      {isLoading && <> <p>Loading...</p><img src={loadingClock} alt="old clock "></img></>}
      {category.match.params.type === 'theme'  && <CardsContainer cards={allThemes} type="theme-options"/> }
      {category.match.params.type === 'title' && <CardsContainer cards={allTitles} type="title-options"/> }
    </div>
  )
}

export default CategoryIndex;