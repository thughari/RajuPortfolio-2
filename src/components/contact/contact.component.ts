import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="py-24 relative overflow-hidden">
      <!-- Background glow -->
      <div class="absolute right-0 bottom-0 w-1/3 h-1/3 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div class="container mx-auto px-6 relative z-10">
        <div class="grid md:grid-cols-2 gap-16">
          
          <!-- Contact Info -->
          <div>
            <h2 class="text-4xl font-bold text-white mb-6">Let's Connect</h2>
            <p class="text-slate-400 text-lg mb-12">
              I'm always interested in hearing about new projects and opportunities in Data Engineering and Architecture.
            </p>

            <div class="space-y-8">
              <div class="flex items-start gap-4">
                <div class="p-3 bg-slate-800 rounded-lg text-blue-400">
                  <i class="fas fa-envelope text-xl"></i>
                </div>
                <div>
                  <h3 class="text-white font-semibold">Email</h3>
                  <a href="mailto:Bandaram.raju@gmail.com" class="text-slate-400 hover:text-blue-400 transition-colors">
                    Bandaram.raju@gmail.com
                  </a>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="p-3 bg-slate-800 rounded-lg text-blue-400">
                  <i class="fas fa-map-marker-alt text-xl"></i>
                </div>
                <div>
                  <h3 class="text-white font-semibold">Location</h3>
                  <p class="text-slate-400">Hyderabad, Telangana, India</p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="p-3 bg-slate-800 rounded-lg text-blue-400">
                  <i class="fas fa-phone-alt text-xl"></i>
                </div>
                <div>
                  <h3 class="text-white font-semibold">Phone</h3>
                  <p class="text-slate-400">+91-99518-33517</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-xl">
            <form (ngSubmit)="onSubmit()" #contactForm="ngForm">
              <div class="mb-6">
                <label for="name" class="block text-sm font-medium text-slate-400 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  [(ngModel)]="formData.name"
                  required
                  class="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-slate-600"
                  placeholder="Your Name"
                >
              </div>

              <div class="mb-6">
                <label for="email" class="block text-sm font-medium text-slate-400 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  [(ngModel)]="formData.email"
                  required 
                  class="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-slate-600"
                  placeholder="you@company.com"
                >
              </div>

              <div class="mb-6">
                <label for="message" class="block text-sm font-medium text-slate-400 mb-2">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  [(ngModel)]="formData.message"
                  required
                  rows="4" 
                  class="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-slate-600"
                  placeholder="How can I help you?"
                ></textarea>
              </div>

              <button 
                type="submit" 
                [disabled]="isSubmitting()"
                class="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg transition-all shadow-lg shadow-blue-600/20 disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center"
              >
                @if (isSubmitting()) {
                  <i class="fas fa-circle-notch fa-spin mr-2"></i> Sending...
                } @else {
                  Send Message
                }
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };
  
  isSubmitting = signal(false);

  onSubmit() {
    this.isSubmitting.set(true);
    // Simulate API call
    setTimeout(() => {
      alert(`Thanks ${this.formData.name}! Message sent (Simulation).`);
      this.isSubmitting.set(false);
      this.formData = { name: '', email: '', message: '' };
    }, 1500);
  }
}