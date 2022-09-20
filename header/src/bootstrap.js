import * as React from 'react';
import ReactDOM from 'react-dom/client';
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
    rootEle.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
};

// window.renderFn = renderFn;

if (!window.containerContext) {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    renderFn(root);
}

export { renderFn };
