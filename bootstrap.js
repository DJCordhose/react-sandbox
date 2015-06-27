import React from 'react';
import HelloMessage from './src/HelloMessage';

var mountNode = document.getElementById('example');
React.render(<HelloMessage greeting="Hello" />, mountNode);
