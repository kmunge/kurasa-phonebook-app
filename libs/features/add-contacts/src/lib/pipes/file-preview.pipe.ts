import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filePreview',
})
export class FilePreviewPipe implements PipeTransform {
  transform(file: File | null): string | null {
    if (!file) {
      return null;
    }

    const url = URL.createObjectURL(file);
    return url;
  }
}