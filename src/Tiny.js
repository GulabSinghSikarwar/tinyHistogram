import React, {useState} from 'react'
import Histogram from './Components/Histogram';
import {CSVDownload, CSVLink} from 'react-csv'
import './Tiny.css'
function Tiny() {

    const [histogramData, setHistogramData] = useState();

    const [isLoading, setIsLoading] = useState(true);
    const url = 'https://www.terriblytinytales.com/test.txt'
    const fetchData = async () => {

        const response = await fetch(url)
        const data = await response.text();

        const histogram = await formatData(data);
        console.log(histogram);


        setHistogramData(histogram);
        setIsLoading(false);


    }
    const formatData = (data) => {
        // this  function will  do the followinf task
        /*
        1) it will extract all words from the txt paragraph 

        2) once we  get  all the words we will map   form the map ;

 */
        // step 1;

        const allWords = data.split(/[ ,.\n]+/)
        let histogram = {}


        // step 2
        for (let i = 0; i < allWords.length; i++) {
            const word = allWords[i];


            if (! word) 
                continue;
             else {

                histogram[word] = (histogram[word] || 0) + 1;


            }
        }

        // step 3 : sorting the objects based on the frequency and
        // slice the  first 20 array  elements


        const newSortedHistogram = Object.entries(histogram).sort((a, b) => b[1] - a[1]).slice(0, 20);

        // step 4 create the new array of element of objects  { word : frequency }

        const newHistogram = newSortedHistogram.map(([word, frequency]) => ({word, frequency}));

        return newHistogram;


    }
    const headers =[

        {
            label:"Word",
            key:"word"
        },
        
        {
            label:"Count",
            key:"frequency"
        },

    ]
    const csv={
        filename:"file.csv",
        headers,
        data:histogramData
    }
    


    return (
        <div>

            <div className='outer_container'>
                <div className='action_container'>
                    <div className='button_containers'>
                       {
                        (isLoading)? <button onClick={fetchData} className=' btn'>Submit</button>
                       :''
                       } {
                        (!isLoading) ? <CSVLink style={{ textDecoration:"none" }} className='btn' {...csv} >export </CSVLink> : <div/>
                    } </div>


                </div>
                <div className='histogram_container'>
                    {
                    (!isLoading) ? <Histogram histogramData={histogramData}/> : 'no data'
                } </div>

            </div>

        </div>
    )
}

export default Tiny
