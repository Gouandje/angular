import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products= [
    {
      id: 1,  
      price: 7.50,
      image: 'assets/Tile_Image.jpg',
      name: 'KARIBA REDD+-ZIMBABWE',
      quantity: '58,28 libs offset',
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      cause: 'null',
    },
    {
      id: 1,
      price: null,
      image: 'assets/Tile_Image.jpg',
      name: 'KARIBA REDD+-ZIMBABWE',
      quantity: '58,28 libs offset',
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      cause: 'null',
    },
    {
      id: 1,
      price: null,
      image: 'assets/Tile_Image.jpg',
      name: 'KARIBA REDD+-ZIMBABWE',
      quantity: '58,28 libs offset',
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      cause: 'null',
    },
    {
      id: 1,
      price: null,
      image: 'assets/Tile_Image.jpg',
      name: 'KARIBA REDD+-ZIMBABWE',
      quantity: '58,28 libs offset',
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      cause: 'null',
    },
    {
      id: 1,
      price: null,
      image: 'assets/Tile_Image.jpg',
      name: 'KARIBA REDD+-ZIMBABWE',
      quantity: '58,28 libs offset',
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      cause: 'null',
    },
    {
      id: 1,
      price: null,
      image: 'assets/Tile_Image.jpg',
      name: 'KARIBA REDD+-ZIMBABWE',
      quantity: '58,28 libs offset',
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      cause: 'null',
    },
    {
      id: 1,
      price: 7.50,
      image: 'assets/Tile_Image.jpg',
      name: 'KARIBA REDD+-ZIMBABWE',
      quantity: '58,28 libs offset',
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      cause: 'null',
    },
    {
      id: 1,
      price: 22.50,
      image: 'assets/Tile_Image.jpg',
      name: 'KARIBA REDD+-ZIMBABWE',
      quantity: '58,28 libs offset',
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      cause: 'null',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
