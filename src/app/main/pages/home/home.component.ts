import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [
        `
            .writer {
                color: #fff;
            }
        `,
    ],
})
export class HomeComponent implements OnInit {
    // Public properties
    public services = [
        {
            section_title: 'Servicios Populares',
            section_description: 'Servicios disponibles para reservar 24/7.',
            view_all_link: '',
            items: [
                {
                    _id: '1',
                    name: 'Eléctrico Barrios',
                    category: 'Técnico',
                    image: 'assets/images/services/electrical-02.jpg',
                    cities: ['La Habana'],
                    rating: 5,
                },
                {
                    _id: '2',
                    name: 'F&C Travel',
                    category: 'Viajes',
                    image: 'assets/images/services/transfer-01.jpg',
                    cities: ['Toda Cuba'],
                    rating: 5,
                },
            ],
        },
    ];
    public city_section = [
        {
            section_title: 'Popular Cities',
            section_description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
            view_all_link: '',

            items: [
                {
                    title: 'London',
                    image: 'pic2.jpg',
                    url: 'listing-details',
                    total_place: 12,
                    total_listing: '30+',
                    featured: false,
                    rating: '',
                },
                {
                    title: 'United States',
                    image: 'pic3.jpg',
                    url: 'listing-details',
                    total_place: 12,
                    total_listing: '30+',
                    featured: false,
                    rating: '',
                },
                {
                    title: 'Korea',
                    image: 'pic4.jpg',
                    url: 'listing-details',
                    total_place: 12,
                    total_listing: '30+',
                    featured: false,
                    rating: '',
                },
                {
                    title: 'Japan',
                    image: 'pic5.jpg',
                    url: 'listing-details',
                    total_place: 12,
                    total_listing: 10,
                    featured: false,
                    rating: '',
                },

            ],
        },
    ];
    public howItWorks: any = [
        {
            title: '¿Buscador?',
            icon_class: 'ti-search',
            description: 'Realice una búsqueda general o en detalle según sus preferencias.',
        },
        {
            title: 'Resultados',
            icon_class: 'ti-gift',
            description: 'Revise en detalle de los negocios encontrados.',
        },
        {
            title: 'Reserve o contacte',
            icon_class: 'ti-rocket',
            description: 'Reserve un servicio o cita o contacte con el negocio de su interés.',
        },
    ];
    testimonials: any = [
        {
            name: 'Diamond Anderson',
            role: 'Founder, uihub inc.',
            image: 'pic1.jpg',
            sub_heading: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        },
        {
            name: 'Diamond Anderson',
            role: 'Founder, uihub inc.',
            image: 'pic2.jpg',
            sub_heading: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        },
        {
            name: 'Diamond Anderson',
            role: 'Founder, uihub inc.',
            image: 'pic3.jpg',
            sub_heading: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        },
        {
            name: 'Diamond Anderson',
            role: 'Founder, uihub inc.',
            image: 'pic1.jpg',
            sub_heading: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        },

    ];

    blogs: any = [
        {
            image: 'pic1.jpg',
            catgegory: 'Tarvel',
            title: '7 Moments To Remember From Directory.',
            description: 'Achieving only 1 out of the 4 (traffic, opt-in, conversion, email) doesn’t do much help either.',
            url: 'blog-details',
            author: 'John Doe',
            comments: '12',
        },
        {
            image: 'pic3.jpg',
            catgegory: 'Foods',
            title: 'Directory Will Be A Thing Of The Past.',
            description: 'Knowing that, you’ve optimised your pages countless amount of times, written tons of eye catching.',
            url: 'blog-details',
            author: 'Rosalina',
            comments: '08',
        },
        {
            image: 'pic2.jpg',
            catgegory: 'Hotel',
            title: 'Ten Things Your Competitors Know About.',
            description: 'As desperate as you are right now, you have done everything you can on your website to say.',
            url: 'blog-details',
            author: 'John Smith',
            comments: '03',
        },
        {
            image: 'pic1.jpg',
            catgegory: 'Tarvel',
            title: '7 Moments To Remember From Directory.',
            description: 'Achieving only 1 out of the 4 (traffic, opt-in, conversion, email) doesn’t do much help either.',
            url: 'blog-details',
            author: 'John Doe',
            comments: '12',
        },

    ];

    customOptions: OwlOptions = {
        loop: true,
        autoplaySpeed: 3000,
        navSpeed: 3000,
        /* paginationSpeed: 3000, */
        /* slideSpeed: 3000, */
        smartSpeed: 3000,
        autoplay: true,
        margin: 30,
        nav: true,
        dots: false,
        navText: ['<i class="la la-angle-left"></i>', '<i class="la la-angle-right"></i>'],
        responsive: {
            0: {
                items: 1,
            },
            480: {
                items: 2,
            },
            1024: {
                items: 3,
            },
            1200: {
                items: 5,
            },
        },
    };
    constructor() { }

    ngOnInit(): void {
    }
}
