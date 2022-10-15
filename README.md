# Backend of Interview Creation Portal
---
## Website link:-
### https://majestic-creponne-98bf4a.netlify.app/
---
### Tect used -- Node js , Express js , Mongo DB Atlas, Mongoose.
---
## frontendCode - https://github.com/priyank21116/Interview-Creation-Portal

---
#### File Structure
- containing models, routes, controller

![fileStructure](./images/fileStructure.png)

### Mongo DB Atlas Database

![mongoAtlas](./images/mongoAtlas.png)

### Postman- containing all functional and neccesary APIs

![postman](./images/postman.png)

## Basic Feature
- An interview creation route where the admin can create an interview by selecting participants, start time and end time and description. Backend should throw error with proper error message if: 
-- Any of the participants is not available during the scheduled time (i.e, has another interview scheduled)
-- No of participants is less than 2. Check for valid inputs 
-- And Other request checks.
- An Route to get all interviews for interviews-list-page where.Beside these routes are setted to get interview detail by Id and Cancel interview
- An interview edit routes where the data in DB id is updated after performing all validations as on the creation route.
- Mail notification to all participants on Create ,Update and cancelling deals
- Candidate and Interviwers routes to add them, findby id, get all details and update details
- All APIs are functional and test through postman in developing stage,further through frontend.
- NoSqL DataBase contains 3 collections for Interview, Candidate and Interviwer

