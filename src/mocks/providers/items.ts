import { Injectable } from '@angular/core';

import { Item } from '../../models/item';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
    "name": "Burt Bear",
    "profilePic": "assets/img/speakers/bear.jpg",
    "about": "Burt is a Bear.",
  };


  constructor() {
    let items = [
      {
        "name": "Tomato",
        "profilePic": "assets/img/speakers/Tomato.jpg",
        "about": ""
      },
      {
        "name": "Carrot",
        "profilePic": "assets/img/speakers/Carrot.jpg",
        "about": ""
      },
      {
        "name": "Bread",
        "profilePic": "assets/img/speakers/Bread.jpg",
        "about": ""
      },
      {
        "name": "Cholesterol Medicine",
        "profilePic": "assets/img/speakers/Cholesterol-pills.jpg",
        "about": ""
      },
      {
        "name": "Dog food",
        "profilePic": "assets/img/speakers/Dog food.jpg",
        "about": ""
      },
      {
        "name": "Cheese",
        "profilePic": "assets/img/speakers/Cheese.jpg",
        "about": ""
      },
      {
        "name": "Soup",
        "profilePic": "assets/img/speakers/Soup.jpg",
        "about": ""
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
