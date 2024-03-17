# Sorgulat Monorepo

This Turborepo includes the following packages/apps:

### Apps and Packages

- `web-landing`: a [Next.js](https://nextjs.org/) app for Sorgulat main landing pages. Works on port `localhost:3021`
- `seo-blog`: another [Next.js](https://nextjs.org/) app for Sorgulat seo blog pages. Works on port `localhost:3022`
- `panel`: another [Next.js](https://nextjs.org/) app for Sorgulat customer panel. Works on port `localhost:3023`
- `sorgulat-core`: another [Express.js] app for Sorgulat core service. Works on port `localhost:3024`
- `@sorgulat/ui-lib`: a ui library used by applications under the apps folder.
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`).
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo.

### CoreAPI Swagger Docs

`http://localhost:3024/v1/docs/`

### Develop

To develop all apps and packages, run the following command:

```
cd sorgulat
yarn dev
```

### Build

To build all apps and packages, run the following command:

```
cd sorgulat
yarn build
```