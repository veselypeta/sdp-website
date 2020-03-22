import * as React from 'react';
import { createMemoryHistory, MemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { render } from '@testing-library/react';

interface RenderRouterProps {
    route?: string;
    history?: MemoryHistory;
}

export function renderWithRouter(
    ui: JSX.Element,
    { route = '/', history = createMemoryHistory({ initialEntries: [route] }) }: RenderRouterProps = {},
) {
    return {
        ...render(<Router history={history}>{ui}</Router>),
        history,
    };
}
