import { Pipe, PipeTransform } from '@angular/core';
import * as showdown from "showdown";
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import DOMPurify from 'dompurify';


@Pipe({name: 'markdownTranslater'})
export class MarkdownPipe implements PipeTransform {
  
    constructor(protected sanitizer: DomSanitizer) {}

    public transform(value: string): SafeHtml {
        var converter = new showdown.Converter();
        const htmlFromMarkdown = converter.makeHtml(value);
        const sanitizedHtml = DOMPurify.sanitize(htmlFromMarkdown);
        return this.sanitizer.bypassSecurityTrustHtml(sanitizedHtml);
    }
}