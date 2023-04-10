import React from 'react';

const Blog = () => {
    return (
        <div className='m-10'>
            <div className="card w-full h-auto bg-base-100 m-auto shadow-xl">
            <div className="card-body">
                <h2 className="card-title">Ques 1: Why should we use context api?</h2>
                <p>Ans: An efficient approach for a React project to create global variables that can be passed around is through the React Context API. The alternative to "prop drilling" or passing along props from grandma to child to parent and so on is to do this. Context is also promoted as a simpler, lighter method of managing states using Redux.</p>
                <h2 className="card-title">Ques 2: What is Custom hook?</h2>
                <p>Ans: A custom hook is a special JavaScript function whose name starts with use and can be used to call other hooks. The main reason to write a custom hook is for code reusability. For example, instead of writing the same code across multiple components that use the same common stateful logic, you can put that code inside a custom hook and reuse it.</p>
                <h2 className="card-title">Ques 3: What is useRef and how does it work?</h2>
                <p>Ans: A built-in React hook called useRef(initialValue) accepts one argument as the initial value and returns a reference. An object with the unique property current is referred to as a reference.</p>
                <h2 className="card-title">Ques 4: What is useMemo and how does it work?</h2>
                <p>Ans: A resource-intensive function that has been supplied to useMemo() returns a memoized version of the value. By removing repetitive, complicated computations, it helps to improve a React component's speed.</p>
                
            </div>
        </div>
        </div>
    );
};

export default Blog;