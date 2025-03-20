# @nwrks/uikit

### A simple, harmonized React.js components toolkit for building powerful apps.

## Installation

Install via npm:

```bash
npm i --save @nwrks/uikit
```

Check the latest version on [NPM](https://www.npmjs.com/package/@nwrks/uikit).

## Usage

Wrap your main React component with **AppActivity**:

```jsx
import React from 'react';
import { AppActivity } from '@nwrks/uikit';

function App () {
  return (
    <AppActivity theme={'Light'}>
      {/*  Your components goes here */}
    </AppActivity>
  );
}

export default App;
```

## Example

```jsx
import React from 'react';

import { Button, AppActivity } from '@nwrks/uikit';

function App () {
  return (
    <AppActivity theme={'Light'}>
      <Button color="Primary">Click Me</Button>
    </AppActivity>
  );
}

export default App;
```

## Storybook

Launch **Storybook** to view and test components:

```bash
npm run storybook
```

## Contributing

Fork the repo at **[nukaworks/toolkits/UiKit](https://git.nuka.works/nukaworks/toolkits/UiKit)**, create a branch, and
submit a pull request.

### Need more?

Go on our **[developer documentation center](https://developer.nuka.works/)** and checkout **UiKit**, you can find more
documentation, code example and support.

