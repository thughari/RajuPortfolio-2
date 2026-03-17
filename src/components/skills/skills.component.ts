import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-24 relative">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">Technical Proficiency</h2>
          <p class="text-slate-400">A comprehensive toolkit for modern data engineering</p>
        </div>

        <div class="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          @for (category of skillCategories; track category.title) {
            <div class="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 hover:border-blue-500/30 transition-all duration-300">
              <div class="flex items-center gap-3 mb-6">
                <div class="p-3 rounded-lg bg-blue-500/10 text-blue-400">
                  <i [class]="category.icon"></i>
                </div>
                <h3 class="text-xl font-bold text-white">{{ category.title }}</h3>
              </div>
              
              <div class="flex flex-wrap gap-2">
                @for (skill of category.skills; track skill) {
                  <span class="px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-sm font-medium hover:bg-blue-600 hover:text-white hover:border-blue-500 transition-colors cursor-default">
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