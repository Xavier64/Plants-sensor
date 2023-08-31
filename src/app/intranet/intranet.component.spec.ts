import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IntranetComponent } from './intranet.component';
import { NavbarComponent } from './template/ui/navbar/navbar.component';
import { ActivatedRoute, RouterModule } from '@angular/router';


describe('IntranetComponent', () => {
  let component: IntranetComponent;
  let fixture: ComponentFixture<IntranetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntranetComponent, NavbarComponent ],
      imports: [RouterModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {} // Vous pouvez utiliser une instance mock ou une instance réelle pour ActivatedRoute ici
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntranetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
