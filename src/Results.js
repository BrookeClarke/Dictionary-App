import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./Results.css";

export default function Results(props) {
    if (props.results) {
        return (
        <div className="Results">
            <h1>
                {props.results.word}
                </h1>
                        <div>
                            <Phonetic phonetic={props.results.phonetic} />
                        </div>
            {props.results.meanings.map(function (meaning, index) {
                return (
                    <section key={index}>
                        <Meaning meaning={meaning} />
                    </section>
                );
            })}
            </div>
        );
    } else {
        return null;
    }
}

