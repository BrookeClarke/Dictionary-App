import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
    if (props.meaning) {
        return (
            <div className="Meaning">
                <h2>{props.meaning.partOfSpeech}</h2>
                <div className="definition">
                    {props.meaning.definition}
                </div>
                <div className="examples">
                        {props.meaning.example}
                        <Synonyms synonyms={props.meaning.synonyms} />
                </div>
            </div>
        );
    }
}