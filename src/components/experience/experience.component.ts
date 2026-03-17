import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Job {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-20 sm:py-24 bg-slate-900/30">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center gap-4 mb-12">
          <div class="h-1 w-12 bg-blue-500 rounded-full"></div>
          <h2 class="text-3xl sm:text-4xl font-bold text-white tracking-tight">Professional Experience</h2>
        </div>

        <div class="relative border-l-2 border-slate-800 ml-3 md:ml-6 space-y-12">
          @for (job of jobs; track job.company) {
            <div class="relative pl-8 md:pl-12">
              <!-- Dot Indicator -->
              <div class="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-slate-900 border-2 border-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
              
              <div class="bg-slate-900/80 backdrop-blur-sm p-5 sm:p-6 md:p-8 rounded-3xl border border-slate-800 hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-900/10 transition-all">
                <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-3">
                  <div>
                    <h3 class="text-xl md:text-2xl font-bold text-white mb-1">{{ job.role }}</h3>
                    <div class="text-blue-400 font-medium text-base sm:text-lg">{{ job.company }}</div>
                  </div>
                  <div class="flex flex-col items-start md:items-end gap-2">
                    <span class="text-slate-400 font-mono text-xs sm:text-sm bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800">
                      {{ job.period }}
                    </span>
                    <span class="text-slate-500 text-sm flex items-center gap-1.5">
                      <i class="fas fa-map-marker-alt text-xs"></i> {{ job.location }}
                    </span>
                  </div>
                </div>
                
                <ul class="space-y-3">
                  @for (point of job.description; track point) {
                    <li class="flex items-start text-slate-300 text-sm sm:text-base leading-relaxed">
                      <span class="mr-3 mt-2 h-1.5 w-1.5 min-w-[6px] rounded-full bg-blue-500/50"></span>
                      <span>{{ point }}</span>
                    </li>
                  }
                </ul>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperienceComponent {
  jobs: Job[] = [
    {
      role: 'Lead | IT Analyst - Data Engineer',
      company: 'TATA Consultancy Services',
      period: 'Aug 2022 - Current',
      location: 'Hyderabad, Telangana',
      description: [
        'Working as a data engineer with data scientists to analyze client data to enhance business standards.',
        'Managed applications using PostgreSQL, SQL Server, and Oracle.',
        'Utilized AWS Cloud Services (S3, EC2) for Application and Database Support.',
        'Developed complex SQL queries for Qlik Dashboards.',
        'Monitored production databases and led troubleshooting of ongoing issues.',
        'Mentored team members, delegated tasks, and fostered team growth.'
      ]
    },
    {
      role: 'Senior Associate - Database',
      company: 'N. A. Sportz Interactive Private Limited',
      period: 'Aug 2021 - July 2022',
      location: 'Mumbai, Maharashtra',
      description: [
        'Architected database structures for sports management client applications.',
        'Implemented automated data ingestion algorithms into multiple tables.',
        'Managed projects using PostgreSQL and SQL Server technologies.',
        'Planned and implemented table structures based on industry requirements.'
      ]
    },
    {
      role: 'Database Developer',
      company: 'Sheliza Technologies Private Limited',
      period: 'Sep 2019 - Aug 2021',
      location: 'Hyderabad, Telangana',
      description: [
        'Designed physical table structures integrating business goals.',
        'Developed architectural strategies for modeling, design, and implementation.',
        'Administered and monitored databases, proactively resolving issues.',
        'Set up user profiles and security access levels.'
      ]
    },
    {
      role: 'Software Engineer',
      company: 'Bridge IT Solutions',
      period: 'Oct 2016 - Aug 2019',
      location: 'Hyderabad, Telangana',
      description: [
        'Partnered with development teams on product prototypes and support plans.',
        'Created scripts for data integration, maintenance, and system monitoring.',
        'Optimized performance strategies for continuous improvement.',
        'Maintained complex T-SQL queries and stored procedures.'
      ]
    }
  ];
}