# Millionaire

## For user

To play the game just click [here](https://ev1ch.github.io/millionaire/).

## For developer

### Installation

To install the application follow the steps bellow:

-   Run `git clone https://github.com/Ev1ch/millionaire.git`
-   Enter the directory with application in console using `cd`
-   Run `npm install`
-   Run `npm start`
-   Go to [http://localhost:3000](http://localhost:3000) in browser

### Used stack

-   Languages: `TypeScript`
-   Framework: `React`
-   Styles: `SCSS`
-   Routing: `React Router`
-   Tools:
    -   `Husky`
    -   `Commitlint` _(Angular convention)_
    -   `ESlint` _(Arbnb options)_
    -   `Prettier` _(Custom options)_
-   Other:
    -   `CLSX`

### Architecture

Sources structure:

-   `assets` - media files, photos, icons, etc.
-   `common` - constants and enums, which are used to replace "magic" values
-   `components` - basic components and pages, which are built from them. Just a vizualizing layer
    -   `router` - core application router
-   `configs` - configuration files for application
-   `containers` - high-level application logic. Containers passes props to pages
-   `context` - core application context with important data
-   `domain` - core entities, which are used in application, for example question, answer, etc.
-   `helpers` - small function, which are used to simplify other operations
-   `services` - business logic layer
-   `styles` - root styles, variables and other

### Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits.You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode. See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes. Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (`webpack`, `Babel`, `ESLint`, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

#### `npm run prepare`

The script, which is automatically run after installation, and installs `Husky`.

#### `npm run prettier`

The script runs `Prettier` for style checks without fixing errors.

#### `npm run prettier:fix`

The script runs `Prettier` for style checks and tries to fix errors.

#### `npm run eslint`

The script runs `ESlint` for static code analysis without fixing errors.

#### `npm run eslint:fix`

TThe script runs `ESlint` for static code analysis and tries to fix errors.

#### `npm run predeploy`

The script, which is automatically run before deploy, and builds application.

#### `npm run deploy`

The script deploys application to [Github Pages](https://ev1ch.github.io/millionaire/).
