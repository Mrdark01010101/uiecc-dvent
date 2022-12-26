import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListePublicationsComponent } from './liste-publications.component';

describe('ListePublicationsComponent', () => {
  let component: ListePublicationsComponent;
  let fixture: ComponentFixture<ListePublicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListePublicationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListePublicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
