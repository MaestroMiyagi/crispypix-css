import styles from './Button.css';

class Button {
    constructor(text, type = 'default') {
        this.text = text;
        this.type = type;
    }

    render() {
        const button = document.createElement('button');
        button.textContent = this.text;
        button.className = `${styles['crispypix-btn']} ${styles[`crispypix-btn-${this.type}`]}`;
        return button;
    }
}

export default Button;