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
  degree: string;
  school: string;
  city: string;
  startDate: string;
  endDate: string;
}

export interface CertificationProps {
  name: string;
  date: string;
}

export interface SkillsProps {
  programming: string[];
  languages: string[];
}

export interface ResponsibilityProps {
  description: string;
}

export interface ExperienceProps {
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
  experiences: ExperienceProps[];
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
      degree: "HBO Technische Informatica",
      school: "Avans Hogeschool",
      city: "Breda",
      startDate: "2010",
      endDate: "2015",
    },
  ],
  certifications: [
    { name: "Microsoft Certified: Azure Developer Associate", date: "2021" },
    {
      name: "Microsoft Certified: Azure Administrator Associate",
      date: "2021",
    },
    {
      name: "Microsoft Certified: Azure Solutions Architect Expert",
      date: "2021",
    },
  ],
  skills: {
    programming: [
      "C#",
      ".NET Core",
      "ASP.NET",
      "Blazor",
      "Angular",
      "TypeScript",
    ],
    languages: ["Dutch", "English", "Spanish"],
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
  ],
};
