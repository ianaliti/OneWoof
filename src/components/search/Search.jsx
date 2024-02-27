import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearSearch, selectedSearch, setSearch } from './searchSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MyMainButton from '../../components/buttons/myMainButton/MyMainButton';
import cl from './Search.module.css'

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
                className={cl.search}
            />
            <span className={cl.glass}>
                <FontAwesomeIcon className={cl.icon} icon="fa-solid fa-magnifying-glass" size="sm" style={{ color: "#100f0f", }} />
            </span>
{/* 
            {
                searchTerm.length > 0 && (
                    <MyMainButton onClick={onSearchClear}>Search</MyMainButton>
                )
            } */}
        </div>
    )
}

export default Search;