import { ExcelComponent } from '../../core';
import { createTable } from '../toolbar/table.template';

export class Table extends ExcelComponent {
  static className = 'excel__table';
  constructor(root) {
    super(root, {
      name: 'Table',
      listeners: [],
    });
  }

  init() {
    super.init();
  }

  toHTML() {
    return createTable();
  }
}
