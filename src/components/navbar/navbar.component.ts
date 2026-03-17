import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="fixed top-0 w-full z-50 transition-all duration-300 border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <!-- Logo -->
        <a href="#home" class="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
          RB.
        </a>

        <!-- Desktop Menu -->
        <div class="hidden md:flex space-x-8 items-center">
          @for (item of navItems; track item.label) {
            <a [href]="item.href"
               class="text-slate-300 hover:text-blue-400 text-sm font-medium transition-colors duration-200">
              {{ item.label }}
            </a>
          }
          <button (click)="downloadResume()" class="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-lg shadow-blue-600/20">
            Resume
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <button (click)="toggleMenu()" class="md:hidden text-slate-300 hover:text-white focus:outline-none p-2 -mr-2">
          <i class="fas" [class]="isOpen() ? 'fa-times' : 'fa-bars'"></i>
        </button>
      </div>

      <!-- Mobile Menu Dropdown -->
      @if (isOpen()) {
        <div class="md:hidden bg-slate-900/95 backdrop-blur-xl border-b border-white/10 px-4 sm:px-6 py-6 absolute w-full shadow-2xl">
          <div class="flex flex-col space-y-5">
            @for (item of navItems; track item.label) {
              <a [href]="item.href"
                 (click)="closeMenu()"
                 class="text-slate-300 hover:text-blue-400 text-base font-medium block">
                {{ item.label }}
              </a>
            }
            <button (click)="downloadResume()" class="bg-blue-600 text-white px-5 py-3 rounded-xl text-sm font-semibold w-full text-center shadow-lg shadow-blue-600/20 mt-2">
              Download Resume
            </button>
          </div>
        </div>
      }
    </nav>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {
  isOpen = signal(false);

  navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  toggleMenu() {
    this.isOpen.update(v => !v);
  }

  closeMenu() {
    this.isOpen.set(false);
  }

  downloadResume() {
    window.open('assets/resume.pdf', '_blank');
  }
}