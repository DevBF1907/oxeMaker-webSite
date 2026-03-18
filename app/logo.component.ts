
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logo',
  standalone: true,
  template: `
    <div [class]="'relative flex items-center justify-center ' + className">
      <!-- Rotating Circular Text -->
      <div class="absolute inset-0 animate-rotate">
        <svg viewBox="0 0 200 200" class="w-full h-full">
          <path id="circlePath" d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" fill="none" />
          <text class="font-logo fill-white uppercase text-[15px] font-black tracking-[0.2em]">
            <textPath href="#circlePath" startOffset="0%">
              ÔXE MAKER 2026 • ÔXE MAKER 2026 • ÔXE MAKER 2026 •
            </textPath>
          </text>
        </svg>
      </div>

      <!-- Central Icon -->
      <div class="relative w-2/3 h-2/3 flex items-center justify-center p-2">
        <svg viewBox="0 0 100 100" class="w-full h-full drop-shadow-lg">
           <!-- Boomerang -->
          <path d="M20 45 Q50 15 80 45 L70 55 Q50 35 30 55 Z" fill="#eeb020" />
          <circle cx="45" cy="35" r="1.5" fill="#2d1403" />
          <circle cx="55" cy="35" r="1.5" fill="#2d1403" />
          <circle cx="50" cy="30" r="1.5" fill="#2d1403" />
          
          <!-- Green Bean -->
          <path d="M35 55 Q50 48 65 55 Q50 62 35 55" fill="#637c2d" />
          <rect x="42" y="52" width="2" height="2" fill="white" />
          <rect x="49" y="51" width="2" height="2" fill="white" />
          <rect x="56" y="52" width="2" height="2" fill="white" />
          
          <!-- Arduino Symbol -->
          <path d="M50 68 Q65 58 75 68 Q85 78 75 88 Q65 98 50 88 Q35 98 25 88 Q15 78 25 68 Q35 58 50 68 Z" 
                fill="none" stroke="#00a6ce" strokeWidth="6" />
          <path d="M75 78 m-4,0 h8 m-4,-4 v8" stroke="#2d1403" strokeWidth="1.5" />
          <path d="M25 78 m-4,0 h8" stroke="#2d1403" strokeWidth="1.5" />
          
          <!-- Action Lines -->
          <path d="M15 62 L18 68 M12 65 L15 71" stroke="#eeb020" strokeWidth="3" strokeLinecap="round" />
          <path d="M85 40 L88 43 M82 37 L85 40" stroke="#eeb020" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  `
})
export class LogoComponent {
  @Input() className: string = 'w-32 h-32';
}
