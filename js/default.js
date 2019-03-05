import * as React from 'react';
import run from './common';
import HomePage from './components/HomePage';

run(({ urls }) => <HomePage urls={urls} />);
