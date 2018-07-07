import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "sortBy" })
export class SortPipe {
  transform(array: Array<string>, args: string[]): Array<string> {
    const column: string = args[0];
    const type: string = args[1];

    array.sort((a: any, b: any) => {
      if (a[column] < b[column]) {
        return type === "asc" ? -1 : 1;
      } else if (a[column] > b[column]) {
        return type === "asc" ? 1 : -1;
      } else {
        return 0;
      }
    });
    return array;
  }
}
