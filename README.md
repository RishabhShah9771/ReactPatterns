# React Patterns.

This is a demo React project designed to showcase fundamental concepts, common patterns, and advanced component patterns like **Compound Components** and **Render Props**. It serves as a reference for best practices in modern React development.

---

## Table of Contents

- [Concepts in this Demo Project](#concepts-in-this-demo-project)  
- [Common Patterns and Practices](#common-patterns-and-practices)  
- [Advanced Component Patterns](#advanced-component-patterns)  
  - [Compound Components](#compound-components)  
  - [Render Props](#render-props)  
- [Other Advanced Patterns](#other-advanced-patterns)  
- [Getting Started](#getting-started)

---

## Concepts in this Demo Project

This project demonstrates the following key React concepts:

- **Components**: Functional components and component composition.  
- **State & Hooks**: Using `useState` and `useEffect` for dynamic data and side effects.  
- **Props**: Passing data from parent to child components.  
- **Conditional Rendering**: Displaying UI elements based on conditions.  
- **Lists & Keys**: Rendering dynamic lists with proper keys.  
- **Event Handling**: Handling user interactions with events.  
- **Forms & Controlled Components**: Handling user input via controlled components.  
- **Component Composition**: Building complex UI by combining multiple components.

---

## Common Patterns and Practices

- **Container / Presentational Pattern**: Separates logic and UI.
- **Higher-Order Components (HOC)**: Reusable functions that enhance components.
- **Custom Hooks**: Encapsulate reusable logic like counters, fetchers, etc.
- **Context API**: Global state management without prop drilling.

**Example: Custom Hook**
```jsx
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
  const increment = () => setCount(c => c + 1);
  return { count, increment };
}

function Counter() {
  const { count, increment } = useCounter();
  return <button onClick={increment}>Count: {count}</button>;
}
```

---

## Advanced Component Patterns

### Compound Components
Allows a parent component to manage the state of its sub-components.  

**Example: Tabs**
```jsx
function Tabs({ children }) {
  const [activeIndex, setActiveIndex] = useState(0);
  return React.Children.map(children, (child, index) => {
    return React.cloneElement(child, {
      isActive: index === activeIndex,
      onSelect: () => setActiveIndex(index)
    });
  });
}

function Tab({ isActive, onSelect, label }) {
  return (
    <button style={{ fontWeight: isActive ? 'bold' : 'normal' }} onClick={onSelect}>
      {label}
    </button>
  );
}

<Tabs>
  <Tab label="Home" />
  <Tab label="Profile" />
  <Tab label="Settings" />
</Tabs>
```

### Render Props
Share code between components using a function prop.  

**Example: Mouse Tracker**
```jsx
function Mouse({ render }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e) => setPosition({ x: e.clientX, y: e.clientY });
  return <div style={{ height: '100vh' }} onMouseMove={handleMouseMove}>
    {render(position)}
  </div>;
}

<Mouse render={({ x, y }) => (
  <p>Mouse position: ({x}, {y})</p>
)} />
```

---

## Other Advanced Patterns

- **Controlled vs Uncontrolled Components**: React-managed vs browser-managed input state.  
- **Portals**: Rendering components outside DOM hierarchy (e.g., modals).  
- **Lazy Loading / Code Splitting**: Dynamically load components for performance.
```jsx
const LazyComponent = React.lazy(() => import('./MyComponent'));
<React.Suspense fallback={<div>Loading...</div>}>
  <LazyComponent />
</React.Suspense>
```

---

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/react-demo-project.git
cd react-demo-project
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view the project in the browser.

---

This project serves as a learning reference for **React fundamentals, patterns, and advanced component techniques**.