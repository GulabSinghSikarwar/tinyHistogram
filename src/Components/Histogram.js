import React from 'react'
import HistogramBar from './HistogramBar'
import './Histogram.css'

function Histogram({histogramData}) {
    console.log("data passed : ", histogramData);
    return (
        <div className='histogram_bar_container'>
            {
            histogramData.map(({
                word,
                frequency
            }, i) => {
                return <HistogramBar key={i}
                    word={word}
                    count={frequency}/>


            })
        } </div>
    )
}

export default Histogram
