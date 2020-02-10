1. What problem does the context API help solve?

    The main problem that context API is designed to solve is the issue of prop drilling. It does so by enabling us to share specifics forms of data across every level of the application. 

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    a. Actions: Actions can be described as JavaScript objects that have a type property that is indictive of the actions that is being undertaken by that object. Actions are able to send data from your application to your store.
    
    b. Reducers: Reducers determine how the application's state changes in response to actions that are being sent to the store. In order for Redux to execute the next State, it needs to rely on Reducer Functions to pass the previous state and action. 

    c. Store: Store is what holds all of the state in the application. This allows it to be considered the 'single source of truth' in the redux application.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

    Appication state is considered to be global acting while component state is only acting locally. Component state would be best served on something like a form component, and Application state would be used best with user login features.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    Redux Thunk is a form of middleware that lets you call action creators that return functions instead of the action objects. The special funtion that gets returned has access to what is called dispatch, and this allows us to dispatch new actions based on results of the api calls. 

5. What is your favorite state management system you've learned and this sprint? Please explain why!

    So far, redux has been a very interesting library to work with and I have learned a lot about how different state management systems behave in an application. I have enjoyed the consistent nature of redux and how applcations built with it can perform in different enviornments. 