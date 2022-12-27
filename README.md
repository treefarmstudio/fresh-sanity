# Fresh + Sanity Demo

This is a demo using Deno's [Fresh](https://fresh.deno.dev) and [Sanity](https://www.sanity.io/).

It includes a skeleton Sanity Studio using v3 for you to create your own schemas.

## Fresh

If you have a sanity project already copy the .env.template to a .env file then add your project id, dataset, and api version.

Start the fresh server:

```
cd fresh

deno task start
```

This will watch the project directory and restart as necessary.

## Sanity

You can learn more about Sanity [here](https://www.sanity.io/docs).

Initialize a Sanity project:

```
cd sanity

npx sanity init
```

Start the Sanity Studio:

Add your own schemas to `sanity/schemas` and start the studio:

```
cd sanity

npx sanity dev
```
