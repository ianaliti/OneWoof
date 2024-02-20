import React from 'react'
import MyMainButton from '../../components/buttons/myMainButton/MyMainButton'
import { useDispatch, useSelector } from 'react-redux'
import { clearSearch, selectedSearch, setSearch } from './searchSlice'

const Search = () => {

    const dispatch = useDispatch();
    const searchTerm = useSelector(selectedSearch);

    console.log(searchTerm)

    const onSearchChangeHandle = (e) => {
        dispatch(setSearch(e.target.value))
    }

    const onSearchClear = () => {
        dispatch(clearSearch())
    }


  return (
    <div>
        <input 
            id='search'
            type='text'
            value={searchTerm}
            onChange={onSearchChangeHandle}
            placeholder='Search'
            />
            {
                searchTerm.length > 0 && (
                    <MyMainButton onClick={onSearchClear}>Search</MyMainButton>
                )
            }
    </div>
  )
}

export default Search;