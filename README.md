# Expensify

This site is built with React, making use of the Firebase database for user authentication and keeping track of any expenses a user adds, updates or deletes.

## Installation

### Clone

Clone this repository to your machine using https://github.com/MMacdonald07/Expensify.git

### Setup

Use the package manager npm to install prerequisite node modules so the program can run:

```bash
npm install
```

## Usage

To open the program ordinarily on your device:

```bash
npm run start
```

Developer mode can also be used - this will run the script with nodemon so the server is restarted upon saving a .js file:

```bash
npm run dev-server
```

From here, load localhost:3000 \(default port is set to 3000\) on your browser to view the site.

Finally, test suites are available through Jest if the user wishes to add any new features and test them out beforehand by adding new tests to ./src/tests. These suites can be run using:

```bash
npm run test
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
Please make sure to update tests as appropriate.
