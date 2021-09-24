import {useEffect, useState} from 'react';
import {fetchAllTitles, fetchAllThemes} from '../../util.js'

export const CategoryIndex = ({category}) => {
  console.log("match-->", category.match.params.type)
  const [allTitles, setAllTitles] = useState([])
  const [allThemes, setAllThemes] = useState([])

  const fetchTitles = async () => {
    try {
      const data = await fetchAllTitles()
      setAllTitles(data.quote)
      console.log("data in fetchAllTitles", data)
    } catch (err) {
      console.log(err)
      // setError(err)
    }
  }

  const fetchThemes = async () => {
    try {
      const data = await fetchAllThemes()
      setAllThemes(data.quote)
      console.log("data in fetchAllThemes", data)
    } catch (err) {
      console.log(err)
      // setError(err)
    }
  }

  //Next Step.. pass data to CardsContainer...

  useEffect(() => {
    const fetchType = category.match.params.type
    if(fetchType === 'theme' ) {
      fetchThemes()
      
    } else if (fetchType === 'title') {
      
      fetchTitles()
    }
  }, [])

  return (
    <p>test</p>
  )
}

export default CategoryIndex;