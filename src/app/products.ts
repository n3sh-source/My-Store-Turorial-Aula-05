export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Gustavo Phone',
    price: 799,
    description: 'Um telefone minimalista, sem softwares proprietários',
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'Pequeno',
  },
  {
    id: 3,
    name: 'Pera Phone',
    price: 799,
    description: '42',
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
