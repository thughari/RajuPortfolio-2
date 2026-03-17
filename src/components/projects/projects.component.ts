import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-20 sm:py-24">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12 sm:mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">Featured Projects</h2>
          <p class="text-slate-400 text-base sm:text-lg">Delivering scalable enterprise solutions</p>
        </div>

        <div class="grid md:grid-cols-2 gap-6 lg:gap-8">
          @for (project of projects; track project.title) {
            <div class="group relative bg-slate-900/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-slate-800 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/20 flex flex-col">
              <!-- Header -->
              <div class="p-6 sm:p-8 pb-4 flex-grow">
                <div class="flex justify-between items-start mb-6">
                  <div class="p-3.5 bg-blue-600/10 rounded-xl text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                     <i [class]="project.icon + ' text-xl'"></i>
                  </div>
                  <span class="text-xs font-mono text-slate-500 border border-slate-800 px-2.5 py-1 rounded-md bg-slate-950/50">
                    Enterprise
                  </span>
                </div>
                <h3 class="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{{ project.title }}</h3>
                <p class="text-slate-400 text-sm sm:text-base leading-relaxed mb-6">{{ project.description }}</p>
              </div>

              <!-- Tech Stack -->
              <div class="px-6 sm:px-8 pb-6 sm:pb-8 mt-auto">
                <div class="flex flex-wrap gap-2 mb-6">
                  @for (tech of project.tech; track tech) {
                    <span class="text-xs font-medium px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-300">
                      {{ tech }}
                    </span>
                  }
                </div>
                
                <div class="pt-6 border-t border-slate-800/50 flex justify-between items-center">
                   <div class="text-sm text-slate-500 font-medium">
                     <i class="fas fa-check-circle mr-1.5 text-emerald-500"></i> Completed
                   </div>
                   <button class="text-blue-400 text-sm font-semibold hover:text-blue-300 flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                     Details <i class="fas fa-arrow-right"></i>
                   </button>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Enterprise Data Warehouse',
      description: 'Architected a centralized data repository integrating multiple business streams using SQL Server and SSIS. Streamlined data entry and reduced processing time by 40%.',
      icon: 'fas fa-server',
      tech: ['SQL Server', 'SSIS', 'Data Modeling', 'T-SQL']
    },
    {
      title: 'Cloud Analytics Platform',
      description: 'Built a scalable analytics backend on AWS EC2 & S3. Implemented automated ingestion pipelines for processing large datasets for client graphical analysis.',
      icon: 'fas fa-chart-line',
      tech: ['AWS S3', 'AWS EC2', 'Python', 'PostgreSQL']
    },
    {
      title: 'Sports Management DB',
      description: 'Designed and implemented high-performance database schemas for sports client applications. Handled real-time data ingestion during live events.',
      icon: 'fas fa-running',
      tech: ['PostgreSQL', 'Performance Tuning', 'Automation']
    },
    {
      title: 'Qlik Dashboard Integration',
      description: 'Developed complex data aggregation layers and SQL views to power executive Qlik dashboards, enabling real-time business decision making.',
      icon: 'fas fa-tachometer-alt',
      tech: ['SQL', 'Qlik', 'Data Aggregation', 'Oracle']
    }
  ];
}