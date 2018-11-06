import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadHelperComponent } from './upload-helper.component';

describe('UploadHelperComponent', () => {
  let component: UploadHelperComponent;
  let fixture: ComponentFixture<UploadHelperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadHelperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
