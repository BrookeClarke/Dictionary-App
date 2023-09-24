import React from "react";
import "./Photos.css";

export default function Photos(props) {
    if (props.photos) {
        return (
            <section className="Photos">
                <div className="row">
                    {props.photos.map(function (photo, index) {
                        return (
                            <div className="col-4" key={index} target="_blank" rel="noreferrer">
                                <a href={photo.src.original}>
                                    <img src={photo.src.landscape} className="img-fluid" alt="{keyword}" />
                                </a>
                            </div>
                        )
                    })}
                </div>
            </section>
        );
    } else {
        return null;
     };
}