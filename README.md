# loginApp

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)

## General info
This prject perform following operations: 
* In First screen
  1. It contain's email and password fields with basic validation and a 'sign-in' button with firebase authentication.
  3. After successfully sign in, the system navigate the user inside the application. 
  4. If a user already signed in this screen skipped and user navigate inside the application.
  5. The system validate with email (email pattern) and password (constains letter and digits).
* Second Screen
  1. It contain search input and list of items fetched from backend.
  2. Each list item contains the fields: uid, title,isChecked.
  4. When a user starts typing text, it filter this list by text query.
  5. When the user taps on an item, the item become checked or unchecked and it is synced with backend data.
  7. When a user wants to add some items to a list, he must type something and press “Create”. This record updated to the backend.
## Technologies

Project is created with:
* react version: 17.0.1
* react-native version: 0.64.1,
* Android version >= 5
* Node >= 10
* firebase version: 8.6.1,
* react-navigation/native version: 5.9.4
	
## Setup
To run this project, install it locally using npm:
 cd loginApp
 npm install
 npx react-native run-android
