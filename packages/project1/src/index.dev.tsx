import 'react-hot-loader'
import './index.scss';
// @vendors
import React from 'react';
import ReactDOM from 'react-dom'

// @components
import { AppDev } from '@modules/App';


// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
ReactDOM.render(<AppDev />, document.querySelector('#root') );