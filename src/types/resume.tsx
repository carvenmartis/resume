export interface ProfileProps {
  name: string;
  prefix: string;
  title: string;
  summary: string;
}

export interface ContactProps {
  location: string;
  phone: string;
  email: string;
}

export interface DegreeProps {
  title: string;
  school: string;
  city: string;
  startDate: string;
  endDate: string;
}

export interface CertificationProps {
  title: string;
  company: string;
  date: string;
}

export interface LanguageItemProps {
  title: string;
  level: number;
}

export interface SkillsProps {
  programming: string[];
  languages: LanguageItemProps[];
}

export interface ResponsibilityProps {
  description: string;
}

export interface Experience {
  position: string;
  company: string;
  period: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export interface ResumeProps {
  profile: ProfileProps;
  contact: ContactProps;
  degrees: DegreeProps[];
  certifications: CertificationProps[];
  skills: SkillsProps;
  experiences: Experience[];
}

// Example usage:
export const ResumeData: ResumeProps = {
  profile: {
    name: "Carven Martis",
    prefix: ".NET Developer",
    title: "Senior Fullstack Developer & DevOps Engineer",
    summary:
      "Als software developer met een sterke DevOps mindset heb ik ruime ervaring met het ontwerpen, bouwen en optimaliseren van complexe applicaties. Ik heb expertise in C#, Blazor, Angular, on-premise, Azure Cloud en processautomatisering met een focus op het leveren van betrouwbare en toekomstgerichte oplossingen.  In een agile/scrum omgeving neem ik verantwoordelijkheid voor end to end ontwikkeling, kennisdeling binnen teams en het continue verbeteren van processen om maximale waarde voor gebruikers te creeren.",
  },
  contact: {
    location: "Zoetermeer, Netherlands",
    phone: "+31 (0) 6 48 36 55 55",
    email: "carven.martis@hotmail.com",
  },
  degrees: [
    {
      title: "HBO Technische Informatica",
      school: "Avans Hogeschool",
      city: "Breda",
      startDate: "2010",
      endDate: "2015",
    },
  ],
  certifications: [
    {
      title: "AZ-400 Designing and Implementing Microsoft DevOps",
      company: "Microsoft",
      date: "2024",
    },
    {
      title: "AZ-204 Azure Developer Associate",
      company: "Microsoft",
      date: "2024",
    },
    {
      title: "AZ-104 Azure Administrator Associate",
      company: "Microsoft",
      date: "2024",
    },
    { title: "AZ-900 Azure Fundamentals", company: "Microsoft", date: "2021 " },
    { title: "Scrum Master (PSM 1)", company: "Scrum.org", date: "2021" },
    { title: "Embedded Linux", company: "Vijfhart", date: "2016" },
    { title: "Design Patterns", company: "CompuTrain", date: "2015" },
    { title: "Programeren in C++", company: "CompuTrain", date: "2015" },
  ],
  skills: {
    programming: [
      "C#",
      ".NET Core",
      "ASP.NET",
      "Blazor",
      "Angular",
      "RxJS",
      "NgRx",
      "Bootstrap",
      "Storybook",
      "Material Design",
      "NPM",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS",
      "SQL",
      "MySQL",
      "CosmosDB",
      "Table Storage",
      "Dapper",
      "EF",
      "Git",
      "Azure DevOps",
      "Jenkins",
      "Docker",
      "Kubernetes",
      "Bicep",
      "Terraform",
      "Swagger",
      "TDD",
      "SonarQube",
      "SpecFlow",
      "Playwright",
      "Jest",
      "xUnit",
      "MSTest",
      "OAuth2",
      "SOLID",
      "Kibana",
      "Insights",
      "ElasticSearch",
      "Monitor",
      "Redis Cache",
      "Service Bus",
      "YAML",
      "Functions",
      "Container Apps",
      "Virtual Machines",
      "Web Apps",
      "API Management",
      "Front Door",

      "Container Registry",
      "Container Apps",
    ],
    languages: [
      { title: "Dutch", level: 5 },
      { title: "English", level: 4 },
      { title: "Spanish", level: 3 },
    ],
  },
  experiences: [
    {
      position: ".NET Developer",
      company: "Rabobank",
      period: "2022 – 2024",
      description:
        "Bij Rabobank was ik verantwoordelijk voor het ontwerpen en implementeren van containerized .NET-applicaties en een Angular-dashboard dat inzicht biedt in de compliance van projecten en pipelines binnen Azure DevOps. Daarnaast ondersteunde ik andere teams bij de ontwikkeling en optimalisatie van hun Angular-applicaties. In samenwerking met Microsoft werkte ik aan een optimale integratie met de Azure DevOps API's, waarmee het complianceproces werd geautomatiseerd.",
      responsibilities: [
        "Ontwikkelen van containerized microservices met C# en .NET Core",
        "Ontwerpen en implementeren van een Angular-dashboard met TypeScript, RxJS en NgRx",
        "Toepassen van clean architecture en OWASP-beveiligingsrichtlijnen",
        "Inrichten en beheren van Azure DevOps-projecten met de juiste permissies",
        "Ontwikkelen van Azure DevOps-extensies en Infrastructure as Code met Bicep en Terraform",
        "Ondersteunen van teams bij het optimaliseren van YAML-pipelines",
        "Communiceren met stakeholders en samenwerken met Microsoft voor Azure API-integratie",
      ],
      technologies: [
        "C#",
        ".NET Core 6/8",
        "Angular",
        "TypeScript",
        "RxJS",
        "NgRx",
        "SOLID",
        "Docker",
        "Azure Container Registry",
        "Azure DevOps",
        "Bicep/Terraform",
        "Redis Cache",
        "Service Bus",
        "Functions",
        "Container Registry",
        "Container Apps",
        "Monitor & Insights",
        "OAuth2/JWT",
        "Moq/NSubstitute",
        "FluentValidations",
        "Jest",
        "xUnit",
        "FluentAssertions",
        "SonarQube",
        "TDD/DDD",
        "SpecFlow/Playwright",
        "Git",
      ],
    },
    {
      position: "Fullstack Developer",
      company: "DUO",
      period: "2022 – 2022",
      description:
        "Bij DUO was ik verantwoordelijk voor het ontwikkelen, uitbreiden en moderniseren van portalen met Blazor en Angular, daarnaast beheerde ik bestaande MVC en WCF applicatie. Deze applicaties stelden onderwijsinstellingen in staat om aanvragen in te dienen en het beheren van hun gegevens. Tot slot heb ik CI/CD pipelines ingericht in Jenkins en was verantwoordelijk voor het beheren van de OTAP omgevingen.",
      responsibilities: [
        "Developing and maintaining frontend applications using Angular",
        "Designing and building backend services and RESTful APIs in .NET Core",
        "Configuring and optimizing Azure DevOps pipelines for CI/CD",
        "Implementing Role-Based Access Control (RBAC) to ensure security",
        "Conducting code reviews and applying clean architecture and SOLID principles",
      ],
      technologies: [
        "C#",
        ".NET Core 3/4.5",
        "ASP.NET MVC",
        "WCF",
        "Angular",
        "Blazor",
        "SQL Server",
        "Oracle",
        "Entity Framework Core",
        "Azure DevOps (CI/CD)",
        "PowerShell",
        "SonarQube",
        "SpecFlow",
        "Kibana",
        "TDD/DDD",
        "NSubstitute",
        "FluentValidations",
        "SOLID",
        "OAuth",
        "Kibana",
        "xUnit",
        "MSTest",
        "FluentAssertions",
        "Scrum",
      ],
    },
    {
      position: "Senior Fullstack Developer",
      company: "AkzoNobel",
      period: "2021 – 2022",
      description:
        "Bij AkzoNobel ontwikkelde ik een Angular-applicatie voor het weergeven van verfproducten en bijbehorende informatie (PaintFinder). Daarnaast was ik verantwoordelijk voor het ontwikkelen van een WinForms-applicatie voor bouwmarkten, waarmee verfproducten gemengd kunnen worden om de juiste kleur te verkrijgen. Ook werkte ik aan een Proof of Concept (PoC) om het verfproces binnen de voertuigafdeling te vereenvoudigen en te automatiseren.",
      responsibilities: [
        "Ontwikkelen en beheren van Angular-applicaties",
        "Ontwerpen van een systeem voor het mengen van verf",
        "Ontwikkelen van RESTful APIs met .NET Core",
        "Implementeren van een proof of concept voor internationale vestigingen",
        "Verbeteren van gebruiksvriendelijkheid",
        "Samenwerken met UX/UI-designers",
        "Uitvoeren van code reviews",
      ],
      technologies: [
        "C#",
        ".NET Core 2.1/3",
        "MVC",
        "Angular",
        "RxJS",
        "NgRx",
        "Jest",
        "SQL Server",
        "CosmosDB",
        "Entity Framework Core",
        "Azure",
        "Azure DevOps CI/CD",
        "Swagger",
        "Bicep",
        "WPF/WinForms",
        "NSubstitute",
        "Git",
        "Nodejs",
        "SonarQube",
        "Selenium",
        "SpecFlow",
        "OAuth2/JWT",
      ],
    },
    {
      position: "Senior Fullstack Developer",
      company: "Medux",
      period: "2017 – 2021",
      description:
        "Bij Medux heb ik hun ERP-systeem (Alladin) doorontwikkeld en het optimaliseren van het WMO process. Daarnaast automatiseerde ik het orderprocess voor het bestllen van hulpmiddelen met containerized .NET applicaties. Ook beheerde ik bestaande ASP.NET MVC en AngularJS applicaties met nieuwe functionaliteiten. Het deployment process heb ik ook geoptimaliseerd door CI/CD pipelines in te richten via Azure DevOps (OnPremise).",
      responsibilities: [
        "Ontwikkelen en beheren van webapplicaties in AngularJS",
        "Beheren en uitbreiden van ASP.NET MVC-applicaties",
        "Bouwen van containerized backend-services in .NET",
        "Implementeren van Role-Based Access Control",
        "Integreren van zoekfunctionaliteiten met Kibana en Elasticsearch",
        "Inrichten van CI/CD-pipelines via Azure DevOps (OnPremise)",
        "Ontwikkelen en onderhouden van web-APIs voor automatisering",
        "Implementeren van responsive design",
      ],
      technologies: [
        "C#",
        ".NET Core 2.1/3",
        "Entity Framework Core",
        "WinForms",
        "DevExpress",
        "AngularJS",
        "Bootstrap",
        "SQL Server",
        "EF",
        "MySQL",
        "RabbitMQ",
        "Kibana",
        "Azure DevOps",
        "Docker",
        "Kubernetes",
        "Moq",
        "SOAP UI",
        "SpecFlow",
        "Swagger",
        "PowerShell",
        "GitLab",
        "OAuth2/JWT",
        "T-SQL",
        "Moq",
        "JSON",
        "Confluence",
        "Jira",
      ],
    },
    {
      position: "Fullstack Developer",
      company: "Aeromath",
      period: "2017 – 2018",
      description:
        "Ontwikkeling van een systeem voor het berekenen van veilige marges bij opstijg- en aanvliegroutes van helikopters in relatie tot varende schepen. Een wetenschappelijk onderbouwde en praktijkgevalideerde methodiek werd omgezet naar een gebruiksvriendelijke softwareoplossing met als doel de operationele inzet te vergroten, de veiligheid te verhogen en kosten te besparen door het aantal benodigde testvluchten te verminderen.",
      responsibilities: [
        "Ontwikkelen van WPF- en ASP.NET-applicaties",
        "Bouwen van RESTful APIs",
        "Implementeren van wiskundige algoritmes en visualiseren van resultaten",
        "Vertalen van wiskundige formules naar code",
        "Inrichten van CI/CD-pipelines in Jenkins",
        "Wekelijks communiceren met stakeholders",
      ],
      technologies: [
        "C#",
        "ASP.NET",
        ".NET Framework 4.5",
        "WPF",
        "MVC",
        "MVVM",
        "SOLID",
        "TDD/DDD",
        "SQL Server",
        "Entity Framework",
        "Syncfusion",
        "PowerShell",
        "Azure Virtual Machines",
        "JavaScript",
        "JQuery",
        "MSTest",
        "Moq",
        "HTML5",
        "CSS",
      ],
    },
    {
      position: "Fullstack Developer",
      company: "BE Aerospace",
      period: "2017",
      description:
        "Bij BE Aerospace was ik verantwoordelijk voor migratie van een bestaande legacy applicatie naar een nieuwe .NET oplossing met Winforms en ASP.NET. De applicatie was bedoeld voor interne administratieve medewerkers en faciliteerde het bestellen en beheren van vliegtuigonderdelen. Daarnaast integreeerde ik functionaliteiten voor Word, Excel en printers, waarmee rapportages kondern worden aangemaakt en geexporteerd.",
      responsibilities: [
        "Ontwikkelen van een ASP.NET applicatie",
        "Ontwikkelen van een WinForms applicatie",
        "Migreren en optimaliseren van data",
        "Genereren en printen van gegevensrapporten voor boekhouding",
        "Regelmatig communiceren met stakeholders",
        "Implementeren van Role-Based Access Control",
      ],
      technologies: [
        "C#",
        "ASP.NET",
        "WinForms",
        "NHibernate",
        "Ninject",
        "SOLID",
        ".NET Framework 4.5",
        "MSTest",
        "Moq",
        "Excel",
        "Word",
        "JSON",
        "JavaScript",
        "JQuery",
        "HTML5",
        "CSS",
        "MVC",
        "GitLab",
        "Telerik",
        "PowerShell",
        "SQL Server",
        "T-SQL",
      ],
    },
    {
      position: "Software Developer",
      company: "Altran",
      period: "2015 – 2016",
      description:
        "Bij Altran ontwikkelde ik een systeem dat realtime videobeelden van een AR Drone ophaalt en verwerkt voor image processing, waaronder object, obstakel en persoonsdetectie. Hierbij maakte ik gebruik van algortimes voor beeldanalyse om nauwkeurige detectie en classificatie mogelijk te maken. Daarnaast bouwde ik een cross platform mobiele applicatie in Xamarin waarmee de drone kon worden aangestuurd en autonoom kon navigeren naar opgegeven locaties. De applicatie communiceerde met de server via TCP protocollen, wat zorgde voor efficiente dataoverdracht en synchronisatie.",
      responsibilities: [
        "Ontwikkelen van een systeem voor AR-drone bewaking met realtime videobeelden",
        "Implementeren van image processing voor object-, obstakel- en persoonsdetectie",
        "Ontwikkelen van een cross-platform mobiele applicatie voor servercommunicatie",
        "Koppelen van de mobiele applicatie met de drone om navigatie-instructies door te geven",
      ],
      technologies: [
        "C#",
        "WPF",
        "ASP.NET",
        "SQL Server",
        "MVVM",
        "Design Patterns",
        "Entity Framework",
        "Visual Studio 2015",
        "Xamarin",
        "OpenCV",
        "MSTest",
        "DI",
        "UML",
        "GIT",
      ],
    },
    {
      position: "Embedded C++ Developer",
      company: "Quby",
      period: "2015 – 2016",
      description:
        "Bij Quby was ik verantwoordelijk voor het doorontwikkelen van het project voor de Toon van Eneco. Ik implementeerde verbeterde energie-inzichten door middel van widgets en werkte aan een Proof of Concept (PoC) om het systeem geschikt te maken voor buitenlandse klanten. Hiervoor ontwikkelde ik een gebruiksvriendelijke UI in Qt, een C++-driver op basis van een pub-sub architectuur en realiseerde koppelingen met andere Z-wave producten. Samen met een taalbureau zorgde ik voor meertalige ondersteuning.",
      responsibilities: [
        "Ontwikkelen van een nieuwe klantvriendelijke user-interface in QT",
        "Uitbreiden van het systeem met nieuwe drivers in C++",
        "Implementeren van pub-sub architectuur voor berichtcommunicatie",
        "Samenwerken met een taalbureau voor meertalige ondersteuning",
      ],
      technologies: [
        "C",
        "C++",
        "CTest",
        "Qt",
        "Qt Linguist",
        "CMake",
        "Virtual Machine",
        "Linux",
        "Bash scripts",
        "QML",
        "XML",
        "Pub-Sub",
        "Z-Wave",
        "SSH",
        "Jenkins",
        "GitLab",
        "Jira",
        "Confluence",
        "Bootloader",
        "Putty",
      ],
    },
    {
      position: "Mobile Developer",
      company: "Appedemic",
      period: "2014 – 2015",
      description:
        "Bij Appedemic ontwikkelde ik een systeem waarmee gebruikers zonder technische kennis eenvoudig apps konden bouwen voor Android en iOS. Hiervoor creëerde ik een gebruiksvriendelijk CMS waarmee componenten en inhoud eenvoudig konden worden beheerd. Daarnaast bouwde ik plugins voor beide besturingssystemen om specifieke functionaliteiten mogelijk te maken. Het CMS ondersteunde tevens real-time device-communicatie, waardoor directe interactie tussen de app en configuraties in het CMS werd gefaciliteerd, wat het configuratieproces intuïtiever en efficiënter maakte.",
      responsibilities: [
        "Ontwikkelen van een CMS voor app-ontwikkeling",
        "Implementeren van een command-line interface",
        "Bouwen van plugins voor Android en iOS",
        "Ontwikkelen van een REST API",
        "Beheren van PostgreSQL databases",
        "Hosten van applicaties op Digital Ocean",
        "Implementeren van real-time device communicatie",
      ],
      technologies: [
        "LiveScript",
        "Node.js",
        "PostgreSQL",
        "Apache Cordova",
        "Socket.io",
        "REST",
        "Digital Ocean",
        "Rest",
        "JSON",
        "Bower.js",
        "Webpack",
        "Grunt",
        "Socket.io",
        "CLI",
        "HTML5",
        "CSS/SASS",
        "GitLab",
        "Monorepo",
        "Java",
        "Objective-C",
      ],
    },
    {
      position: "Android Mobile Developer",
      company: "Label A",
      period: "2012 – 2013",
      description:
        "Bij Label A was ik verantwoordelijk voor het ontwikkelen van Android mobiele applicaties, waaronder een voor winkelcentrum Winkelhof, waarmee gebruikers eenvoudig folders en aanbiedingen konden bekijken. Ik vertaalde Adobe Photoshop designs om naar hoogwaardige, gebruiksvriendelijke applicaties en zorgde voor een succesvolle publicatie in de Google Play Store. Onder mijn verantwoordelijkheid zijn diverse applicaties ontwikkeld voor het Android-platform, waaronder Golfy, Subprise, en Winkelhof.",
      responsibilities: [
        "Ontwikkelen van een mobiele applicatie voor Android",
        "Implementeren van contracten voor REST APIs",
        "Samenwerken met UX/UI designers",
        "Integreren van de backend",
        "Omzetten van Photoshop designs naar functionele applicaties",
        "Publiceren van de app naar Google Play Store",
        "Verwerken van gebruikersfeedback voor verbeteringen",
      ],
      technologies: [
        "Java",
        "REST API",
        "JSON",
        "REST",
        "API",
        "Android",
        "SVN",
        "Adobe Photoshop",
        "Design Patterns",
        "Jira",
        "Confluence",
        "Gson",
        "Augmented Reality (Aurasma)",
        "SQLite",
        "SHA512",
      ],
    },
    {
      position: ".NET Developer",
      company: "Avans",
      period: "2011 – 2012",
      description:
        "Voor Avans heb ik een systeem ontwikkeld die alle gegevens van een kettler health trainer kon ophalen en deze weergeven in een user-interface. Alle gegevens werden opgehaald doormiddel van de COMpoort en verstuurd naar een server. De dataopslag werd door de server gedaan zowel op een externe harde schijf als in een SQL database. Het systeem toonde een overzicht met alle gegevens van  clients die verbonden zijn met de server. ",
      responsibilities: [
        "Ontwikkelen van een systeem voor het ophalen van gegevens via de COM-poort",
        "Weergeven van gegevens in een gebruiksvriendelijke user-interface",
        "Opslaan van data op een externe harde schijf en in een SQL-database",
        "Ontwerpen van een overzicht met clientgegevens die verbonden zijn met de server",
      ],
      technologies: [
        "C#",
        "WinForms",
        "Server/Client",
        "MVVM",
        "SVN",
        "SQL Server",
        "COM-poort",
        "Entity Framework",
        "File IO",
        "Design Patterns",
        "Moq",
        "MSTest",
        "Serialization",
        "XML",
      ],
    },
  ],
};
