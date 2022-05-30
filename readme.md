# Why? What? Where?

App for collecting crypto transactions, calcualating pnl and other activiteis but it is still a mess.

# USAGE

You should copy `.env.sample` to `.env` and then:

`npm run build` - Builds the server.

`npm run clean` - Remoev build leftovers.

`npm run lint` - Check code for consistency.

`npm run format` - Fix code for consistency.

`npm run dev` - Run the development server.

`npm run test` - Run tests.


```javascript
// example migration generate command

knex migrate:make <table_name> --knexfile src/knexfile.ts --env <env_name>

// migration run command

knex migrate:latest --knexfile src/knexfile.ts --env development
```