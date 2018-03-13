import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  name: string;
  constructor(public dialog: MatDialog) {}
  ngOnInit() {
    setTimeout(() => {
    this.openDialog();
    });
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '380px',
      data: { name: this.name}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.name = result;
    });
  }
}


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
  }
  Guest(): void {
    const dialogRef = this.dialog.open(GuestComponent, {
      width: '380px',
      data: {}
    });
  }

}

@Component({
  selector: 'app-guest-dialog',
  templateUrl: './app-guest-dialog.html'
})
export class GuestComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
  }
}
