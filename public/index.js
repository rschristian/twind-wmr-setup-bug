import { LocationProvider, Router, Route, lazy, ErrorBoundary, hydrate, prerender as ssr } from 'preact-iso';
import { setup } from 'twind';

import Home from './pages/home/index.js';
import NotFound from './pages/_404.js';
import Header from './header.js';
import { config } from './styles/twind.config.js';

const About = lazy(() => import('./pages/about/index.js'));
setup(config);

export function App() {
	return (
		<LocationProvider>
			<div class="app">
                <h1 class="text-red-500">Hello World</h1>
				<Header />
				<ErrorBoundary>
					<Router>
						<Route path="/" component={Home} />
						<Route path="/about" component={About} />
						<Route default component={NotFound} />
					</Router>
				</ErrorBoundary>
			</div>
		</LocationProvider>
	);
}

hydrate(<App />);

export async function prerender(data) {
	return await ssr(<App {...data} />);
}
