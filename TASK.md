# Technical Assignment

## Objective

Implement a service that:
- [ ] Has a storage of cities (city name and date of city foundation)
- [ ] Stores named lists of cities from the available ones in the storage, which users create (separate API call)
- [ ] Contains a web-frontend, displaying and allowing to manage (add/edit/delete cities) the available pool of cities
- [ ] Contains a web-frontend, displaying the created user-named lists

### User Context
Users work in mobile applications that request the available pool of cities and previously created named lists, as well as post new created named lists to the server through a separate API call.

## API Requirements
The service stores locally in the database, saves from the external service and gives out to the external service the necessary information through REST requests (API):

1. **Getting the entire pool of available cities**
   The server stores the pool of cities and gives them to the Frontend via the corresponding GET request.
   The Frontend requests the pool of cities when the user forms a new named list.

2. **Managing the available pool of cities**
   Implement a web console (web-frontend) for adding, deleting and editing the cities contained in the pool.
   Interaction of the web console with the server logic is implemented through the REST API.

3. **Saving the named list of cities**
   When saving a list of cities, the corresponding information is sent to the Frontend via a POST request. The server stores the received information in local storage.
   Parameters of the named list of cities:
   - Short name
   - Full name
   - Label color
   - Binding to selected cities from the available pool

4. **Getting the created named lists**
   When launching the web console (web-frontend), it will request previously created named lists of cities from the server via a GET request.

## Technical Requirements
- Database: MongoDB
- Code language: TypeScript
- REST API (JSON)

## Deliverable
The result of the task should be provided in the form of a project on GitHub.

It will be a plus if the implemented Backend is deployed on a working host and the project is provided in a repository for API verification.

## Sample Data
### City Pool
| City | Founded |
| ---- | ------- |
| Paris | 1210 |
| Vienna | 1147 |
| Berlin | 1237 |
| Warsaw | 1321 |
| Milan | 1899 |

### Named Lists of Cities
| List Name | Cities |
| --- | --- |
| Central Europe France | [Paris, Vienna, Berlin] |
| Austria | [Vienna, Linz, Salzburg] |
| Asia | [Shanghai, Tokyo, Seoul] |