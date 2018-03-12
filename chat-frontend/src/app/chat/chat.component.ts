import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {UserProfileComponent} from '../user-profile/user-profile.component';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
  
})
export class ChatComponent implements OnInit {
  name: string;
  constructor(public dialog: MatDialog) {}
  ngOnInit() {
    this.openDialog();
  }


  openDialog(): void {
    let dialogRef = this.dialog.open(UserProfileComponent, {
      width: '380px',
      data: { name: this.name}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.name = result;
    });
  }
}
