import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoolContactsComponent } from './cool-contacts.component';

describe('CoolContactsComponent', () => {
  let component: CoolContactsComponent;
  let fixture: ComponentFixture<CoolContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoolContactsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoolContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
