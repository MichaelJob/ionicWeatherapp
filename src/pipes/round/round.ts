import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the RoundPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({name: 'roundpipe'})
export class RoundPipe implements PipeTransform {
  transform(value: number, args: string[]): any {
     return Math.round(value);
  }
}

@Pipe({name: 'roundtenthpipe'})
export class RoundTenthPipe implements PipeTransform {
  transform(value: number, args: string[]): any {
     return (Math.round(value*10))/10;
  }
}