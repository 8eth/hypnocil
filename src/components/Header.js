import React from "react"

function Header({searchTerm, setSearchTerm}) {
    function handleChange(e) {
        setSearchTerm(e.target.value);
    }

    return(
        <header>
            <div>
                <img src="./images/hypnocil-logo.png"/>
                <h1>Clinical Trials</h1>
            </div>
            <input 
                id="search" 
                type="text" 
                placeholder="Search..."
                value={searchTerm}
                onChange={handleChange}
            >
            </input>
        </header>
    );
}

export default Header;