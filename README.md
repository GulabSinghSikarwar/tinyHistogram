# Tiny Histogram
Tiny Histogram is a React-based web application that extracts the top 20 most frequently occurring words from a given paragraph of text and displays them in a histogram. It also allows users to download the histogram data as a CSV file.

## Clone the Repo
To clone this repository, run the following command in your terminal . 

`git clone https://github.com/GulabSinghSikarwar/tinyHistogram.git`
 
## Setup the React Project

To set up the React project, navigate to the root directory of the project in your terminal and run the following command:

`npm install`

## Installing Library Dependency

To install the necessary library dependency, run the following command:

`npm install react-csv`


## Explanation of Project Data


### Main Component: Tiny

 The **`Tiny`** component is the main component of this project. It has two major functions: **`fetchData()`** and **`formatData()`**.

-  **` fetchData()`**: This function is used to fetch the API and the response is fetched and converted to text format.
- **`formatData()`**: This function is called to extract all the words and their frequency. The following tasks are performed in this function:
  - It extracts all the words from the text paragraph using the **`split()`** method and passing a regular expression as an argument.
  - Once all the words are obtained, an object **`{ word, frequency }`** is created containing the word and its frequency (its count).
  - The first 20 elements with the highest frequency are sorted and sliced.
Once the 20 distinct highest occurring words are obtained, the state of **`histagramData`** and **`isLoading`** is updated.
  - Now, two components **`Histogram`** and **`HistogramBar`** are created to display the histogram and each bar of the histogram, respectively.

### Exporting CSV File

For exporting the CSV file, we have used the react-csv library. The following two objects are passed in this library:

1. Histogram data: The data for the histogram is passed.
2. Headers: An array that represents the fields or columns in the CSV file. Each object in this array has two properties:

    - **`Label`**: It is the heading of the column in the CSV file.
    - **`Property`**: It is the single object of the histogram object (word, frequency).

 Later, a csv object is created, which is then passed in the **`CSVLink`** tag. When the user clicks on this button, the CSV file starts downloading.
 
## Deployment

The Tiny Histogram project is deployed on Firebase and can be accessed at the following link: [click here :  Firebase](https://assignments-7a03d.web.app/)

Link :https://assignments-7a03d.web.app/.

 

