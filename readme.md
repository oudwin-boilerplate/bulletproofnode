# My implementation of the bulletproof NodeJS Architecture

[Original repo here.](https://github.com/santiq/bulletproof-nodejs)

### Start

##### Config

1. create a copy of example.config.env with your config
2. Head to src/config and edit it there aswell. You should import this file to use config rather than using process.env.MY_VAR

# Problems

- For some reason eslint not working so its not warning me of unused vars and parameters. I can set ts to give error but that is not something I want (specially for parameters). Because it will be a problem.
- I am not sure if I should add handlers for unhandled rejections and uncaughtExceptions

# Design Patterns

[Strategy](https://refactoring.guru/design-patterns/strategy/typescript/example#lang-features)
[Why not to use typeDI](https://github.com/rosario/example-with-typedi)

# Notes

(This is the expected workflow)[https://www.youtube.com/watch?v=nK3LP-pn_08]

1. Do TDD (Test Driven Development)
   - Use it.todo('description') -> so todo tests dont fail
   - Write out behaviour code needs to implement.
   - Test your code, even with real DB. Dont use mocks because you are not testing the real code
   - Start with Big picture business logic for your app. Not how to do x
   - To test the code consume it exactly as the user of the code will consume it (so don't do mocks or test if code correctly does x directly on obj you passed)
2. Use factory functions with Object.freeze();
