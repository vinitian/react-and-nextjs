# Components

- https://nextjs.org/learn/react-foundations/building-ui-with-components
- A component is a function that returns UI elements. Inside the return statement of the function, you can write JSX
- React components should be capitalized to distinguish them from plain HTML and JavaScript:
```jsx
function Header(){
    return thing;
}
```
- you use React components the same way you'd use regular HTML tags, with angle brackets `<>`:
```jsx
root.render(<Header />); // ✅️ :D
root.render(Header); // ❌️ :C
```

- You can **nest** React components inside each other like you would regular HTML elements (see `Header()`)