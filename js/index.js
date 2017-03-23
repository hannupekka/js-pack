// Import polyfills and other libraries.
import 'babel-polyfill';
import 'dom4';
import 'normalize.css/normalize.css';
import 'font-awesome/css/font-awesome.min.css';
import 'main.less';

// Require our JS.
import 'scripts.js';

// Require our HTML in development for HMR to work also with HTML changes.
if (process.env.NODE_ENV !== 'production') {
  System.import('index.html');
}

