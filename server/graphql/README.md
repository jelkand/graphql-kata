# Exercises and requirements:

## Exercise 1:

### The Schema
- A GraphQL Endpoint is defined by its _schema_. Given our mock data service, let's write a schema.
- Mock Data Service is just an in-memory object in lieu of a relational DB.
- Our models:
  - Student
    - ID
    - First Name
    - Last Name
    - Creation Timestamp
  - Assignment
    - ID
    - Name
    - Creation Timestamp
  - Student Assignment
    - ID
    - Student ID
    - Assignment ID
    - Created At
- We could probably actually skip the student assignment in the schema, it's only important when we start smashing data and relations around.
- Once the model types are defined in GraphQL, we have to add them to our Query type.
- The schema is the 'graph' portion of GraphQL. It defines the relationships between types.
- I guess it's also the 'QL' in GraphQL. The takeaway-the schema is important.

### The Query
- In order to get at our data, we have to add them to the Query, and define resolvers.
- The resolver is the way in which we grab the data. With a traditional DB, we'd probably execute a query here.
- Since we have a mock data store, we'll just use `lodash`.
- Samples are provided for Student, we'll follow the example for Assignment and StudentAssignment.
- For fun, let's add a student's full name to the student schema, and resolve it by concatenating.
- If we have lots of time, we can add in submissions to the model, and calculate a student's top score.

## Exercise 2:

### Changing the data
- What happens if we want to change our data?
- GraphQL calls this a 'mutation'. Mutations are defined in the same way query fields are.
- Let's write a mutation to update a student's name.

## Exercise 3: 

### What if our data doesn't all come from the same place? 
- We can use graphql to do bridge APIs.
- With recent releases, we can stich together graphql schemas that we own, but that live in different services.
- Let's use `https://jsonplaceholder.typicode.com/todos` to get some dummy data
- The todo is modeled so:
  - ID
  - UserID
  - Title
  - Completed
- To wire it in, we'll define the object on the schema, add in the appropriate associations, and make a GET request when we resolve it.

## Exercise 4:

### UP TO YOU!
If we got here, we crushed it all. We can try doing whatever now.