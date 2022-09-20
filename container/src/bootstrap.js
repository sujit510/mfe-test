import * as React from 'react';
import ReactDOM from 'react-dom';
import { renderFn } from 'header/HeaderComponent';

function App() {
    const ref = React.useRef(null);
    React.useEffect(() => {
        // window.renderFn(ref.current);
        renderFn(ref.current);
    }, []);
    return (
        <>
            <div ref={ref}></div>
            <h1>Welcome to the Micro Frontend Container i.e. Host App</h1>
            <h4>
                This imports exposed Header module function from -
                http://mfe-react-guest.sujitsingh.in/
            </h4>
        </>
    );
}

window.containerContext = true;

ReactDOM.render(<App />, document.querySelector('#root'));
