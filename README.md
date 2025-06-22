# Two-Way Data Binding using Props in React

This branch demonstrates the concept of **two-way data binding** in React using props and state management between components.

## Concepts Covered

- **Two-way data binding**: Managing form input state and reflecting changes in the UI dynamically.
- **Lifting state up**: Passing form data from the child form component to the parent (`App.jsx`).
- **Props trailing**: Passing the updated data from the parent to the child (`Card.jsx`) to render the list of event cards.

## Implementation Details

- A **Form component** allows the user to input event details such as:
  - **Title**
  - **Date**
  - **Image URL**
- The form data is **lifted to the `App.jsx`** component using callback functions passed via props.
- The updated event data array in `App.jsx` is then **passed down as props to the `Card.jsx` component**, which displays the event details in a list format.
