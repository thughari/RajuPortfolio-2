import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-24">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p class="text-slate-400">Delivering scalable enterprise solutions</p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          @for (project of projects; track project.title) {
            <div class="group relative bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/20">
              <!-- Header -->
              <div class="p-8 pb-4">
                <div class="flex justify-between items-start mb-4">
                  <div class="p-3 bg-blue-600/10 rounded-lg text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                     <i [class]="project.icon"></i>
                  </div>
                  <span class="text-xs font-mono text-slate-500 border border-slate-800 px-2 py-1 rounded">
                    Enterprise
                  </span>
                </div>
                <h3 class="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{{ project.title }}</h3>
                <p class="text-slate-400 leading-relaxed mb-6">{{ project.description }}</p>
              </div>

              <!-- Tech Stack -->
              <div class="px-8 pb-8">
                <div class="flex flex-wrap gap-2 mb-6">
                  @for (tech of project.tech; track tech) {
                    <span class="text-xs font-semibold px-2.5 py-1 rounded bg-slate-800 text-slate-300">
                      {{ tech }}
                    </span>
                  }
                </div>
                
                <div class="pt-6 border-t border-slate-800 flex justify-between items-center">
                   <div class="text-sm text-slate-500">
                     <i class="fas fa-check-circle mr-2 text-green-500"></i> Completed
                   </div>
                   <button class="text-blue-400 text-sm font-semibold hover:text-blue-300 flex items-center gap-2">
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