import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EventService } from 'src/app/services/event/event.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-pop-up-application',
  templateUrl: './pop-up-application.component.html',
  styleUrls: ['./pop-up-application.component.css']
})

export class PopUpApplicationComponent {
  form: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private formBuilder: FormBuilder, public dialogRef: MatDialogRef<PopUpApplicationComponent>, private eventService: EventService, private snackbar: MatSnackBar) {
    this.form = this.formBuilder.group({
      description: [''],
    });
  }

  onPostApplication() {
    const description = this.form.get('description')?.value;
    console.log('Description:', description);
    const eventId = this.data.eventId;
    const artistId = this.data.artistId;
    const data = {
      id: eventId,
      artistId: artistId,
      msj: description,
    }

    this.eventService.createApplication(data).subscribe(
      (resp) => {
        console.log('response:', resp)
        this.snackbar.open('Postulación enviada', 'Close', {
          duration: 5000, // Duration of the snackbar display (in milliseconds)
        });
      },
      (error) => {
        console.error('Errorrrrr:', error);
        if (error.status === 409) {
          this.snackbar.open(error.error.message, 'Close', {
            duration: 5000, // Duration of the snackbar display (in milliseconds)
          });
        } else if (error.status === 500) {
          this.snackbar.open('Ocurrió un error, intente de nuevo', 'Close', {
            duration: 5000, // Duration of the snackbar display (in milliseconds)
          });
        }
      }
    );

    this.dialogRef.close();
  }
  

 
}
