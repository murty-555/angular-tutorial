import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'spaceToHyphen'
})
export class SpaceToHyphenPipe implements PipeTransform {

  transform(value: string): string {
    return value.replaceAll(" ", "-");
  }

}

// <p> class binding | spaceToHyphen sm-g990b  sm8350</>
