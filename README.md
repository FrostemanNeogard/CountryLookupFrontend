# Country Lookup Frontend

This is a frontend client designed to work with the [Country Lookup Backend](https://github.com/FrostemanNeogard/CountryLookupBackend).

## Table of Contents
- [Introduction](#introduction)
- [Installation](#installation)
- [Packages Used](#packages-used)

## Introduction

The Country Lookup Frontend is a React-based client that provides a user-friendly interface for interacting with the Country Lookup API. It is intended to be used in conjunction with the [Country Lookup Backend](https://github.com/FrostemanNeogard/CountryLookupBackend).

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/FrostemanNeogard/CountryLookupFrontend.git
    cd CountryLookupFrontend
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Configure the application by updating the `config.ts` file with your base API URL.

4. Start the application:

    ```bash
    npm run dev
    ```

The application is accessible at `http://localhost:5173` by default, but this can be changed by modifying the `dev` script in the `package.json` file.

## Packages Used

- [sass](https://www.npmjs.com/package/sass)
- [styled-components](https://www.npmjs.com/package/styled-components)
- [react-router-dom](https://www.npmjs.com/package/react-router-dom)
- [redux](https://www.npmjs.com/package/redux)
- [redux-persist](https://www.npmjs.com/package/redux-persist)

For information on the API and backend setup, please visit the [Country Lookup Backend repository](https://github.com/FrostemanNeogard/CountryLookupBackend).
