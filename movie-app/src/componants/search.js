import React from 'react' ; 

const SearchMovie=(props)=>{

    return (
        <div className='col col-sm-4'>
            <input className='form-control'
             value={props.searchmovies}
             onChange={(event)=> props.setSearchMovies(event.target.value)}
             placeholder='Type to search...'></input>
        </div>
    );
};
export default SearchMovie ;