# State
= any information in your UI that changes over time, usually triggered by user interaction

- https://nextjs.org/learn/react-foundations/updating-state

# Listening to events

event names
- `onClick` for buttons
- `onChange` for input fields
- `onSubmit` for forms.

the conventional function name for event handlers are `handleClick`, `handleChange`, `handleSubmit`, etc.



# Event propagation

Event handlers will also catch events from any children your component might have. We say that an event “bubbles” or “propagates” up the tree: it starts with where the event happened, and then goes up the tree.

e.g. a `<button>` is a child of `<div>`. both components have `onClick` which displays alert(). when the button is clicked, its `onClick` will run first, followed by the parent `<div>`’s `onClick`. You can stop event propogation (to div) by using `e.stopPropagation()` *then* call `alert()`.

- **e.stopPropagation()** stops the event handlers attached to the tags above from firing.
- **e.preventDefault()** prevents the default browser behavior for the few events that have it.

[react guide](https://react.dev/learn/responding-to-events#event-propagation)



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


# Sharing State Between Components

Sometimes, you want the state of two components to always change together. This is known as **lifting state up**.

To coordinate two children components, you need to “lift their state up” to a parent component in three steps:

1. **move** their state to their common parent.
2. pass the information down through **props** from their common parent.
3. pass the **event handlers** down so that the children can change the parent’s state.

When writing a component, consider which information in it should be controlled (via props), and which information should be uncontrolled (via state). But you can always change your mind and refactor later.

- example: see file `lifting-state-up-example.jsx`

[react guide](https://react.dev/learn/sharing-state-between-components)
















# What is `e.target.value`?
> [(link to post)](https://stackoverflow.com/questions/71039088/what-is-onchange-e-setnamee-target-value-in-react-mean) First you have `e` which is short for `event`. To understand what it does change `onChange={(e) => setName(e.target.value)}` to `onChange={(e) => console.log(e)}`. Inspect the log and you'll find a list of events in which one of them is `target`. Open target (if not already opened) and within target, you'll find `value`. In short, this is the target value that's being typed in your input, it's **what the user is typing**.