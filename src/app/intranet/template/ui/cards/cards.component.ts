import { Component } from '@angular/core';
import { SupabaseClient, createClient } from '@supabase/supabase-js';
import { CardsI } from 'src/app/intranet/utils/modeles/Types';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})


export class CardsComponent {

  constructor() { this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey) }

  private supabase: SupabaseClient;


  public cards: CardsI[] = [
    {
      img: "assets/photoPlants/ceropegia.jpg",
      name: "Ceropegia",
      description: "A climbing plant of the asclepiad family. It is often grown as an indoor plant for its funnel-shaped flowers, which have a very unique appearance. The plant needs bright but not direct exposure to light."
    },
    {
      img: "assets/photoPlants/aloe.jpg",
      name: "Aloe vera",
      description: "Succulent plant native to Africa and has been used for centuries for its medicinal properties. Its fleshy leaves contain a nutrient-rich gel, which is often used to soothe burns and skin irritations."
    },
    {
      img: "assets/photoPlants/ficus.jpg",
      name: "Ficus",
      description: "A genus of shrub and tree-like plants often grown as indoor plants. The most common species are Ficus benjamina and Ficus elastica. They have shiny, dark green leaves and are often used for their ability to purify indoor air. "
    }
  ]

  // Méthode pour faire un fetch sur supabase
  async getHistoric() {
    const { data, error } = await this.supabase
      .from('historic')
      .select('*');
    if (data) {
      console.log("data", data);
    }
    if (error) {
      console.log('Erreur de fetch', error);
    }
    return { data, error };
  }
}
