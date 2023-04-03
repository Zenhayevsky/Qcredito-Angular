import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AnaliseService {

  constructor(private snackBar: MatSnackBar ) { }

  showOnConsole(msg: string) : void {
    this.snackBar.open(msg, 'x', {
      duration:3000,
      horizontalPosition:"right",
      verticalPosition: "top"
    })
  }
}
