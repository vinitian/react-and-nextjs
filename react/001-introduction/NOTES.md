# React
React is a framework to help write javascript easier without having to do the hard work yourself. it\'s like making a whole pizza javascript vs ordering one javascript + react
- React is a library that contains reusable snippets of code that perform tasks on your behalf - in this case, updating the UI.

# Getting started
- to use react:
```javascript
        <script src=https://unpkg.com/react@18/umd/react.development.js></script>
        <script src=https://unpkg.com/react-dom@18/umd/react-dom.development.js></script>
```
- javascript compiler to transform JSX -> javascript
```javascript
        <script src=https://unpkg.com/@babel/standalone/babel.min.js></script>
```
# JSX
- the thing in root.render
- needs javascript compiler e.g. Babel to change JSX -> javascript so browsers can read understand
- transform javascript -> JSX website: https://transform.tools/html-to-jsx

## JSX rules 
[JSX rules]https://react.dev/learn/writing-markup-with-jsx#the-rules-of-jsx
- return a single root element
    - e.g. everything must be wrapped under `<div></div>` or `<></>` fragment
- close all the tags
    - e.g. `<img>` -> `<img />`✅️
    - e.g. `<br>` -> `<br />`✅️
    
- camelCase
    - `stroke-width` -> `strokeWidth`✅️
    - Since `class` is a reserved word, in React you write `className` instead
        - The name `className`✅️ is used for this property instead of `class` because of conflicts with the class keyword in many languages which are used to manipulate the DOM. [x]https://developer.mozilla.org/en-US/docs/Web/API/Element/className#notes