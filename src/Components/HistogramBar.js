import './histogramBar.css'

import React from 'react'

function HistogramBar({word, count}) {
    const height =count*20;
    console.log(height);
    return (
        <div className='Bar_container'>
            <div style={
                    {
                            height: `${(count * 10)}px`,
                    }
                }
                 className='bar'></div>
            <div>
                <h4> {word} </h4>
            </div>
        </div>

    )
}

export default HistogramBar
