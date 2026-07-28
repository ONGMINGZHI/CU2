import { useState, useEffect } from "react";

const Example = () => {
    const [count, setCount] = useState(0);
    const [anotherCount, setAnotherCount] = useState(0);
    const [oneMoreCount, setOneMoreCount] = useState(0);

    //   Alternative they call it side effects.

    // 1.第一种，没有dependency Array.只要render就会出现。
    useEffect(() => {
        //The code basically runs whenever a useState variable is changed.
        // Update the document title
        document.title = `You clicked me ${count} times`;
        console.log(`You clicked me ${count} times`);
    }); //This is what we call no dependency array
    //   Meaning it will run every time ANY useState variable detected change.

    //2.第二种，【prop,state],第一次会出现，过后prop有改变也会出现。
    useEffect(() => {
        console.log("I am only detecting changes for count variable");
        console.log(`Count was clicked ${count} times`);
    }, [count]); //<-That's your dependency array
    //Wrap it in sqaure brackets as if it's an array.

    //3.第三种，【】空的dependency array,只出现一次。
    useEffect(() => {
        console.log("This useEffect will ONLY run on the first load");
        console.log("No matter what variablies changes, I will not display this message again");
    }, []); //<-Put an empty dependency array after the curly brackets
    // REMEMBER!!!! to put your , (comma)

    //4.跟第二种蛮像的，可以detect多过一种useState variable,只要其中一个有改变就会出现。
    useEffect(()=>{
        console.log("This useEffect will only run If")
        console.log("count or oneMorecOunt detected any changes")
        console.log("Basically a useEffect can detect more than one useState variable change in the dependency array.")
    },[count, oneMoreCount]) //<-Put both count and oneMoreCount
    // In the dependency array to detect changes for both

    return (
        <div className="d-flex justify-content-center">
            <p>You clicked {count} times</p>
            <button className="btn btn-primary ml-3" onClick={() => setCount(count + 1)}>
                Click me
            </button>
            <p>You clicked the other {anotherCount} times</p>
            <button className="btn btn-primary ml-3" onClick={() => setAnotherCount(anotherCount + 1)}>
                Click me another
            </button>
            <p>You clicked One More Count {oneMoreCount} times</p>
            <button className="btn btn-primary ml-3" onClick={() => setOneMoreCount(oneMoreCount + 1)}>
                Click me One More Count
            </button>
        </div>
    );
};

export default Example;
