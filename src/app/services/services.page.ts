import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonBackButton,
  IonIcon,
  IonCard,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-services',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonBackButton,
    IonIcon,
    IonCard,
  ],
})
export class ServicesPage {
  services = [
    {
      name: 'Secretaria Acadêmica',
      description: 'Matrícula, documentos, declarações e solicitações.',
      icon: 'school-outline',
      location: 'Bloco A',
      contact: '(21) 99999-0001',
      tag: 'Documentos',
    },
    {
      name: 'Coordenação',
      description: 'Orientações sobre disciplinas, grade e apoio acadêmico.',
      icon: 'people-outline',
      location: 'Bloco B',
      contact: '(21) 99999-0002',
      tag: 'Curso',
    },
    {
      name: 'Biblioteca',
      description: 'Livros, espaço de estudo e apoio à pesquisa.',
      icon: 'library-outline',
      location: 'Bloco Central',
      contact: '(21) 99999-0003',
      tag: 'Estudos',
    },
    {
      name: 'Suporte TI',
      description: 'Ajuda com portal do aluno, login e plataformas digitais.',
      icon: 'desktop-outline',
      location: 'Laboratório 3',
      contact: '(21) 99999-0004',
      tag: 'Tecnologia',
    },
  ];
}