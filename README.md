# Group Project Wish-List App

The purpose of this application is to add, delete, and prioitize items on a wish list.  This is the back end code of the application.


## Routes

| Method   | Path                              | Purpose                                                    |
| -------- |:---------------------------------:| ----------------------------------------------------------:|
| GET      |                   /               |   Home page                                                |
| GET      |                /favorites         |   Favorites index page                                     |
| POST     |                /favorites         |   Create new favorite                                      |
| GET      |              /favorites/new       |   Form page for creating a new favorite                    |
| GET      |              /favorites/:id       |   Details about a particular favorited item                |
| GET      |           /favorites/:id/edit     |   Form page for editing an existing item's favorite order  |
| DELETE   |              /favorites/:id       |   Delete a particular favorited item                       | 
| POST     |       /favorites/:id/comment      |   Create a comment about a particular item                 |
| DELETE   | /favorites/:id/comment:commentID  |   Delete a comment about a particular item                 |
| GET      |                   *               |   404 page (matches any route not defined above)           |


## Database Item Field and Type

| Field       | Type                  | 
| ----------- |-----------------------| 
| _id         |        Object ID      |   
| name        |         String        |  
| price       |         Number        | 
| sale price  |         Number        | 
| date added  |         String        |   
| pic         |         String        | 
