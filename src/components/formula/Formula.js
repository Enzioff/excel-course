import { ExcelComponent } from '../../core';

export class Formula extends ExcelComponent {
  static className = 'excel__formula';

  constructor(root) {
    super(root, {
      name: 'Formula',
      listeners: ['input', 'click'],
    });
  }

  toHTML() {
    return `
      <div class="info">fx</div>
      <div class="input" contenteditable spellcheck="false"></div>
    `;
  }

  init() {
    super.init();
  }

  destroy() {
    super.destroy();
  }

  onInput(evt) {
    console.log('input', evt);
  }

  onClick(evt) {
    console.log('click', evt);
  }
}
