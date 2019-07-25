/*
 * Created by Eunjin Yang on 19. 7. 19 오후 10:24
 * Github : http://github.com/jinny920311
 * Copyright (c) 2019. All rights reserved.
 */

let home = [];
home.push('kangmini','jinny','minsuk');

let personInfo = [
  {
    'name': 'jinny',
    'age': 28,
    'hobby': 'play',
    'favorite': [
      {
        'food': 'all',
        'thing': [
          {
            'action': 'playing',
            'person': 'kingmini'
          }
        ]
      }
    ]
  }
];

// console.log(personInfo);

personInfo.forEach(function (element) {
  console.log(element);
});

var array1 = [
  {
    'name': 'jinny',
    'age': 28,
    'hobby': 'play',
    'favorite': [
      {
        'food': 'all',
        'thing': [
          {
            'action': 'playing',
            'person': 'kingmini'
          }
        ]
      }
    ]
  }
]
array1 = array1.slice(2);

console.log(array1);
