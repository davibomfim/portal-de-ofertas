import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ofertas } from '../ofertas';

@Component({
  selector: 'inicio-ofertas',
  templateUrl: './inicio-ofertas.component.html',
  styleUrls: ['./inicio-ofertas.component.css']
})
export class InicioOfertasComponent implements OnInit {

  ofertas: Ofertas[] = [];
  hoteis: any;
  restaurantes: any;
  entreterimento: any;
  responsiveOptions;

  constructor(private http: HttpClient, private router: Router) {
    
		this.responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 3,
                numScroll: 3
            },
            {
                breakpoint: '768px',
                numVisible: 2,
                numScroll: 2
            },
            {
                breakpoint: '560px',
                numVisible: 1,
                numScroll: 1
            }
        ];
	}

	ngOnInit() {
    this.getHoteis();
    this.getRestaurantes();
    this.getEntreterimento();
    }

    getHoteis(){
      this.http.get('http://localhost:3004/ofertas?categoria.id=1').subscribe(res => {
			this.hoteis = res;
		});
    }

    getRestaurantes(){
      this.http.get('http://localhost:3004/ofertas?categoria.id=2').subscribe(res => {
			this.restaurantes = res;
		});
    }

    getEntreterimento(){
      this.http.get('http://localhost:3004/ofertas?categoria.id=3').subscribe(res => {
			this.entreterimento = res;
		});
    }

    abrirDetalhes(oferta: Ofertas) {

     this.router.navigate(['/detalhes-oferta'], {queryParams: oferta});
        
    }
    

}
