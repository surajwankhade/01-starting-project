import { Component, EventEmitter, Input, Output } from '@angular/core';

import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { NewTaskData } from './task/task.model';
import { TasksService } from './task/tasks.service';
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  @Input() closed = false;
  isAddingTask = false;

  constructor(private tasksService: TasksService) {}

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onCompleteTask(id : string) {
    //this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  onStartAddTask()
  {
    this.isAddingTask = true;
  }

  onCloseAddTask()
  {
    this.isAddingTask = false;
  }
  onAddTask(taskData: NewTaskData) {
    // this.tasks.unshift({
    //   id: new Date().getTime().toString(),
    //   userId: this.userId,
    //   title: taskData.title,
    //   summary: taskData.summary,
    //   dueDate: taskData.date
    // })
    this.isAddingTask = false;
  }
}
