module.exports = {

  prompts: false,

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "FLISOL",
      description: "FLISOL - Pederneiras 2016",
      date: "Abril 16",
      // If your event is free, just comment this line
      //price: "$0",
      venue: "Faculdade - FGP",
      address: "R. Professsor Massud José Nachef, 1-2855",
      city: "Pederneiras",
      state: "São Paulo"
    },

    // The Call To Action button at the header,
    // If you don't want this, just remove the callToAction property.
    //callToAction: {
        //text: "Register now!",
        //link: "http://eventick.com.br"
    //},

    // "Fork me on GitHub", if you don't want this, just remove the forkButton property
    forkButton: {
        repository: "https://github.com/flisol-pederneiras/2016"
    },

    // Site info
    site: {
      theme: "yellow-swan",
      url: "https://github.com/flisol-pederneiras/2016", googleanalytics: "UA-33656081-1"
    },

    // Active sections on the website
    // to deactivate comment out with '//'
    // you can also change order here and it will reflect on page
    sections: [
      'about',
      'location',
      'speakers',
      'schedule',
      //'sponsors',
      'partners'
      //,'contact'
    ],

    // Labels which you can translate to other languages
    labels: {
      about: "Sobre",
      location: "Local",
      speakers: "Palestrantes",
      schedule: "Programação",
      //sponsors: "Patrocionadores",
      partners: "Patrocionadores / Parceiros"
      //,contact: "Contato"
    },

    // The entire schedule
    schedule: [
      {
        name: "Abertura / Apresentação",
        time: "08h00"
      },
      {
        name: "Paulo Leandro Rosa",
        photo: "themes/yellow-swan/img/paulo.jpg",
        bio: "Paulo Leandro Rosa (Dro13n) is the Information Security specialist, coordinator and director of the oldest and largest event in Latin America FLISOL. Active contributor to open source projects and vulnerability enthusiastic researcher and Malware analysis. ",
        company: "Br Security",
        link: {
          href: "https://br.linkedin.com/in/paulo-leandro-rosa-6a841338",
          text: "linkedin"
        },
        presentation: {
          title: "Como fazer ataques DDos",
          description: "Essa prática se tornou preocupação em todo mundo, com essa palestra você poderá aprofundar seus conhecimentos e ter uma melhor visão sobre como se proteger desse tipo de ataque.",
          time: "08h30",
          downloadLink: "palestras/DDoS-FLISoL.ppt"
        }
      },
      {
        name: "Jorge Luiz Taioque",
        photo: "themes/yellow-swan/img/jorge.jpg",
        bio: "I started study computing and telecomunications about 13 years. My first course was Delph programer, after that I don't stop study computing science more.",
        company: "LPNet Internet Provider",
        link: {
          href: "https://www.linkedin.com/in/jorgeluiztaioque",
          text: "linkedin"
        },
        presentation: {
          title: "Ambiente para estudos e pesquisas com software livre",
          description: "Como preparar um ambiente para estudos e pesquisas de rede com software livre",
          time: "09h15"
        }
      },
      {
        name: "Emerson Mellado",
        photo: "themes/yellow-swan/img/erm.png",
        bio: "Hi, my name is Emerson, I am a web developer passionate about technology, coffee and woodworking.",
        company: "ER7 Networks",
        link: {
          href: "https://www.linkedin.com/in/emersonmellado",
          text: "linkedin"
        },
        presentation: {
          title: "Desenvolvimento de aplicações modernas",
          description: "Como iniciar o desenvolvimento de uma aplicação moderna com as ferramentas atuais?",
          time: "09h45",
          downloadLink: "Http://emersonmellado.github.io/flisol-2016-presentation.io"
        }
      },      
      {
        name: "Café :)",
        time: "10h30"
      },
      {
        name: "Maicon Fernandes Domingues",
        photo: "themes/yellow-swan/img/no_profile_image_male.jpg",
        company: "Finch soluções",
        presentation: {
          title: "Machine learning",
          description: "O uso de ferramentas open-source para machine learning",
          time: "11h00"
        }
      },
      {
        name: "Julio Cesar Faracco",
        photo: "themes/yellow-swan/img/julio.jpg",
        bio: "",
        company: "IBM",
        presentation: {
          title: "Internet das Coisas com Arduino",
          description: "",
          time: "11h45",
          downloadLink: "palestras/Internet_of_Things.pdf"
        }
      },
      {
        name: "Almoço",
        time: "12h30"
      },
      {
        name: "Isabella Fontes",
        photo: "themes/yellow-swan/img/no_profile_image_female.jpg",
        bio: "",
        company: "MS Tech",
        presentation: {
          title: "Erlang",
          description: "Linguagem funcional, concorrente e tolerante a falhas. Conceitos e curiosidades.",
          time: "14h00"
        }
      },
      {
        name: "Gustavo Nobrega",
        photo: "themes/yellow-swan/img/no_profile_image_male.jpg",
        bio: "",
        company: "Sex Log",
        presentation: {
          title: "Linux e virtualização",
          description: "",
          time: "14h00"
        }
      },      
      {
        name: "Café :)",
        time: "15h30"
      },
      {
        name: "Marcelo Oliveiros Domingues",
        photo: "themes/yellow-swan/img/no_profile_image_male.jpg",
        bio: "",
        company: "",
        presentation: {
          title: "VANTs",
          description: "Software livre em controladoras de voo de VANTs - Drone Racing",
          time: "16h00",
          downloadLink: "palestras/Apresentacao_VANT.pdf"
        }
      },
      {
        name: "Juliano Ferreira Sturza",
        photo: "themes/yellow-swan/img/no_profile_image_male.jpg",
        bio: "",
        company: "",
        presentation: {
          title: "Zabbix",
          description: "Conhecendo o Sistema de Monitoramento Zabbix",
          time: "16h45"
        }
      },
      {
        name: "Encerramento",
        time: "17h30"
      }      
    ],

    // List of Sponsors
    sponsors: [
      {
        name: "FGP",
        logo: "themes/yellow-swan/img/fgp.jpg",
        url: "http://www.fgp.com.br/"
      }    
    ],

    // List of Partners
    partners: [
      {
        name: "FGP",
        logo: "themes/yellow-swan/img/fgp.jpg",
        url: "http://www.fgp.com.br/"
      },    
      {
        name: "br Security",
        logo: "themes/yellow-swan/img/br-security.jpg",
        url: "http://www.brsecurity.com.br"
      },
      {
        name: "ER7",
        logo: "themes/yellow-swan/img/er7.jpg",
        url: "http://www.er7.com.br"
      }      
    ],

    // Theme path
    getTheme: function() {
      return "themes/" + this.site.theme;
    },

    // Site Path
    getUrl: function() {
    	return this.site.url;
    }
  }
};