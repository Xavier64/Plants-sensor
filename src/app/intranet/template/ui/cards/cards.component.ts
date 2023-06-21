import { Component } from '@angular/core';
import { CardsI } from 'src/app/intranet/utils/modeles/Types';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {

  constructor() {}

  public cards: CardsI[] = [
    {
      img:"assets/photoPlants/ceropegia.jpg",
      name:"Ceropegia",
      description:"A climbing plant of the asclepiad family. It is often grown as an indoor plant for its funnel-shaped flowers, which have a very unique appearance. The plant needs bright but not direct exposure to light.",
      humidity:25
    },
    {
      img:"assets/photoPlants/aloe.jpg",
      name:"Aloe vera",
      description:"Succulent plant native to Africa and has been used for centuries for its medicinal properties. Its fleshy leaves contain a nutrient-rich gel, which is often used to soothe burns and skin irritations.",
      humidity:45
    },
    {
      img:"assets/photoPlants/ficus.jpg",
      name:"Ficus",
      description:"A genus of shrub and tree-like plants often grown as indoor plants. The most common species are Ficus benjamina and Ficus elastica. They have shiny, dark green leaves and are often used for their ability to purify indoor air. ",
      humidity:88
    }
  ]
}
