# Bookings API

Meetingpackage.com allows customers to make bookings to different venues around the world.
The purpose of the task is to create a simple API which returns all the booking the customer 
has created in chronological order. There could be 100s of booking for a customer so pagination 
is needed for the api.

---

## Requirements

For development, you will only need Node.js and a node global package, Yarn, installed in your enviroanment.

### Node

-   #### Node installation on Windows

    Just go on [official Node.js website](https://nodejs.org/) and download the installer.
    Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).


If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

If you need to update `npm`, you can make it using `npm`, After running the following command, just open again the command line.

    $ npm install npm -g

###

### Yarn installation

After installing node, this project will need yarn too, so just run the following command.

      $ npm install -g yarn

---

## Install

    $ git clone https://github.com/snurfer0/booking-backend.git
    $ cd booking-backend
    $ yarn install

## Configure app environment variables

Create a `.env` file in the project root and set the following environment variables:


-   DB_NAME="booking" 
-   DB_USER="root"
-   DB_PASSWORD="YOUR_PASSWORD"
-   DB_HOST="127.0.0.1"
-   DB_DIALECT="mysql"
-   OPERATORS_ALIASES=false
-   POOL_MAX=5
-   POOL_MIN=5
-   POOL_ACQUIRE=60000
-   POOL_IDLE=5
-
-   ALLOWED_ORIGIN='http://localhost:3000'

## MySqlServer

You should have the mysql server installed in order to run the program.

https://www.microsoft.com/en-us/sql-server/sql-server-downloads

## Seeding the Database

The project root has a directory called seeders with files that must be run to populate the database.

Run the following commands

```
$ yarn sequelize-cli db:seed --seed 20220217083003-users
$ yarn sequelize-cli db:seed --seed 20220217083206-events
$ yarn sequelize-cli db:seed --seed 20220217095330-eventusers
$ yarn sequelize-cli db:seed --seed 20220217091523-addresses
$ yarn sequelize-cli db:seed --seed 20220217083154-bookings
```

## Running tests

    $ yarn test

## Running the project

    $ yarn start

## Simple build for production

    $ yarn build

## Database ER Diagram

![er-diagram](./docs/er-diagram.png)
