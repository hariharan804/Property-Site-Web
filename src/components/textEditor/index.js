import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function MyComponent() {
  const [value, setValue] = useState('A while back I needed to count the amount of letters that a piece of text in an email template had (to avoid passing any character limits). Unfortunately, a street bike available at a starting price of Rs. 1,62,916 in India. It is available in 3 variants and 8 colours with top variant price starting from The Yamaha');

  return <ReactQuill theme="snow" value={value} onChange={setValue} />;
}

export default MyComponent; 