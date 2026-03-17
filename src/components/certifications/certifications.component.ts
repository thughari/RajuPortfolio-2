import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-20 bg-slate-900/30">
      <div class="container mx-auto px-6">
         <div class="flex items-center gap-4 mb-10">
          <div class="h-1 w-12 bg-blue-500 rounded-full"></div>
          <h2 class="text-3xl font-bold text-white">Certifications</h2>
        </div>

        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-all group">
            <div class="mb-4">
              <i class="fab fa-aws text-4xl text-orange-500 group-hover:scale-110 transition-transform block"></i>
            </div>
            <h3 class="text-lg font-bold text-white mb-1">AWS Certified Associate</h3>
            <p class="text-blue-400 text-sm font-medium">Developer</p>
          </div>

          <div class="bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-all group">
            <div class="mb-4">
              <i class="fas fa-brain text-4xl text-purple-500 group-hover:scale-110 transition-transform block"></i>
            </div>
            <h3 class="text-lg font-bold text-white mb-1">AWS Partner</h3>
            <p class="text-blue-400 text-sm font-medium">Generative AI Essentials</p>
          </div>

          <div class="bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-all group">
            <div class="mb-4">
              <i class="fas fa-database text-4xl text-blue-400 group-hover:scale-110 transition-transform block"></i>
            </div>
            <h3 class="text-lg font-bold text-white mb-1">PostgreSQL Certified</h3>
            <p class="text-blue-400 text-sm font-medium">Udemy</p>
          </div>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CertificationsComponent {}