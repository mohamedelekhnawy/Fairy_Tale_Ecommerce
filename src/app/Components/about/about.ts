import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Button1Style } from '../../Directives/button1-style';
import { Button2Style } from '../../Directives/button2-style';
import { ElmentScale } from '../../Directives/elment-scale';

@Component({
  selector: 'app-about',
  imports: [CommonModule, Button1Style, Button2Style, ElmentScale],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class AboutComponent {
  
  teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & Lead Artisan',
      image: 'assets/images/kat-med-UrxnKcg-N7w-unsplash.jpg',
      description: 'With over 15 years of experience in handcraft artistry, Sarah founded Fairy Tale to bring magical, handmade bags to fashion lovers worldwide.'
    },
    {
      name: 'Maria Rodriguez',
      role: 'Master Craftsperson',
      image: 'assets/images/marija-zaric-Q-4p4IShdTc-unsplash.jpg',
      description: 'Maria specializes in intricate beadwork and pearl detailing, ensuring every bag meets our highest standards of quality and beauty.'
    },
    {
      name: 'Chen Li',
      role: 'Design Director',
      image: 'assets/images/js-chen-7MwBWUF2D1E-unsplash.jpg',
      description: 'Chen brings innovative design concepts to life, blending traditional craftsmanship with modern aesthetic sensibilities.'
    }
  ];

  milestones = [
    {
      year: '2018',
      title: 'The Beginning',
      description: 'Sarah started crafting bags from her home studio with a dream to create something truly special.'
    },
    {
      year: '2020',
      title: 'First Workshop',
      description: 'Opened our first dedicated workshop and hired our first team of skilled artisans.'
    },
    {
      year: '2022',
      title: 'Growing Family',
      description: 'Expanded to a team of 15 craftspeople and launched our online presence.'
    },
    {
      year: '2024',
      title: 'Magical Present',
      description: 'Now serving customers worldwide with over 1000 unique handcrafted pieces created.'
    }
  ];

  values = [
    {
      icon: 'fas fa-heart',
      title: 'Passion for Craft',
      description: 'Every stitch is made with love and dedication to the art of handcrafting.'
    },
    {
      icon: 'fas fa-leaf',
      title: 'Sustainable Materials',
      description: 'We source eco-friendly materials and practice sustainable crafting methods.'
    },
    {
      icon: 'fas fa-users',
      title: 'Artisan Community',
      description: 'Supporting local artisans and preserving traditional crafting techniques.'
    },
    {
      icon: 'fas fa-star',
      title: 'Quality Excellence',
      description: 'Uncompromising quality standards ensure each bag is a masterpiece.'
    }
  ];

  constructor() { }
}
