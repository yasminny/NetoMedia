Link:
=====
https://broken-cannon-8517.roast.io/

Practical Exam, React JS
========================

Create a single page application (SPA),using React JS, which will serve as a home ("lobby")page.The layout should be a simple HTML page, containing:

- A label text saying "Welcome to the Netomedialobby" 
- A login button.

When clicking the"login"button: Amodalpopupshould open (on top of the lobby page), This popup should contain the following:
- A close(X) button, 
- Aform with the following fields:
   - "Name"–edit box
   - "Amount"-edit box
   - "Currency" -Combo boxwith 2 options –"Euro" and "Dollar"
   - "Submit"-button.
   
 When clicking the "submit"button, you should validate that:
 1. The input fields are not empty(all fields are mandatory)
 2. An option is selected in the combo box.
 3. The "Name" field is a string,with max length of minimum 5 characters, maximum 15characters, where only: [English characters, space, "-"] are allowed.
 4. The "Amount"field is aninteger,with max length of 15characters, only numbers are allowed.
 
 After submitting thevalidated form:
 - The modal popup should close,
 - The lobby text should changeinto: "Welcome back {Name}, your balance is:{Amount} {CurrencySign}"Where:
   - {Name}-the value fromthe "Name" input field
   - {Amount}-the value fromthe "Amount" input field
   - {CurrencySign}-a sign (€ or $) mappedto the currency combo box
 - The button text should now say:"change balance".
 
 When clicking the "change balance" button-a modalpopup should open.This popup should have:
 - A close (X) button
 - A form with the following fields:
   - "Amount"-an integer,with max length of 15characters, only numbers are allowed.
   - A submit button.
   
 When pressing the submit button:
 - The popup is closed
 - The lobby text "balance"is changed to reflect the new "Amount" value


Features
----------

- Webpack 2
  - Transpiles `.js` files using Babel (settings in `.babelrc`)
  - Transpiles `.scss` files using node-sass
  - ESLint - Lints `js` files on changes (rules in `.eslintrc`)
  - Stylelint - Lints `scss` files on changes (rules in `.stylelintrc`)
  - PostCSS plugins (settings in `postcss.config.js`)
    - Autoprefixer (supported browsers list in `browserslist` file)
  - Dynamic `index.html` generation
  - Dynamic build file names with hash for cache busting
- React
  - React Hot Loader v3
  - React Router v4
    - HTML5 History API (non hash routes)

Getting Started
----------------

1. Install Node.js (choose Current)
    - From [nodejs.org](https://nodejs.org/) (All platforms)
    - Or using [Homebrew](http://blog.teamtreehouse.com/install-node-js-npm-mac) (Mac)
    - Or any other [package manager](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager)
1. `git clone` or [Download](https://github.com/alexilyaev/react-es6-starter/archive/master.zip) this repo
    - If using clone, remove the `.git` folder and [init a new Git repo](https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/)
1. Install dependencies (at the root of the repo):

    ```
    npm install
    ```

Development
------------

#### Run webpack-dev-server

```
npm start
```

- Open `http://localhost:8080`

Build the project for deployment
---------------------------------

```
npm run build
```

- Must use a server that redirects missing routes back to `index.html`

### To run the build locally

```
npm i -g live-server
cd dist/
live-server --entry-file=index.html
```
