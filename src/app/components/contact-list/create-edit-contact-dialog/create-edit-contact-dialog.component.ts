import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-create-edit-contact-dialog',
  templateUrl: './create-edit-contact-dialog.component.html',
  styleUrls: ['./create-edit-contact-dialog.component.scss']
})
export class CreateEditContactDialogComponent implements OnInit {

  contactForm = this.fb.group({
    id: [],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    phone: ['', Validators.required],
  });
  title: string = '';

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<CreateEditContactDialogComponent>,) { }

  ngOnInit(): void {
    this.title = 'Add new contact';
    if(this.data && this.data.action == 'update') {
      this.title = 'Update contact';
      this.contactForm.patchValue(this.data.row);
    }
  }

  onSubmit() {
    this.dialogRef.close({ data: this.contactForm.value, action: this.data.action });
  }

  cancel() {

  }

}
