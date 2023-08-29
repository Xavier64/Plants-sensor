import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SupabaseService } from '../services/supabase.service';

@Component({
  selector: 'app-humidity',
  templateUrl: './humidity.component.html',
  styleUrls: ['./humidity.component.scss']
})
export class HumidityComponent {
  formulaire!: FormGroup;

  constructor(private formBuilder: FormBuilder, public supa: SupabaseService) { }

  ngOnInit(): void {
    this.formulaire = this.formBuilder.group({
      name: [null, [Validators.required]],
      macAddress: [null, [Validators.required]],
      plant: [null, [Validators.required]],
      alert: [null, [Validators.required]],
    });
  }

  // Méthode utilisé dans le (ngSubmit) du formulaire 
  async onSubmit() {
    console.log(this.formulaire.value);
    const newEntry = {
      name: this.formulaire.value.nom,
      macAddress: this.formulaire.value.macAddress,
      plant: this.formulaire.value.plante,
      alert: this.formulaire.value.alerte
    };
    await this.supa.createSensor(newEntry); // Appelle de la méthode supabase
    this.formulaire.reset();    
  }
}
