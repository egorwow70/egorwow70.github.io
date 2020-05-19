import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Goal } from './class/goal';
import { editingGoalInterface } from './interface/editingGoalInterface';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoalComponent implements OnInit {

  @Input()
  public goalEntity: Goal = null;

  constructor() { }

  ngOnInit(): void {
  }

  @Output() onSaved: EventEmitter<Goal> = new EventEmitter<Goal>();
  public save(): void {
    this.onSaved.emit(this.goalEntity);
  }

  @Output() onEdited: EventEmitter<editingGoalInterface> = new EventEmitter<editingGoalInterface>();
  public edit(goalInput?: HTMLElement): void {
    const currentEditInterface: editingGoalInterface = { input: goalInput, goal: this.goalEntity };
    this.onEdited.emit(currentEditInterface);
  }

  @Output() onDone: EventEmitter<Goal> = new EventEmitter<Goal>();
  public done(): void {
    this.onDone.emit(this.goalEntity);
  }

  @Output() onDeleted: EventEmitter<Goal> = new EventEmitter<Goal>();
  public delete(): void {
    this.onDeleted.emit(this.goalEntity);
  }

  @Output() onMadeUnmark: EventEmitter<Goal> = new EventEmitter<Goal>();
  public makeUnmarkGoal(): void {
    this.onMadeUnmark.emit(this.goalEntity);
  }

}
