import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactListComponent } from './contact-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatMaterialModule } from 'src/app/mat-material-module';
import { CreateEditContactDialogComponent } from './create-edit-contact-dialog/create-edit-contact-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ContactListService } from './contact-list.service';



@NgModule({
  declarations: [ContactListComponent, CreateEditContactDialogComponent],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatMaterialModule
  ],
  exports: [
    ContactListComponent
  ],
  providers: [ContactListService]
  // entryComponents: [
  //   CreateEditContactDialogComponent
  // ]
})
export class ContactListModule { }
