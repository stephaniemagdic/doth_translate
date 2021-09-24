import {useEffect, useState} from 'react';
import {fetchAllTitles, fetchAllThemes} from '../../util.js'

export const CategoryIndex = ({category}) => {
  console.log("match-->", category.match.params.type)
  const [allTitles, setAllTitles] = useState([])

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

  //Next Step.. pass data to CardsContainer...

  useEffect(() => {
    const fetchType = category.match.params.type
    if(fetchType === 'theme' ) {
      fetchTitles()
      
    } else if (fetchType === 'title') {
      //TO DO: COMPLETE
      return
    }
  }, [])

  return (
    <p>test</p>
  )
}

export default CategoryIndex;