'use strict';
export class Sum {

  sum(list: number[]): number {
    return list.reduce((sum, n) => sum + n, 0);
  }

}