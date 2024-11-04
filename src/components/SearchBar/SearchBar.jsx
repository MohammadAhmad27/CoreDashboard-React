import React from 'react'
import "./searchbar.css"

export default function SearchBar() {
    return (
        <div className='search-bar'>
            <form className='search-form d-flex align-items-center'>
                <input type="text" name='query' placeholder='Search...' title='Enter search keyword' />
                <button type='submit' title='Search'>
                    <i className="bi bi-search"></i>
                </button>
            </form>
        </div>
    )
}
