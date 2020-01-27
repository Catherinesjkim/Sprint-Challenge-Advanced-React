- [X] Why would you use class component over function components (removing hooks from the question)? 

 Class components make use of ES6 class and extend the Component class in React. Sometimes called “smart” or “stateful” components as they tend to implement logic and state. React lifecycle methods can be used inside class components (for example, componentDidMount). You pass props down to class components and access them with this.props. If your components need more functionality, like keeping state, use classes instead

- [X] Name three lifecycle methods and their purposes.

1. Mounting - Birth of your component: componentDidMount() is called as soon as the component is mounted and ready. This is a good place to initiate API calls, if you need to load data from a remote endpoint. Will update the state and cause another rendering but it will happen before the browser updates the UI. This is to ensure that the user will not see any UI updates with the double rendering. 

2. Update - Growth of your component: the lifecycle method is invoked as soon as the updating happens. The most common use case for the componentDidUpdate() method is updating the DOM in response to prop or state changes. 

3. Unmount - Death of your component: this is called just before the component is unmounted and destroyed. If there are any cleanup actions that you would need to do, this would be the right spot. You cannot modify the component state in componentWillUnmount lifecycle. 

- [X] What is the purpose of a custom hook?

They let you use state and other React features without writing a class. Building your own Hooks lets you extract component logic into reusable functions. These are normal JS functions which can use other hooks inside of it and contain a common stateful logic that can be reused within multiple components. These functions are prefixed with the word use. 

- [X] Why is it important to test our apps?

We write tests to be confident that our application will work when the user uses them. Think less about the code you are testing and more about the use cases that code supports. Thinking about use cases gets us closer to writing tests the way the user uses the applications. 
