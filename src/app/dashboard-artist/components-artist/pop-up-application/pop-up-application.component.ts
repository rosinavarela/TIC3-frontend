import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-pop-up-application',
  templateUrl: './pop-up-application.component.html',
  styleUrls: ['./pop-up-application.component.css']
})

export class PopUpApplicationComponent {
  form: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private formBuilder: FormBuilder, public dialogRef: MatDialogRef<PopUpApplicationComponent>) {
    this.form = this.formBuilder.group({
      description: [''],
    });
  }

  onPostApplication() {
    const description = this.form.get('description')?.value;
    console.log('Description:', description);
    const eventId = this.data.eventId;
    const artistId = this.data.artistId;
    //hacer funcion que mande al back la postulación
    this.dialogRef.close();
  }
  

 
}
