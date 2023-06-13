import React from 'react';

const Blogs = () => {
    return (
        <>
            <div className='bg-violet-100'>
                <div className='job-container text-center py-10'>
                    <h1 className='font-bold text-2xl'>Question and answer</h1>
                </div>
            </div>
            <div className='job-container py-6'>
                <h1 className='font-bold text-xl'>Question-1: When should you use context API?</h1>
                <p><b>Ans:</b> Context API should be used when i have data that needs to be shared between multiple components and i want to avoid prop drilling or passing props down the component tree. However, it's important to note that overuse of Context API can lead to a complex and difficult-to-manage application, so it should be used judiciously.</p>
            </div>
            <div className='job-container py-6'>
                <h1 className='font-bold text-xl'>Question-2: What is a custom hook?</h1>
                <p><b>Ans:</b> A custom hook in React is a JavaScript function that allows to reuse stateful logic across multiple components. Custom hooks can be created by extracting common logic that use across different components into a reusable function. This function can then be imported and used in any component that needs that logic.By using a custom hook, can be avoid duplicating code across multiple components and keep your code organized and reusable. </p>
            </div>
            <div className='job-container py-6'>
                <h1 className='font-bold text-xl'>Question-3: What is useRef?</h1>
                <p><b>Ans:</b> useRef is a built-in hook in React that provides a way to create a mutable reference to an element or a value that persists across renders. It returns a JavaScript object with a current property that can be used to store and access the current value of the reference.
                The useRef hook is commonly used to, Access DOM elements and Store mutable values.</p>
            </div>
            <div className='job-container py-6'>
                <h1 className='font-bold text-xl'>Question-4: What is useMemo?</h1>
                <p><b>Ans:</b> useMemo is a built-in hook in React that allows you to memoize the result of a function, so that the function is only re-evaluated when one of its dependencies changes. It's similar to the React.memo higher-order component, but it works for functions rather than components.</p>
            </div>
        </>
    );
};

export default Blogs;