import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  @Input() isOpen: boolean;
  @Input() header: string;
  @Output() isOpenChange = new EventEmitter<boolean>();

  onClose() {
    this.isOpen = false;
    this.isOpenChange.emit(this.isOpen);
  }
}
