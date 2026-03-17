import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="bg-slate-950 border-t border-slate-900 py-12">
      <div class="container mx-auto px-6">
        <div class="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div class="text-center md:text-left">
            <h3 class="text-2xl font-bold text-white mb-2">Raju Bandaram</h3>
            <p class="text-slate-500 text-sm">Senior Data Engineer • Cloud Architect</p>
          </div>

          <div class="flex gap-6">
            <a href="#" class="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all">
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a href="#" class="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-gray-700 hover:text-white transition-all">
              <i class="fab fa-github"></i>
            </a>
            <a href="mailto:Bandaram.raju@gmail.com" class="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-red-500 hover:text-white transition-all">
              <i class="fas fa-envelope"></i>
            </a>
          </div>
        </div>
        
        <div class="mt-8 pt-8 border-t border-slate-900 text-center text-slate-600 text-sm">
          &copy; {{ currentYear }} Raju Bandaram. All rights reserved.
        </div>
      </div>
    </footer>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}