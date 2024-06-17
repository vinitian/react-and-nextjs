# How to use Next.js
[how to](https://nextjs.org/learn/react-foundations/installation)

- `export default` : help Next.js distinguish which component to render as the main component of the page.

- file `layout.js` : automatically created inside the app folder. This is the main layout of your application. You can use it to add UI elements that are shared across all pages (e.g. navigation, footer, etc).



# Server Component vs. Client Component

typically react renders on the server, but there are some components that needs to be rendered on the client side, e.g. the like button.

to make the a component.jsx file a Client Component, add the React `'use client';` directive at the top of the file. This tells React to render the component on the client.

then, import the component to the main `page.jsx`
