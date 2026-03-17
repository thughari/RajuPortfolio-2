import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-20 sm:py-24 relative">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12 sm:mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">Technical Proficiency</h2>
          <p class="text-slate-400 text-base sm:text-lg">A comprehensive toolkit for modern data engineering</p>
        </div>

        <div class="grid sm:grid-cols-2 gap-6 lg:gap-8">
          @for (category of skillCategories; track category.title) {
            <div class="bg-slate-900/50 backdrop-blur-sm p-6 sm:p-8 rounded-3xl border border-slate-800 hover:border-blue-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/10">
              <div class="flex items-center gap-4 mb-6">
                <div class="p-3.5 rounded-xl bg-blue-500/10 text-blue-400">
                  <i [class]="category.icon + ' text-xl'"></i>
                </div>
                <h3 class="text-lg sm:text-xl font-bold text-white">{{ category.title }}</h3>
              </div>
              
              <div class="flex flex-wrap gap-2 sm:gap-2.5">
                @for (skill of category.skills; track skill) {
                  <span class="px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 text-xs sm:text-sm font-medium hover:bg-blue-600 hover:text-white hover:border-blue-500 transition-colors cursor-default">
                    {{ skill }}
                  </span>
                }
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillsComponent {
  skillCategories = [
    {
      title: 'Databases',
      icon: 'fas fa-database',
      skills: ['Microsoft SQL Server', 'PostgreSQL', 'Oracle PL/SQL', 'MySQL', 'MongoDB (NoSQL)', 'BigQuery']
    },
    {
      title: 'Cloud & Infrastructure',
      icon: 'fas fa-cloud',
      skills: ['AWS S3', 'AWS EC2', 'Google Cloud Platform', 'Databricks', 'Azure Basics']
    },
    {
      title: 'Data Engineering & ETL',
      icon: 'fas fa-cogs',
      skills: ['SSIS', 'SSRS', 'ETL Pipelines', 'Data Warehousing', 'Data Modeling', 'Data Migration', 'Apache Spark']
    },
    {
      title: 'Programming & Web',
      icon: 'fas fa-code',
      skills: ['Python', 'Django', 'T-SQL', 'JavaScript', 'HTML5', 'CSS3', 'Shell Scripting']
    }
  ];
}