import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, limit: number = 100, completeWords: boolean = false, ellipsis: string = '...'): string {
      if (!value) return '';

      if (value.length <= limit) return value;

      let truncated = value.substring(0, limit);

      if (completeWords) {
        truncated = truncated.substring(0, truncated.lastIndexOf(' '));
      }

      return truncated + ellipsis;
    }

}
