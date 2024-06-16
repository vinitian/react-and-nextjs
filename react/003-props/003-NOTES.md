# Props

- https://nextjs.org/learn/react-foundations/displaying-data-with-props
- https://react.dev/learn/passing-props-to-a-component

Regular HTML elements have attributes that you can use to pass pieces of information that change the behavior of those elements. For example, changing the src attribute of an <img> element changes the image that is shown. Changing the href attribute of an <a> tag changes the destination of the link.

In the same way, you can **pass pieces of information as properties to React components**. These are called **props**.



## using variables in JSX
- You can think of curly braces as a way to enter "JavaScript land" while you are in "JSX land". You can add any JavaScript expression (something that evaluates to a single value) inside curly braces.

```jsx
return <h1>{title}</h1>; //returns the variable
return <h1>title</h1>; //returns literally "title"
```

- An object property with dot notation:
```jsx
return <h1>{props.title}</h1>; ✅️
```

- a template literal:
```jsx
function Header({ title }) {
  return <h1>{`Cool ${title}`}</h1>; ✅️
}
```

- The returned value of a function:
```jsx
function createTitle(title) {
  if (title) {
    return title;
  } else {
    return 'Default title';
  }
}
 
function Header({ title }) {
  return <h1>{createTitle(title)}</h1>;
}
```

- ternary operators:
```jsx
function Header({ title }) {
  return <h1>{title ? title : 'Default Title'}</h1>;
}
```



## Specifying a default value for a prop

```jsx
function Avatar({ person, size = 100 }) {
  // ...
}
```

Now, if `<Avatar person={...} />` is rendered with **no** `size` prop, the `size` will be set to 100.

The default value is only used if the `size` prop is missing or if you pass `size={undefined}`. But if you pass `size={null}` or `size={0}`, the default value will not be used.




## Object destructuring
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
- examples:

```js
let a, b, rest;
[a, b] = [10, 20];

console.log(a); //10
console.log(b); //20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest); // Array [30, 40, 50]
```

```javascript
const x = [1, 2, 3, 4, 5];
const [y, z] = x;
console.log(y); // 1
console.log(z); // 2

```

## Forwarding props with the JSX spread syntax

Sometimes, passing props gets very repetitive:

```jsx
function Profile({ person, size, isSepia, thickBorder }) {
  return (
    <div className="card">
      <Avatar
        person={person}
        size={size}
        isSepia={isSepia}
        thickBorder={thickBorder}
      />
    </div>
  );
}
```

a more concise **“spread” syntax**:

```jsx
function Profile(props) {
  return (
    <div className="card">
      <Avatar {...props} />
    </div>
  );
}
```

This forwards all of Profile’s props to the Avatar without listing each of their names.

Use **spread syntax with restraint**. If you’re using it in every other component, something is wrong. Often, it indicates that you should split your components and pass children as JSX.




## Iterating through lists
- see NameList()
- uses array.map() and arrow function

```jsx
<ul>
    {names.map((name) => (
        <li>{name}</li>
    ))}
</ul>
```
Notice how you've used curly braces to weave in and out of "JavaScript" and "JSX" land.

If you run this code, React will give us a warning about a missing key prop. 

Keys tell React which array item each component corresponds to, so that it can match them up later. This becomes important if your array items can move (e.g. due to sorting), get inserted, or get deleted. A well-chosen key helps React infer what exactly has happened, and make the correct updates to the DOM tree.

You can use the names for now since they are currently unique, but it's recommended to use something guaranteed to be unique, like an item ID.

```jsx
<ul>
    {names.map((name) => (
        <li key={name}>{name}</li>
    ))}
</ul>
```

- read more about keys and todo's/not to do's: https://react.dev/learn/rendering-lists

> [!NOTE]
> keys are not globally unique. They only specify the position within the parent.

## Passing JSX as children

When you nest content inside a JSX tag, the parent component will receive that content in a prop called `children`. For example, the `Card` component below will receive a children prop set to `<Avatar />` and render it in a wrapper div:

- see `./test`

```jsx
function Card({children}) {
  return (
    <div className="card">
      <p>楠 夢羽</p>
      {children}
    </div>
  );
}

function Avatar() {
    return(
        <img alt="warukunaimon album art" width="30%" src="https://milgram.s3.amazonaws.com/uploads/public/636/a2b/b0d/636a2bb0d843b774772803.jpg"/>

    );
}

function Profile() {
  return (
    <Card>
      <Avatar />
    </Card>
  );
}
```

## Recap the above

- To pass props, add them to the JSX, just like you would with HTML attributes.
- To read props, use the function `Avatar({ person, size })` destructuring syntax.
- You can specify a default value like `size = 100`, which is used for missing and undefined props.
- You can forward all props with `<Avatar {...props} />` JSX spread syntax, but don’t overuse it!
- Nested JSX like `<Card><Avatar /></Card>` will appear as `Card` component’s `children` prop.
- Props are read-only snapshots in time: every render receives a new version of props.
- You can’t change props. When you need interactivity, you’ll need to **set state**.



## Conditional rendering

https://react.dev/learn/conditional-rendering

### using ternary operator (? :)

Instead of this:

```jsx
if (isPacked) {
  return <li className="item">{name} ✔</li>;
}
return <li className="item">{name}</li>;
```

You can write this:

- `{isPacked ? name + ' ✔' : name}` = “if isPacked is true, then (?) render name + ' ✔', otherwise (:) render name”

```jsx
return (
  <li className="item">
    {isPacked ? name + ' ✔' : name}
  </li>
);
```


### AND operator (&&)


“if isPacked, then (&&) render the checkmark, **otherwise render nothing**”.

```jsx
return (
  <li className="item">
    {name} {isPacked && '✔'}
  </li>
);
```

A JavaScript && expression returns the value of its right side (in our case, the checkmark) if the left side (our condition) is true


### using `let`

```jsx
  let itemContent = name;
  if (isPacked) {
    itemContent = name + " ✔";
  }
  return (
    <li className="item">
      {itemContent}
    </li>
  );
```
