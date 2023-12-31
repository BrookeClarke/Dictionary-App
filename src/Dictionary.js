import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css"
import Results from "./Results";
import Photos from "./Photos.js";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);
    let [photos, setPhotos] = useState(null);

    function handleResponse(response) {
        setResults(response.data);
    }

    function handlePexelsResponse(response) {
        setPhotos(response.data.photos);
    }

    function search(event) {
        event.preventDefault();
        let apiKey = "0f605ca33b8d413fa995ab3t060267od";
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
        axios.get(apiUrl).then(handleResponse);

        let pexelsApiKey ="7kaTYsVHTPb6kASuwmDi9ZS1YHr5uYZMk1mKtRnQFU3vN98Lv0jsRbRY";
        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
        let headers = { Authorization: `Bearer ${pexelsApiKey}` }

        axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    return (
        <div className="Dictionary">
            <h1>What word do you want to look up?</h1>
                <section>
                    <form onSubmit={search}>
                        <input type="search" onChange={handleKeywordChange} />
                    </form>
                    <div className="hint">
                        Suggested words: sunset, wine, yoga, plant...
                    </div>
                </section>
            <Results results={results} />
            <Photos photos={photos} />
            </div>
        );
}