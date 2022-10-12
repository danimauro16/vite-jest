## Install and configure Jest in Vite project 

Create react/typescript app with Vite.

`yarn create vite`

Set a name and select React and typescript

`cd "project" && yarn && yarn dev`

## Install Jest

`yarn add -D jest jest-environment-jsdom ts-node ts-jest @types/jest`

## Jest configurations

Modify your `package.json` with this:

```json
{
  "name": "example1",
  "version": "0.0.0",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "serve": "vite preview",
    "test": "jest --watchAll"
  }
}
```

Create in the root of project the `jest.config.ts` file and paste de follow;

```javascript
import type { Config } from "jest";

const config: Config = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};
export default config;
```
Create another file in the root of project with the name `jest.setup.ts` and paste the follow code:

```javascript
import '@testing-library/jest-dom';
```

## Config Jest when run React components

It is necessary to install the follow:

`yarn add -D @testing-library/jest-dom @testing-library/react @testing-library/user-event`

## Create a first test

Create a `components` folder also create `Home.tsx` file and paste the follow

```javascript
export const Home = () => {
  return (
    <h1>Hi i am home</h1>
  )
}
```
Create `Home.test.tsx` and paste the follow:

```javascript
import { render, screen } from '@testing-library/react';
import { Home } from "./Home";

test('should render home component correctly', () => {
  render(<Home />);
  expect(screen.getByText(/Hi i am hom/i)).toBeInTheDocument();
});
```

Run `yarn test` and check your console
