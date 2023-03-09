## 1. Unit tests

Focus is on testing the individual building blocks of an application such as a class or a function or a component

Each unit or building block is tested in isolation, independent of other units

Dependencies are mocked

Run in a short amount of time and make it very easy to pinpoint failures

## 2. Integration tests

Focus is on testing a combination of units and ensuring they work together

Take longer than unit tests

## 3. E2E tests

Focus is on testing the entire application flow and ensuring it works as designed from start to finish

Involves in a real UI, a real backend database, real services etc

Take the longest as they cover the most amount of code

Have a cost implication as you interact with real APIs that may charge based on the number of requests

## Testing pyramid

    E2E tests -- highest
    Integration tests
    Unit tests -- lowest and for bulk testing

## RTL Philosophy

"The more your tests resemble the way your software is used, the more confidence they can give you."

Tests we are going to learn to write in this series strike a balance between unit tests in the sense they are at a component level and easy to write and maintain and E2E tests in the sense they resemble the way a user would interact with the component

With React Testing Library, we are not concerned about the implementation details of a component. Instead we are testing how the component behaves when a user interacts with it.

RTL will not care if you add 4+4 or 5+3 to display the number 8

Refactoring will not affect your test as long as the end result is the same
