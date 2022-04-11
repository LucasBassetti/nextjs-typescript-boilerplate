
This is a [Next.js](https://nextjs.org/) boilerplate created based in [this boilerplate](https://github.com/React-Avancado/boilerplate)

This project uses lot of stuff as:

- [TypeScript](https://www.typescriptlang.org/)
- [NextJS](https://nextjs.org/)
- [Styled Components](https://styled-components.com/)
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- [Storybook](https://storybook.js.org/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Husky](https://github.com/typicode/husky)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Folder Strucutre

The following aspects were used to create the folder structure

```
↳ @types                            # extension types (not related to application types)
  ...
↳ src                               # sources
  ↳ components                      # shared components used in the pages templates
    ↳ complex                       # mixin of data display and input components
      ↳ {ComponentName}             # component name with CamelCase
        ↳ index.tsx                 # element
        ↳ styles.ts                 # styles
        ↳ test.tsx                  # tests
    ↳ data_display                  # ui components without actions
      ↳ {ComponentName}             # component name with CamelCase
        ↳ index.tsx                 # element
        ↳ styles.ts                 # styles
        ↳ test.tsx                  # tests
    ↳ icons                         # icons
      ↳ {ComponentName}             # component name with CamelCase
        ↳ index.tsx                 # element
        ↳ styles.ts                 # styles
        ↳ test.tsx                  # tests
    ↳ forms                         # completed forms
      ↳ {ComponentName}             # component name with CamelCase
        ↳ index.tsx                 # element
        ↳ styles.ts                 # styles
        ↳ test.tsx                  # tests
    ↳ inputs                        # buttons, selects, text fields, etc
      ↳ {ComponentName}             # component name with CamelCase
        ↳ index.tsx                 # element
        ↳ styles.ts                 # styles
        ↳ test.tsx                  # tests
    ↳ placeholders                  # placeholders of components
      ↳ {ComponentName}             # component name with CamelCase
        ↳ index.tsx                 # element
        ↳ styles.ts                 # styles
        ↳ test.tsx                  # tests
    ↳ templates                     # generic templates used in multiple pages templates
      ↳ {ComponentName}             # component name with CamelCase
        ↳ index.tsx                 # element
        ↳ styles.ts                 # styles
        ↳ test.tsx                  # tests
  ↳ constants                       # application constants
    {filename}.tsx                  # some file with constants
    ...
  ↳ hocs                            # application hocs
    ...
  ↳ hooks                           # application hooks
    ↳ use{HookName}                 # application hook
      ↳ index.ts                    # hook function
      ↳ test.ts                     # hook tests
  ↳ layout                          # layout wrapper for all pages (header, etc.)
    ...
  ↳ page_templates                  # routes screens
    ↳ private                       # private screens
      ↳ ComponentTemplate           # route main component (don't create subfolder)
        ↳ components                # components used only in a specific route (see components)
        index.tsx                   # element
        styles.ts                   # styles
    ↳ public                        # public screens
      ↳ ComponentTemplate           # route main component (don't create subfolder)
        ↳ components                # components used only in a specific route (see components)
        index.tsx                   # element
        styles.ts                   # styles
  ↳ providers                       # application providers
    ↳ {ProviderName}Provider        # Provider component
      index.tsx                     # element
      styles.ts                     # styles
  ↳ styles                          # global styles and themes
    global.ts                       # global styles
    theme.ts                        # global themes
    ...
  ↳ utils                           # helper functions
    {filename}.tsx                  # some file with helper functions
    ...
```


## Commands

- `dev`: runs your application on `localhost:3000`
- `build`: creates the production build version
- `start`: starts a simple server with the build production code
- `generate`: generate component files
- `lint`: runs the linter in all components and pages
- `test`: runs jest to test all components and pages
- `test:watch`: runs jest in watch mode
- `storybook`: runs storybook on `localhost:6006`
- `build-storybook`: create the build version of storybook

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
