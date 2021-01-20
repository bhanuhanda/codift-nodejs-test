# codift-nodejs-test

### Steps to run the project
- run ```yarn install``` to setup the project
- copy the contents of file ```.env_example``` to ```.env``` file.
- run ```yarn start``` to start the project

### Create class through postman
- url : http://localhost:5000/class/create
- method : POST
- body: raw (JSON)
- request structure:
```
{
    "title":"Class 3", 
    "description": "Practicing Yoga in the lockdown", 
    "maxNumberOfStudents": 4, 
    "type": "CARDIO", 
    "start": "2020-01-20 15:00:00",
    "end": "2020-01-20 21:00:00"
}
```
