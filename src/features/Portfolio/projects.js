import React from "react";

export const projects = [
  {
    id: "1",
    name: "HackTurabo",
    description: (
      <div>
        <p>
          A non profit student organization which is run by students. It began
          with isolated hackathons that have now evolved into a more structured
          organization, with the purpose of expanding the hacker community in
          Puerto Rico.
        </p>
        <br />
        <p>
          I contributed to building their website with the help of{" "}
          <a
            href="https://www.linkedin.com/in/pjgs-profile/?originalSubdomain=pr"
            target="_blank"
          >
            Pedro Giusti
          </a>{" "}
          and Gabriela Rivera Mejías.
        </p>
      </div>
    ),
    // image_name: "hackturabo.png",
    image_name: "imagesForKYoungPage_HackTurabo.png",
    link: "https://codigo-ec.firebaseapp.com/",
    stack: ["nodejs", "express", "mongodb"]
  },
  {
    id: "2",
    name: "countries cli",
    description:
      "A CLI of countries based on the REST Countries API. It allows you to look for information on countries based on population, region, currency, subregion, name, capital, and language.",
    // image_name: "countries-cli-image.png",
    image_name: "imagesForKYoungPage_Countries_CLI.png",
    github_link: "https://github.com/kyoung90/country",
    link: "https://countries-cli.kennethyoung.repl.run/",
    stack: ["ruby"]
  },
  {
    id: "3",
    name: "iDid Portfolio",
    description:
      "A site where you can have your own portfolio or look at other people's portfolio for a list of their projects.",
    // image_name: "IdidPortfolio.png",
    image_name: "imagesForKYoungPage_IDID Portfolio.png",
    github_link: "https://github.com/kyoung90/iDidPortfolio",
    link: "https://ididportfolio.herokuapp.com/projects",
    stack: ["ruby", "sinatra", "postgresql"]
  },
  {
    id: "4",
    name: "Love Every Pound",
    description:
      "A site where you can keep track of your weight, get random quotes based on your preference, add/update/delete weights and see them visually on a calendar and a chart!",
    // image_name: "LoveEveryPound.png",
    image_name: "imagesForKYoungPage_LoveEveryPound.png",
    github_link: "https://github.com/kyoung90/love_every_pound_front_end",
    link: "https://love-every-pound.netlify.com/",
    stack: ["ruby", "rails", "react", "redux", "postgresql"]
  },
  {
    id: "5",
    name: "Código Ecuador",
    description: (
      <div>
        <p>
          A non profit organization dedicated to creating a more equal world
          between countries and across genders. They want to train young women
          to take on technology careers in Ecuador.
        </p>
        <br />
        <p>
          I contributed to building their website with the help of my Flatiron
          School cohort friends. Visit the{" "}
          <a
            href="https://github.com/joanrig/codigo-ecuador-web"
            target="_blank"
          >
            github link
          </a>{" "}
          for more details.
        </p>
      </div>
    ),
    // image_name: "codigoEcuador.png",
    image_name: "imagesForKYoungPage_Codigo Ecuador.png",
    github_link: "https://github.com/joanrig/codigo-ecuador-web",
    link: "https://codigo-ecuador.firebaseapp.com/",
    stack: ["react", "redux"]
  }
];
