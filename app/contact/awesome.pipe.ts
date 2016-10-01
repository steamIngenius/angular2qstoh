import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'awesome' })
// pipe in some awesome!
export class AwesomePipe implements PipeTransform {
  transform(phrase: string) {
    return phrase ? 'Awesome ' + phrase : '';
  }
}
