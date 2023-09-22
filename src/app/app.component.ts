import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  keyword = 'name';
  /* public countries = [
    {
      id: 10,
      name: 'groupContry',
      children: [
        {
          id: 1,
          name: 'Albania',
        },
        {
          id: 2,
          name: 'Belgium',
        },
        {
          id: 3,
          name: 'Denmark',
        },
      ],
    },
  ]; */
  /*  {
      id: 1,
      name: 'Albania',
    },
    {
      id: 2,
      name: 'Belgium',
    },
    {
      id: 3,
      name: 'Denmark',
    },
    {
      id: 4,
      name: 'Montenegro',
    },
    {
      id: 5,
      name: 'Turkey',
    },
    {
      id: 6,
      name: 'Ukraine',
    },
    {
      id: 7,
      name: 'Macedonia',
    },
    {
      id: 8,
      name: 'Slovenia',
    },
    {
      id: 9,
      name: 'Georgia',
    },
    {
      id: 10,
      name: 'India',
    },
    {
      id: 11,
      name: 'Russia',
    },
    {
      id: 12,
      name: 'Switzerland',
    },
  ];*/
  /* selectEvent(item) {
    console.log(item);
    // do something with selected item
  }
*/
  onChangeSearch(query: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
    this.customFilter(query);
  }

  onFocused(e) {
    // do something
  }
  countries = [
    {
      id: 10,
      name: 'groupCountry',
      children: [
        {
          id: 1,
          name: 'Albania',
        },
        {
          id: 2,
          name: 'Belgium',
        },
        {
          id: 3,
          name: 'Denmark',
        },
      ],
    },
  ];
  directChildren = [
    {
      id: 4,
      name: 'Montenegro',
    },
    {
      id: 5,
      name: 'Italy',
    },
    {
      id: 6,
      name: 'Spain',
    },
    {
      id: 7,
      name: 'France',
    },
  ];
  // Flattened array for both parent and child countries
  filteredData: any[] = [];

  // Selected item
  selectedItem: string = '';
  customFilter(query: string) {
    // Flatten the nested structure to search in both parent and child countries
    this.filteredData = [
      ...this.countries.flatMap((group) => [
        { ...group, isGroup: true },
        ...group.children,
      ]),
      ...this.directChildren.flatMap((group) => [
        { ...group, isOnlyChild: true },
      ]),
      ,
    ].filter((item) => item.name.toLowerCase().includes(query.toLowerCase()));
    console.log(this.filteredData);
  }

  // Handle item selection
  selectItem(item: any) {
    this.selectedItem = item.name;
    // You can distinguish between parent and child here using item.isGroup or other properties
    if (item.isGroup) {
      // Selected a parent item
      console.log('Selected Parent:', item.name);
      console.log('Selected Children:', item.children);
    } else {
      // Selected a child item
      console.log('Selected Child:', item);
    }
  }
}
