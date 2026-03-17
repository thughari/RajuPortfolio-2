import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="min-h-screen flex items-center justify-center pt-20 px-6 relative">
      <div class="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <!-- Text Content -->
        <div class="order-2 md:order-1 text-center md:text-left">
          <div class="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold mb-6 animate-fade-in-up">
            Available for Senior Roles
          </div>
          <h1 class="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
            Hi, I'm <span class="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">Raju Bandaram</span>
          </h1>
          <h2 class="text-2xl md:text-3xl text-slate-400 mb-6 font-light">
            Senior Data Engineer
          </h2>
          <p class="text-slate-400 text-lg mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
            Specializing in Cloud Architecture, Database Engineering, and Scalable Data Pipelines with 9+ years of enterprise experience.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#projects" class="px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold transition-all shadow-lg shadow-blue-600/25 text-center">
              View Projects
            </a>
            <a href="#contact" class="px-8 py-3.5 bg-transparent border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white rounded-lg font-semibold transition-all text-center">
              Contact Me
            </a>
          </div>

          <div class="mt-12 flex gap-8 justify-center md:justify-start text-slate-500">
            <div class="flex flex-col">
              <span class="text-3xl font-bold text-slate-200">9+</span>
              <span class="text-sm">Years Exp</span>
            </div>
            <div class="flex flex-col">
              <span class="text-3xl font-bold text-slate-200">20+</span>
              <span class="text-sm">Projects</span>
            </div>
            <div class="flex flex-col">
              <span class="text-3xl font-bold text-slate-200">3+</span>
              <span class="text-sm">Clouds</span>
            </div>
          </div>
        </div>

        <!-- Visual Content -->
        <div class="order-1 md:order-2 flex justify-center relative">
          <div class="relative w-72 h-72 md:w-96 md:h-96">
            <div class="absolute inset-0 bg-blue-600 rounded-full blur-[100px] opacity-20 animate-pulse"></div>
            <img 
              src="https://picsum.photos/400/400?grayscale" 
              alt="Raju Bandaram" 
              class="relative z-10 w-full h-full object-cover rounded-full border-4 border-slate-800 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
            >
          </div>
        </div>
      </div>
      
      <!-- Scroll Indicator -->
      <a href="#about" class="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-slate-500 hover:text-blue-400 animate-bounce cursor-pointer">
        <i class="fas fa-chevron-down text-2xl"></i>
      </a>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent {}