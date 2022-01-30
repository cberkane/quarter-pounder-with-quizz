import { StoreService } from './shared/services/store.service';
import { WeclomeComponent } from './shared/components/welcome/welcome.component';
import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'The Quarter Pounder With Quizz';

  constructor(
    private dialog: MatDialog,
    private store: StoreService
  ) {}

  ngOnInit(): void {
    const openedDialog = this.store.getSessionStore('opened-dialog') === 'true';
    if (openedDialog) {
      return;
    }
    this.openDialog();
  }

  public openDialog(): void {
    const options: MatDialogConfig = {
      width: '450px',
      height: '350px',
      data: {
        message: 'message',
        path: 'redire',
      },
    };

    const dialog = this.dialog.open(WeclomeComponent, options);
    dialog.afterClosed().subscribe({
      complete: () => this.store.setSessionStore('opened-dialog', 'true'),
    });
  }
}
