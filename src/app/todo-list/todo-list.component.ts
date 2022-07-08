import { Component, OnInit } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent implements OnInit {
  list: Task[] = [
    {'id': 0, 'task_name': 'Edit/Create Tasks', 'completed': true},
    {'id': 1, 'task_name': 'Only Completed Tasks', 'completed': true},
    {'id': 2, 'task_name': 'Only Uncompleted Tasks', 'completed': true},
    {'id': 3, 'task_name': 'Task Creation Date', 'completed': false},
    {'id': 4, 'task_name': 'Save List', 'completed': false}
  ];
  editingTask?: {editing: boolean; task: Task};
  filter = 0;

  constructor() { }

  ngOnInit(): void {
  }

  editTask(task: Task) {
    this.editingTask = {editing: true, task};
  }

  createNewTask() {
    this.editingTask = {editing: false,
      task: {'id': this.list.length, 'task_name': 'new task', 'completed': false}};
  }

  onTaskCreated(editedTask: {editing: boolean; task: Task}) {
    if (editedTask) {
      if (!editedTask.editing) {
        this.list.push(editedTask.task);
      }
      else {
        this.list[editedTask.task.id].task_name = editedTask.task.task_name;
      }
    }
    this.editingTask = undefined;
  }

  filterList(filter: number, list: Task[]): Task[] {
    var filtered_list: Task[] = [];
    for (var item of list) {
      if (filter == 0 || filter == 1 && item.completed || filter == 2 && !item.completed) {
        filtered_list.push(item);
      }
    }
    return filtered_list;
  }
}