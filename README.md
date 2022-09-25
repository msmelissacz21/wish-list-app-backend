# Group Project Wish-List App


## Description
The purpose of this application is to add, delete, and prioitize items on a wish list.  This app has users that can add, update and delete items from their respective wishlists.  This is the back end code of the application.

## Demo
Currently down, due to switching from JS to Typescript

## Technologies
Originally in Javascript and converted to Typescript and Node.js.  This backend is currently in Typescript while the frontend is still being converted. The frontend uses React and Bootstrap.  Backend dependencies include express and mongoose. 


## Routes

| Method   | Path                              | Purpose                                                    |
| -------- |:---------------------------------:| ----------------------------------------------------------:|
| GET      |           /user-favorites/name/:name     |   Gets a user and their favorites  |
| DELETE   |              /user-favorites/name/:name       |   Delete a user and all of their favorited items    | 
| POST     |       /user-favorites/name/:name      |   Updates a specific user's favorites                |          
| GET      |                   *               |   404 page (matches any route not defined above)           |


## Database Item Field and Type

Wish-list-app-database.favorites

| Field            | Type                  | 
| ---------------- |-----------------------| 
| _id              |        Object ID      |   
| name             |         String        |  
| price            |         String        | 
| sale price       |         String        | 
| date added       |         String        |   
| image            |         String        | 
| manufacturer     |         String        | 
| shortDescription |         String        | 
| sku              |         String        | 
| url              |         String        | 



Wish-list-app-database.userfavorites

| Field            | Type                  | 
| ---------------- |-----------------------| 
| _id              |        Object ID      |   
| name             |         String        | 
| favorites        |         Array         | 


## Issues

Currently the app is not deploying after switching to Typescript.  This is an issue that is steadily being worked on.
