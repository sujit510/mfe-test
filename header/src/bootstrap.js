import * as React from 'react';
import ReactDOM from 'react-dom';
import GithubLogo from './github-logo.png';

function App() {
    return (
        <div
            style={{
                backgroundColor: 'yellow',
                height: '50px',
                width: '100%',
                textAlign: 'right',
                verticalAlign: 'middle',
            }}
        >
            <div style={{ padding: '10px' }}>
                <a
                    target={'_blank'}
                    href="https://github.com/sujit510/mfe-test/"
                    alt="Go to Github repo"
                >
                    <img src={GithubLogo} />
                </a>
            </div>
        </div>
    );
}

const renderFn = (rootEle) => {
    ReactDOM.render(<App />, rootEle);
};

// window.renderFn = renderFn;

if (!window.containerContext) {
    renderFn(document.querySelector('#root'));
}

export { renderFn };
