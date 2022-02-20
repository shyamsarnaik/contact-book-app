import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { MatMaterialModule } from 'src/app/mat-material-module';

import { CreateEditContactDialogComponent } from './create-edit-contact-dialog.component';

describe('CreateEditContactDialogComponent', () => {
  let component: CreateEditContactDialogComponent;
  let fixture: ComponentFixture<CreateEditContactDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEditContactDialogComponent ],
      imports: [
        FormsModule,
        BrowserModule,
        ReactiveFormsModule,
        MatMaterialModule
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEditContactDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
