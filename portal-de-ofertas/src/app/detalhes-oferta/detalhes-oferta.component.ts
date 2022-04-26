import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'detalhes-oferta',
  templateUrl: './detalhes-oferta.component.html',
  styleUrls: ['./detalhes-oferta.component.css']
})
export class DetalhesOfertaComponent implements OnInit {

  oferta: any;

  images: any[] = [
    {
      previewImageSrc: 'https://www.primefaces.org/primeng/assets/showcase/images/galleria/galleria3.jpg' ,
      thumbnailImageSrc: 'https://www.primefaces.org/primeng/assets/showcase/images/galleria/galleria3s.jpg'
    },
    {
      previewImageSrc: 'https://www.primefaces.org/primeng/assets/showcase/images/galleria/galleria1.jpg' ,
      thumbnailImageSrc: 'https://www.primefaces.org/primeng/assets/showcase/images/galleria/galleria1s.jpg'
    },
    {
      previewImageSrc: 'https://www.primefaces.org/primeng/assets/showcase/images/galleria/galleria10.jpg' ,
      thumbnailImageSrc: 'https://www.primefaces.org/primeng/assets/showcase/images/galleria/galleria10s.jpg'
    }
  ];

  responsiveOptions:any[] = [
    {
        breakpoint: '1024px',
        numVisible: 5
    },
    {
        breakpoint: '768px',
        numVisible: 3
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
];

  constructor(private route: ActivatedRoute,
    private router: Router) {
      this.route.queryParams.subscribe(params => 
        this.oferta = params);
        console.log(this.oferta);
     }

  ngOnInit(): void {
   
  }

}
