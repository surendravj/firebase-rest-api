[![npm version](https://badge.fury.io/js/angular2-expandable-list.svg)](https://badge.fury.io/js/angular2-expandable-list)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

# firebase-rest-api

> Simple firebase interface that's build on typescript to ease usage of firebase services

## Prerequisites

This project requires NodeJS (version 8 or later) and NPM.
[Node](http://nodejs.org/) and [NPM](https://npmjs.org/) are really easy to install.
To make sure you have them available on your machine,
try running the following command.

```sh
$ npm -v && node -v
6.4.1
v8.16.0
```

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Installation

Start with installing the package in to your project

```sh
npm i firebase-rest-api
```

#### Getting started

| Service                  | Description                                                                                   |
| ------------------------ | --------------------------------------------------------------------------------------------- |
| Firestore                | NoSQL database built for global apps                                                          |
| Storage (Soon)           | Store and retrieve user-generated files like images, audio and video without server-side code |
| Realtime Database (soon) | Store and sync data in real time                                                              |

If present, the request will be performed as soon as the component is mounted

Example:

```tsx
import {FirebaseConfig} from 'firebase-rest-api';

 const config = {
    "project_id": "xxxxxxxxx-7e32a",
    "private_key": "-----BEGIN PRIVATE KEY-----xxxx==\n-----END PRIVATE KEY-----\n",
    "client_email": "firebasxxxxxxxxxxxxxxxxxxxxxxxxxxccount.com",
}

new FirebaseConfig(config);
```

Firestore
Example:

```tsx
import {Firestore} from 'firebase-rest-api';

const firestore=new Firestore();

firestore.createDocumentByPath("path","data");

firestore.createDocumentWithId("collection","uid","data");

firestore.createDocumentwithAutoId("collection","data");

firestore.readCollection("collection");

firestore.readDocumentById("collection","uid");

firestore.readDocumentByPath("path");

firestore.updateDocumentById("collection","uid","data");

firestore.updateDocumentByPath("path","data");

firestore.deleteDocumentById("collection","uid");

firestore.deleteDocumentByPath("path");

```



## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

1.  Fork it!
2.  Create your feature branch: `git checkout -b my-new-feature`
3.  Add your changes: `git add .`
4.  Commit your changes: `git commit -am 'Add some feature'`
5.  Push to the branch: `git push origin my-new-feature`
6.  Submit a pull request :sunglasses:

## Credits

TODO: Write credits

## Built With

Typescript - Programming Langauge
Nodejs - Server Environment
NPM - Packages
Firebase - Backend


.

## About Author

- @Initial work_ - [Surendra Vadaparthy](https://github.com/surendravj)

- @Linkedin_ - [Connect](https://www.linkedin.com/in/surendra-vadaparthy-07b145193/)

- @Portfolio - [View](https://surendravj.github.io/Myportfolio/)


