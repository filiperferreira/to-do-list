import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-task-editor',
  templateUrl: './task-editor.component.html',
  styleUrls: ['./task-editor.component.css']
})
export class TaskEditorComponent implements OnInit {
  @Input() editingTask?: {editing: boolean; task: Task}
  @Output() taskCreated = new EventEmitter<{editing: boolean; task: Task}>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddTask() {
    this.taskCreated.emit(this.editingTask);
    this.editingTask = undefined;
  }

}
