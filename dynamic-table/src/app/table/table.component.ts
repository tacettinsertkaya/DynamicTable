import { NgFor, NgTemplateOutlet } from '@angular/common';
import { Component, ContentChild, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'table',
  standalone: true,
  imports: [NgTemplateOutlet, NgFor],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent<T> {
  @Input() items!: T[];

  @ContentChild('header', { read: TemplateRef })
  headerTemplate!: TemplateRef<void>;

  @ContentChild('body', { read: TemplateRef })
  bodyTemplate!: TemplateRef<{ $implicit: T }>;
}
