# State
= any information in your UI that changes over time, usually triggered by user interaction

- https://nextjs.org/learn/react-foundations/updating-state

## Listening to events

event names
- `onClick` for buttons
- `onChange` for input fields
- `onSubmit` for forms.

# Hooks
= a set of functions allowing you to add additional logic such as **state** to your components

- `useState()` : the React hook used to manage state

The first item in the array (`likes`) is the state **`value`**, The second item in the array (`setLikes`) is a function to **`update`** the value

0 is the initial value of `likes`. (จริงๆ ไม่ต้องเขียนก็ได้ แต่อันนี้น่าจะเหมือน set default
)
```jsx
const [likes, setLikes] = React.useState(0);
```

Note: Unlike props which are passed to components as the first function parameter, the state is initiated and stored within a component. You can pass the state information to children components as props, but the logic for updating the state should be kept within the component where state was initially created.