import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { PeopleTableComponent } from '../people-table';

@Component({
  standalone: true,
  imports: [MatDialogModule, MatToolbarModule, MatIconModule],
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  constructor(public dialog: MatDialog){ }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
  this.dialog.open (PeopleTableComponent, {
    enterAnimationDuration,
    exitAnimationDuration
  })
  }

}
