import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, HostListener } from '@angular/core';
import { Goal } from './class/goal';
import { EditingGoalInterface } from './interface/EditingGoalInterface';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoalComponent implements OnInit {

  @Input()
  public goalEntity: Goal = null;

  @Input()
  public isGoalSelected: boolean = false;

  @Output() onSaved: EventEmitter<Goal> = new EventEmitter<Goal>();
 
  @Output() onEdited: EventEmitter<EditingGoalInterface> = new EventEmitter<EditingGoalInterface>();
  
  @Output() onDone: EventEmitter<Goal> = new EventEmitter<Goal>();
 
  @Output() onDeleted: EventEmitter<Goal> = new EventEmitter<Goal>();
 
  @Output() onMadeUnmark: EventEmitter<Goal> = new EventEmitter<Goal>();
 
  @Output()
  public onSelected: EventEmitter<Goal> = new EventEmitter<Goal>();

  constructor() { }

  ngOnInit(): void {
  }

  public save(): void {
    this.onSaved.emit(this.goalEntity);
  }

  public edit(goalInput?: HTMLElement): void {
    const currentEditInterface: EditingGoalInterface = { input: goalInput, goal: this.goalEntity };
    this.onEdited.emit(currentEditInterface);
  }

  public done(): void {
    this.onDone.emit(this.goalEntity);
  }

  public delete(): void {
    this.onDeleted.emit(this.goalEntity);
  }

  public makeUnmarkGoal(): void {
    this.onMadeUnmark.emit(this.goalEntity);
  }

  @HostListener('click')
  public selectGoal(): void {
    this.onSelected.emit(this.goalEntity);
  }

}
