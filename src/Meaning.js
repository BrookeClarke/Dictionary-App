import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
    if (props.meaning) {
        return (
            <div className="Meaning">
                <h2>{props.meaning.partOfSpeech}</h2>
                <div>
                    <p>
                        Definition: {props.meaning.definition}
                        <br />
                        Example: {props.meaning.example}
                        <br />
                        <Synonyms synonyms={props.meaning.synonyms} />
                    </p>
                </div>
            </div>
        );
    }
}