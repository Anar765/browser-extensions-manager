# Frontend Mentor - Browser extensions manager UI solution

This is a solution to the [Browser extensions manager UI challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/browser-extension-manager-ui-yNZnOfsMAp). 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Toggle extensions between active and inactive states
- Filter active and inactive extensions
- Remove extensions from the list
- Select their color theme
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Links

- Solution URL: (https://github.com/Anar765/browser-extensions-manager)
- Live Site URL: (https://browser-extensions-manager-swart.vercel.app)

## My process
Additionally, I learned how to implement theme switching (dark/light mode) using context and custom hooks — improving user experience and personalization.

```js
const { darkMode } = useTheme();
```
### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

During this project, I gained practical experience with key React concepts such as `useState` for managing component state, `props` for passing data between components, and `useEffect` for handling side effects like data fetching. I also explored the basics of `accessibility` (a11y) and learned how important it is to make web interfaces usable for all users, including those with disabilities. Although this project doesn't yet fully implement accessibility best practices, I now understand their value and plan to apply them in future work.

**The Examples:**

- `useState`

```js
const [cards, setCards] = useState([]);
const [stage, setStage] = useState("all");
```

- `useEffect` 

```js
useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((json) => setCards(json))
      .catch((err) => console.error('Error loading JSON:', err));
  }, []); 
```

- `props`

`Main.jsx`

```js

<Card
  key={index}
  id={index}
  logo={card.logo}
  name={card.name}
  description={card.description}
  isActive={card.isActive}
  func={toggle}
  RemoveCard={RemoveCard}
/>

```

`Card.jsx`

```js

const Card = (props) => {
  ...
}

```

Additionally, I learned how to implement theme switching (dark/light mode) using context and custom hooks — improving user experience and personalization.

```js
const { darkMode } = useTheme();
```

### Continued development

Next time, I’ll focus on writing cleaner and more readable code, and I plan to improve accessibility (a11y) in future projects — including clearer phrasing and better semantic structure.

I also plan to add a dialog window to confirm when a user wants to remove a card. Additionally, I’d like to include options such as saving card data to localStorage, so users can restore or add cards later.

### Useful resources

- [Learn React JS - Full Beginner’s Tutorial & Practice Projects](https://youtu.be/x4rFhThSX04?si=9MPQ3gcPI9H-hLer) - 
This was an excellent course where I learned a lot about React and had the chance to practice my knowledge through hands-on projects. I highly recommend this video to anyone starting out with React.

## Author

- Website - [https://browser-extensions-manager-swart.vercel.app](https://browser-extensions-manager-swart.vercel.app)
- Frontend Mentor - [@Anar765](https://www.frontendmentor.io/profile/Anar765)
