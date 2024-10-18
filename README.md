# CrispyPix CSS

## Use

1. Install the package:

```sh
npm install crispypix-css
```

2. Import the configuration of Tailwind in your `tailwind.config.js`:

```javascript
const crispypixConfig = require('crispypix-css/tailwind.config.js');

module.exports = {
  presets: [crispypixConfig],
}
```

3. Import the styles in your main CSS file:

```css
@import 'crispypix-css/styles.css';
```

4. Use the components in your application:

```jsx
import { CrispyButton } from 'crispypix-css';

function App() {
  return <CrispyButton color="primary" size="medium">Click me</CrispyButton>;
}
```
