import './index.css';
import Button from './components/button';

console.log('CrispyPix CSS loaded!');

const defaultButton = new Button('Default Button');
const primaryButton = new Button('Primary Button', 'primary');
const secondaryButton = new Button('Secondary Button', 'secondary');

document.body.appendChild(defaultButton.render());
document.body.appendChild(primaryButton.render());
document.body.appendChild(secondaryButton.render());