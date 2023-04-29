
# React-Table App

## Overview
This is a Table app made with React-Table library in MERN Stack. It is showing mockdata of a JSON file which is stored in database. The database is connected to server which then sends data to the client-side where it is rendered.

## Features
The data can be sorted and filtered according to requirements.
* Click on the heading tag of any column to sort the data in ascending or descending order.
* Use the Table Search to search for any value inside the table.
* Use the Search bar inside every column to do a column search.

## Working
The app runs on MERN stack :

1. The mock data of a json file is loaded on database. For database, MongoDB is used.
2. Then MongoDB is connected to a server made in Node.js. The database is rendered on "server/api", this route is used to send data to the clientside.
3. The data send by server is then fetched by clientside which is made in React.js. Here fetch method is used to catch the data from the server-side.
4. The clientside is made in React so we can use React-Table library which is a popular library for creating tables in React app.


