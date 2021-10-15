import React, { useState } from 'react'
import './SearchBar.scss'
import ICSearch from '../../assets/ic_search.png'
import { useHistory } from 'react-router'
import { scenes } from '../../scenes/scenes'

const SearchBar = ({query = ""}) => {
    const history = useHistory()
    const [search, setSearch] = useState(query || '')

    const onChange = (evt) => setSearch(evt.target.value)
    const onKeyPress = (evt) => {
        if (evt.key && evt.key === 'Enter') handleSearch()
    }
    const handleSearch = () => {
        if (/^[MLA]{3}[0-9]{9}/.test(search.trim()) && search.length === 12) {
            history.push(`${scenes.items.url}/${search}`);
        } else {
            if (search && search.trim()) history.push(`${scenes.items.url}/?q=${search}`);
        }
    }

	return (
		<div className="searchbar">
            <input className="searchbar__input" name="search" placeholder="Nunca dejes de buscar" type="text" onChange={onChange} onKeyPress={onKeyPress} />
            <button className="searchbar__button" onClick={handleSearch}>
                <img src={ICSearch} alt="Search" />
            </button>
		</div>
	)
}

export default SearchBar
