import { Injectable } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { of } from 'rxjs';

import { ContactListComponent } from './contact-list.component';
import { ContactListService } from './contact-list.service';


@Injectable()
export class MockContactListService {
  constructor(){}
  getContactList() {
    return of([])
  }
}

describe('ContactListComponent', () => {
  let component: ContactListComponent;
  let fixture: ComponentFixture<ContactListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactListComponent],
      providers: [
        { provide: MatDialog, useValue: {} },
        { provide: ContactListService, useValue: {} },
        { provide: ContactListService, useClass: MockContactListService },
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('on oninit should call getdata', () => {
  //   spyOn(component, 'getData');
  //   expect(component.getData).toHaveBeenCalled();
  // });
});
