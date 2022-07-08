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

  onAddTask(task_name?: string) {
    if (task_name) {
      if (this.editingTask) {
        this.editingTask.task.task_name = task_name;
      }
      this.taskCreated.emit(this.editingTask);
    }
    else {
      this.taskCreated.emit(undefined);
    }
    this.editingTask = undefined;
  }

}
