import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CertificationsComponent } from './components/certifications/certifications.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    ProjectsComponent,
    CertificationsComponent,
    ContactComponent,
    FooterComponent
  ],
  template: `
    <div class="min-h-screen flex flex-col relative overflow-hidden">
      <!-- Background Decorations -->
      <div class="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        <div class="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px]"></div>
        <div class="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/10 rounded-full blur-[120px]"></div>
      </div>

      <app-navbar class="z-50"></app-navbar>

      <main class="z-10 flex-grow">
        <app-hero id="home"></app-hero>
        <app-about id="about"></app-about>
        <app-skills id="skills"></app-skills>
        <app-experience id="experience"></app-experience>
        <app-projects id="projects"></app-projects>
        <app-certifications id="certifications"></app-certifications>
        <app-contact id="contact"></app-contact>
      </main>

      <app-footer class="z-10"></app-footer>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'raju-bandaram-portfolio';
}