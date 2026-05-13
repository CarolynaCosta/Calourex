import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButtons,
  IonBackButton,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
  standalone: true,

  imports: [
    CommonModule,

    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonButtons,
    IonBackButton,
  ],
})
export class EventsPage {

  events = [
    {
      title: 'Semana dos Calouros',
      date: '20/05/2026',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
      description: 'Integração entre alunos e apresentação da faculdade.'
    },

    {
      title: 'Workshop Acadêmico',
      date: '25/05/2026',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',
      description: 'Ferramentas acadêmicas e plataformas digitais.'
    },

    {
      title: 'Tour pela Faculdade',
      date: '30/05/2026',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644',
      description: 'Conheça laboratórios e espaços universitários.'
    },
  ];
}