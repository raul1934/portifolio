import { Component } from '@angular/core';
import Project from '../shared/services/models/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  highlights: Array<Project> = [
    {
      name: "Portifólio Pessoal",
      cover: "/assets/img/sistemas/portifolio/portifolio_01.png",
      paragraphs: [
        `Portifólio pessoal desenvolvido em Angular v15`,
        `Desenvolvi esse projeto tendo em vista`],
      github: "https://github.com/raul1934/maisup",
      images: ["/assets/img/sistemas/portifolio/portifolio_01.png"],
      list: [],
      techs: ["Angular", "HTML5", "CSS3", "SASS"]
    },
    {
      name: "Biblioteca de componentes Angular",
      cover: "/assets/img/sistemas/angular-components/angular-components_01.png",
      paragraphs: [`É composto por uma coleção de componentes reutilizáveis projetados especificamente para serem usados na criação de aplicativos Angular. Esses componentes fornecem uma interface de usuário pronta para uso e uma solução confiável para vários problemas comuns, tornando mais fácil e eficiente o desenvolvimento de aplicativos. `,
        `Além disso, a biblioteca inclui componentes personalizáveis e fáceis de usar que podem ser adaptados às necessidades específicas de um projeto. `,
        `Com a biblioteca de componentes para Angular, os desenvolvedores podem se concentrar no desenvolvimento do negócio e na implementação de funcionalidades avançadas, sem precisar se preocupar com a criação de componentes básicos.`],
      github: "https://github.com/raul1934/rodobens-components",
      images: [
        "/assets/img/sistemas/angular-components/angular-components_01.png",
        "/assets/img/sistemas/angular-components/angular-components_02.png",
        "/assets/img/sistemas/angular-components/angular-components_03.png",
        "/assets/img/sistemas/angular-components/angular-components_04.png",
        "/assets/img/sistemas/angular-components/angular-components_05.png",
        "/assets/img/sistemas/angular-components/angular-components_06.png",
        "/assets/img/sistemas/angular-components/angular-components_07.png",
        "/assets/img/sistemas/angular-components/angular-components_08.png",
        "/assets/img/sistemas/angular-components/angular-components_09.png",
        "/assets/img/sistemas/angular-components/angular-components_10.png"
      ],
      list: [],
      techs: ["Angular", "HTML5", "CSS3", "SASS"]
    },
    {
      name: "TRIBO DA SORTE ONLINE",
      cover: "/assets/img/sistemas/tribo/tribo_01.png",
      paragraphs: [`Aplicativo baseado em web com o objetivo de venda de bolões de loterias, conta com toda a parte de
      cadastro de loterias, bolões, resultados, faixas de premiação. Realiza pagamentos com o
      mercado pago.`,
        `Atuei exclusivamente no desenvolvimento front end, ajudei também na modelagem do banco de dados. Utilizei
      o NgZorro/Ant Design no desenvolvimento do Frontend. O aplicativo foi desenvolvido a partir do zero.`],
      github: "https://github.com/agencia-ao4/tribodasorte-front",
      images: [
        "/assets/img/sistemas/tribo/tribo_01.png",
        "/assets/img/sistemas/tribo/tribo_02.png",
        "/assets/img/sistemas/tribo/tribo_03.png",
        "/assets/img/sistemas/tribo/tribo_04.png",
        "/assets/img/sistemas/tribo/tribo_05.png",
      ],
      list: [],
      techs: ["Angular", "Laravel", "Mysql", "HTML5", "CSS3"]
    },
    {
      name: "VENTORY",
      cover: '/assets/img/sistemas/ventory/ventory_logo.png',
      paragraphs: [
        `Aplicativo baseado em web com o objetivo de auxiliar a empresa Royal Açaí na venda de produtos
      alimentícios por delivery. Conta com toda a estrutura cadastro de produtos, cardápio,
      customização de acompanhamentos, carrinho de compras e cálculo de valor de frete relativo a
      distância do cliente.`,
        `Atuei exclusivamente no desenvolvimento front end. Não foi utilizado nenhuma biblioteca de componentes.`],
      github: "https://github.com/agencia-ao4/tribodasorte-front",
      images: [
        '/assets/img/sistemas/ventory/ventory_01.png',
        '/assets/img/sistemas/ventory/ventory_02.png',
        '/assets/img/sistemas/ventory/ventory_03.png',
        '/assets/img/sistemas/ventory/ventory_04.png',
        '/assets/img/sistemas/ventory/ventory_05.png',
        '/assets/img/sistemas/ventory/ventory_06.png'],
      list: [],
      techs: [
        "VueJS", "Quasar", "Laravel", "Mysql"
      ],
      twoColsImages: true
    },
    {
      name: "APP Recebimentos",
      cover: '/assets/img/sistemas/app-recebimentos/logo.png',
      paragraphs: [`Aplicativo baseado em web com o objetivo de oferecer aos clientes da empresa Velani Digital uma alternativa
      no gerenciamento de contas. Possui as funcionalidades de cadastro de clientes, cadastro de contas
      bancárias, lançamento de receitas e despesas.`,
        `Atuei no desenvolvimento de novas funcionalidades, entre elas a unificação das telas de lançamentos de
        receitas e despesas, implantação do open bank.`],
      github: "https://github.com/agencia-ao4/tribodasorte-front",
      images: [
        '/assets/img/sistemas/app-recebimentos/01.png',
        '/assets/img/sistemas/app-recebimentos/02.png',
        '/assets/img/sistemas/app-recebimentos/03.png',
        '/assets/img/sistemas/app-recebimentos/04.png',
        '/assets/img/sistemas/app-recebimentos/05.png',
        '/assets/img/sistemas/app-recebimentos/06.jpg',
        '/assets/img/sistemas/app-recebimentos/07.jpg',
      ],
      list: [],
      techs: ["Flutter", 'Material Design', "Bloc", "Laravel", "Mysql"],
      twoColsImages: true
    },
  ];
}
