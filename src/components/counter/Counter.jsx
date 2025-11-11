import { useEffect, useState } from "react";
import HeadingDivider from "../global/HeadingDivider";
import { Col, Container, Row } from "react-bootstrap";

const Counter = () => {

    console.log("again mount")


    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(c => c+1)
    }

    const decrement = () => {
        setCount(c => c-1)
    }

    useEffect(() => {
        console.log("mount")
        document.getElementById("brand").style.color = "pink"

        return () => {
            document.getElementById("brand").style.color = "black"
        }
    }, [])

  return (
    <>
      <HeadingDivider
        cloneHead="counter"
        heading="counter"
        para="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"
      />

      <Container>
            <h1>{count}</h1>

            <button type="button" className="primary" onClick={increment}>Increment</button>
            <button type="button" className="primary" onClick={decrement}>Decrement</button>

      </Container>
    </>
  );
};

export default Counter;
