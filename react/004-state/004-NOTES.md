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



# Preserving and Resetting State (how state works)

- state is tied to a position in the render tree; React preserves a component’s state for as long as it’s being rendered at its position in the UI tree.
- If the component gets removed, or a different component gets rendered at the same position, React discards its state.
- You can force a subtree to reset its state by giving it a different key. (even though the component is still in the same position, diff key = diff component = state resetted)
- Don’t nest component definitions, or you’ll reset state by accident.

[react guide](https://react.dev/learn/preserving-and-resetting-state)

















# What is `e.target.value`?
> [(link to post)](https://stackoverflow.com/questions/71039088/what-is-onchange-e-setnamee-target-value-in-react-mean) First you have `e` which is short for `event`. To understand what it does change `onChange={(e) => setName(e.target.value)}` to `onChange={(e) => console.log(e)}`. Inspect the log and you'll find a list of events in which one of them is `target`. Open target (if not already opened) and within target, you'll find `value`. In short, this is the target value that's being typed in your input, it's **what the user is typing**.