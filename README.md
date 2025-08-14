# 📚 Advanced React Patterns Used

## 1. **Compound Components Pattern**
The **Compound Components** pattern lets you create a set of components that work together, giving developers a flexible and declarative API.

**How It Works in This Project:**
The `Accordion` is the parent component, and it exposes subcomponents such as:
- `Accordion.Item`
- `Accordion.Title`
- `Accordion.Content`

These subcomponents share internal state through React’s **Context API** (or props drilling), so they can communicate without explicitly passing props in every call.

**Example:**
```jsx
<Accordion>
  <Accordion.Item id="experience">
    <Accordion.Title>We got 20 years of Experience.</Accordion.Title>
    <Accordion.Content>
      <p>We have been planning vacations for over 20 years.</p>
    </Accordion.Content>
  </Accordion.Item>
</Accordion>
```

**Benefits:**
- Clear, **declarative syntax**.
- More **flexibility**: developers can mix and match subcomponents.
- Avoids large prop objects and makes code **self-documenting**.

---

## 2. **Render Props Pattern**
The **Render Props** pattern allows components to share code by passing a function as a child, giving complete control over rendering logic.

**How It Works in This Project:**
The `SearchAbleList` component uses **render props** so that the caller decides **how each item is rendered**.

**Example:**
```jsx
<SearchAbleList items={PLACES} itemKeyFn={(place) => place.id}>
  {(place) => <Place item={place} />}
</SearchAbleList>
```
Here:
- `SearchAbleList` handles the search/filter logic.
- The function `(place) => <Place item={place} />` is passed as `children`.
- This function is called for every filtered item, letting you render **any JSX** you want.

**Benefits:**
- **Maximum flexibility** — parent decides UI for each list item.
- Reusable logic — filtering/searching is separate from rendering.

---

✅ **In Summary**:  
- **Compound Components** make your UI API **declarative** and organized.  
- **Render Props** separate **logic from presentation**, enabling highly customizable UIs.

<img width="1512" height="982" alt="Screenshot 2025-08-13 at 11 02 24 PM" src="https://github.com/user-attachments/assets/2a468669-0957-4d93-a49f-ec56e60bef17" />
<img width="1512" height="982" alt="Screenshot 2025-08-13 at 11 02 32 PM" src="https://github.com/user-attachments/assets/77ccea9f-1d59-402a-8609-15b8d95e6ff9" />