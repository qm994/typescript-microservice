# typescript-microservice
This is Typescript application built with docker, kubernetes etc and deployed on AWS

The propject has been hold off since I joined athenahealth as a new employee recently and planning to get back to it in 2021 August.

## Update

I restart to work on this project on 06/20/2021 and I am planning to finish and deploy to production before 10/01/2021 considering I am having a full time job now.


# Resources Backend

![Screen Shot 2021-06-18 at 11 42 11 AM](https://user-images.githubusercontent.com/40004335/122586362-93b13480-d02a-11eb-8e6c-a237599fa328.png)


# Services

![Screen Shot 2021-06-18 at 11 45 56 AM](https://user-images.githubusercontent.com/40004335/122586549-d410b280-d02a-11eb-992b-044c7de304c4.png)

# Events

![Screen Shot 2021-06-18 at 12 06 30 PM](https://user-images.githubusercontent.com/40004335/122589045-cb6dab80-d02d-11eb-9a66-9a0ba9ed8dc0.png)


# Application Structure

![Screen Shot 2021-06-18 at 12 07 14 PM](https://user-images.githubusercontent.com/40004335/122589095-d7596d80-d02d-11eb-9910-d06828e1d295.png)

# How the Error Handler middleware handles the different error?

The ultimate goal is build different customized error classes in `src/errors` folder and each of them will return a same error response which is an object with `errors` key with array of values and each value will have fileds `message` and optional `field`:
