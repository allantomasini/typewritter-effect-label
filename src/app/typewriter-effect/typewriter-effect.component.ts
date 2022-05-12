import { AfterViewInit, Component, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-typewriter-effect',
  templateUrl: './typewriter-effect.component.html',
  styleUrls: ['./typewriter-effect.component.scss'],
})
export class TypewriterEffectComponent implements AfterViewInit {
  @ViewChild('textElement') textElement: ElementRef;
  @ViewChild('blinkElement') blinkElement: ElementRef;
  @Input() text = '';
  @Input() textColor = 'black';
  @Input() fontSize = '20px';
  @Input() blinkWidth = '2px';
  @Input() typingSpeedMilliseconds = 100;

  processedText: string = '';

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.setTextStyle();
    this.setBlinkStyle();
    this.typingEffect();
  }

  private setTextStyle(): void {
    this.renderer.setStyle(this.textElement.nativeElement, 'color', this.textColor);
    this.renderer.setStyle(this.textElement.nativeElement, 'font-size', this.fontSize);
    this.renderer.setStyle(this.textElement.nativeElement, 'padding', '0.1em');
  }

  private setBlinkStyle(): void {
    this.renderer.setStyle(this.blinkElement.nativeElement, 'border-right-width', this.blinkWidth);
    this.renderer.setStyle(this.blinkElement.nativeElement, 'border-right-color', this.textColor);
    this.renderer.setStyle(this.blinkElement.nativeElement, 'font-size', this.fontSize);
  }

  private typingEffect(): void {
    const textArray = this.text.split('');

    const addLetter = () => {
      if (textArray.length > 0) {
        this.processedText += textArray.shift();
      } else {
        return;
      }
      setTimeout(addLetter, this.typingSpeedMilliseconds);
    };
    addLetter();
  }
}
