import React, { Fragment, lazy, ReactElement, Suspense } from "react";
import { render } from "react-dom";

const RemoteWidget = lazy(() => import("remote-widget"));

const App = (): ReactElement => {
    return (
        <Fragment>
            <h1>Host Application</h1>
            <Suspense fallback="Loading...">
                <RemoteWidget />
            </Suspense>
        </Fragment>
    );
};

render(<App />, document.getElementById("app-container"));
