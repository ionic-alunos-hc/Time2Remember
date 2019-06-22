import { Injectable } from '@angular/core';

import { Item } from '../../models/item';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
    "name": "Burt Bear",
    "profilePic": "assets/img/speakers/bear.jpg",
    "about": "Burt is a Bear.",
    "quantidade": "1 kilo",
  };


  constructor() {
    let items = [
      {
        "name": "Tomato",
        "profilePic": "assets/img/speakers/Tomato.jpg",
        "about": "",
        "quantidade": "1/2 kg"
      },
      {
        "name": "Carrot",
        "profilePic": "assets/img/speakers/Carrot.jpg",
        "about": "",
        "quantidade": "1/3 kg"
      },
      {
        "name": "Bread",
        "profilePic": "assets/img/speakers/Bread.jpg",
        "about": "",
        "quantidade": "6 breads"
      },
      {
        "name": "Cholesterol Medicine",
        "profilePic": "assets/img/speakers/Cholesterol-pills.jpg",
        "about": "",
        "quantidade": "2 boxes"
      },
      {
        "name": "Dog food",
        "profilePic": "assets/img/speakers/Dog food.jpg",
        "about": "",
        "quantidade": "20 kg"
      },
      {
        "name": "Cheese",
        "profilePic": "assets/img/speakers/Cheese.jpg",
        "about": "",
        "quantidade": "200 g"
      },
      {
        "name": "Soup",
        "profilePic": "assets/img/speakers/Soup.jpg",
        "about": "",
        "quantidade": "1/2 litro"
      }
    ];

    for (let item of items) {
      this.items.push(new Item(item));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Item) {
    this.items.push(item);
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
