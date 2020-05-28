import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-project-todo';

  public fromLeftToRight = false;
  public fromRightToLeft = false;

  public menuMode: boolean = false;

  public switchMenuFromLeftToRight(): void {
    this.toggleMenuMode();
    this.fromLeftToRight = true;
    this.fromRightToLeft = false;
  }

  public switchMenuFromRightToLeft(): void {
    this.toggleMenuMode();
    this.fromRightToLeft = true;
    this.fromLeftToRight = false;
  }

  public toggleMenuMode(): void {
    this.menuMode = !this.menuMode;
  }
}
