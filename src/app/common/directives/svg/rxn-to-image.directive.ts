// https://stackoverflow.com/questions/51212512/how-to-render-dynamically-generated-inline-svg-by-using-custom-directive-in-angu
import {
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef,
  OnInit,
  AfterViewInit,
  Renderer2,
  ElementRef
} from '@angular/core';

@Directive({
  selector: '[appRxnToImage]'
})
export class RxnToImageDirective implements OnInit, AfterViewInit {
  @Input()
  appRxnToImage: any;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private renderer: Renderer2,
    private el: ElementRef
  ) {}
  ngOnInit() {}

  ngAfterViewInit() {
    const decodedSvg = this.appRxnToImage;

    this.templateRef.elementRef.nativeElement.innerHTML = decodedSvg;
    const t = this.viewContainer.createEmbeddedView(this.templateRef);
    t.rootNodes[0].innerHTML = decodedSvg;
  }

  private applySvg(svg) {
    this.templateRef.elementRef.nativeElement.innerHTML = svg;
  }
}
