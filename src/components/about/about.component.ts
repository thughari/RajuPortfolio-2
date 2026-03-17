import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-20 sm:py-24 bg-slate-900/50">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto">
          <div class="flex items-center gap-4 mb-8">
            <div class="h-1 w-12 bg-blue-500 rounded-full"></div>
            <h2 class="text-3xl sm:text-4xl font-bold text-white tracking-tight">About Me</h2>
          </div>
          
          <div class="bg-slate-800/40 backdrop-blur-sm p-6 sm:p-8 rounded-3xl border border-white/5 shadow-xl">
            <p class="text-base sm:text-lg text-slate-300 leading-relaxed mb-6">
              I am a <span class="text-blue-400 font-semibold">Senior Data Engineer</span> with over 9 years of hands-on experience in designing and programming complex database architectures. My expertise spans across Microsoft SQL Server, PostgreSQL, and Oracle, with a strong focus on cloud integration.
            </p>
            <p class="text-base sm:text-lg text-slate-300 leading-relaxed mb-6">
              Currently working as a Lead IT Analyst at <span class="text-white font-medium">TATA Consultancy Services</span>, I specialize in analyzing client data to enhance business standards, building robust data pipelines, and architecting scalable solutions on AWS.
            </p>
            <p class="text-base sm:text-lg text-slate-300 leading-relaxed">
              I possess strong analytical and troubleshooting skills, capable of resolving complex database performance issues and leading teams to deliver enterprise-grade applications.
            </p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-8">
            <div class="p-6 bg-slate-950/80 backdrop-blur-sm rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-colors shadow-lg">
              <i class="fas fa-database text-3xl text-blue-500 mb-4"></i>
              <h3 class="text-lg sm:text-xl font-semibold text-white mb-2">DB Architecture</h3>
              <p class="text-slate-400 text-sm leading-relaxed">Design & development of schemas, stored procedures, and secure data structures.</p>
            </div>
            <div class="p-6 bg-slate-950/80 backdrop-blur-sm rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-colors shadow-lg">
              <i class="fas fa-cloud text-3xl text-indigo-500 mb-4"></i>
              <h3 class="text-lg sm:text-xl font-semibold text-white mb-2">Cloud Platforms</h3>
              <p class="text-slate-400 text-sm leading-relaxed">Expertise in AWS (S3, EC2) and data migration strategies.</p>
            </div>
            <div class="p-6 bg-slate-950/80 backdrop-blur-sm rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-colors shadow-lg sm:col-span-2 md:col-span-1">
              <i class="fas fa-project-diagram text-3xl text-purple-500 mb-4"></i>
              <h3 class="text-lg sm:text-xl font-semibold text-white mb-2">Data Pipelines</h3>
              <p class="text-slate-400 text-sm leading-relaxed">Building efficient ETL processes and automated reporting systems.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent {}