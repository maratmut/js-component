class Component {
  constructor(options) {
    this.tagName = options.tagName;
    this.classList = options.classList;
    this.text = options.text;
    this.events = options.events;
    this.styles = options.styles;
  }

  init() {
    const tagElement = document.createElement(this.tagName);

    tagElement.classList.add(...this.classList);
    tagElement.textContent = this.text;

    if (this.styles) {
      Object.assign(tagElement.style, this.styles);
    }

    for (const event of Object.keys(this.events)) {
      tagElement.addEventListener(event, this.events[event]);
    }

    return tagElement;
  }

  generateElement(targetElement) {
    targetElement.appendChild(this.init());
  }
}

const button = new Component({
  tagName: 'button',
  classList: ['btn', 'btn-primary'],
  text: 'Кнопка 1',
  events: {
    click: () => alert('Сработало событие клик!'),
  },
  styles: {
    fontSize: '16px',
    color: 'white',
    padding: '10px',
    margin: '10px',
  },
});

const button2 = new Component({
  tagName: 'button',
  classList: ['btn', 'btn-danger'],
  text: 'Кнопка 2',
  events: {
    click: () => alert('Сработало событие клик!'),
  },
  styles: {
    fontSize: '12px',
    color: 'white',
    padding: '5px',
  },
});

button.generateElement(document.body);
button2.generateElement(document.body);
