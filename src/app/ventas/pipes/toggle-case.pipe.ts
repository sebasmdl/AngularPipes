import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
    name: 'toggleCase'
})

export class ToogleCasePipe implements PipeTransform{
    transform(value: string, toUpperCase:boolean) {
        return toUpperCase ? value.toUpperCase() : value.toLowerCase()
    }

}  