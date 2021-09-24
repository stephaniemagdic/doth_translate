import {useEffect} from 'react';

export const CategoryIndex = ({category}) => {
  console.log("match-->", category.match.params.type)

  useEffect(() => {
    const fetchType = category.match.params.type
    if(fetchType === 'theme' ) {

    } else if (fetchType === 'title') {

    }
  }, [])

  return (
    <p>test</p>
  )
}

export default CategoryIndex;