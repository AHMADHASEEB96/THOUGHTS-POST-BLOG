import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timestampToDate'
})
export class TimestampToDatePipe implements PipeTransform {

  transform(timestampValue: number, ...args: unknown[]): Date {
    return new Date(timestampValue * 1000) // new Date accepts milliseconds and the timestamp is received as seconds
  }
}
/* 
  there is something wrong with this pipe, it returns a wrong year date when chaining date pipe on it 
the pipe (date) is not applicable on timestamp that's I had to convert it to date first  
*/
