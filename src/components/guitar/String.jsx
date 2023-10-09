/*
    Elements should be a string array of size 13.

*/
import React, { useEffect, useState, useRef } from 'react';

const String = ( { elements, stringNumber }) => {

    const notes=elements.map((note, i) => {
        return (
            <span key={stringNumber+i} class="dot" style={{
                marginRight: i !== elements.length - 1 ? '50px' : '0'
            }}>
                {note}
            </span>
        );
    })

    return (
        <div className="string">
            {notes}
        </div>
    )
}

export default String;