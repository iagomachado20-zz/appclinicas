import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the CapitalizePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'capitalize',
})
export class CapitalizePipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, ...args) {

    return value.toLowerCase().split(' ').map(function(word) {

      if (word === 'e' || word === 'de') {
        return word.replace(word[0], word[0].toLowerCase());
      }
      return word.replace(word[0], word[0].toUpperCase());
    }).join(' ');

  }
}
