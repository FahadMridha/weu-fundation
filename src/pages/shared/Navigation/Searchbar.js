
import React, { useState } from "react";

import { SlAnchor } from "react-icons/sl"
// import { SlMagnifier } from "react-icons/sl"
import audio from './XG8JSL2-money.mp3'


function Searchbar() {
    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };
    const handelClick = () => {
        // let audio = new Audio("./XG8JSL2-money.mp3")

        audio.play()

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Search term:", searchTerm);
    };

    return (
        <div >
            <form onSubmit={handleSubmit}>
                <input
                    className="p-2 m-5  text-blue-500 bg-slate-100 clicked:bg-slate-100"
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={handleChange}
                />
                <button onClick={handelClick} className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    <SlAnchor></SlAnchor>

                </button>
            </form>
        </div>
    );
}

export default Searchbar;
