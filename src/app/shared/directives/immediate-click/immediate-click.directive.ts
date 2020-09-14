import { Directive, ElementRef, AfterViewInit } from '@angular/core';
import { PlatformDetectorService } from 'src/app/core/platform-detector/platform-detector.service';

@Directive({
  selector: '[appImmediateClick]'
})
export class ImmediateClickDirective implements AfterViewInit {

  constructor(
    private element: ElementRef<any>,
    private platformDetectorService: PlatformDetectorService) { }

  ngAfterViewInit(): void {
    if (this.platformDetectorService.isPlatformBrowser()) {
      this.element.nativeElement.click();
    }
  }

}
