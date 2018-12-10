import codingWithCat from "./images/coding-with-cat.svg";
import realprojects from "./images/real-projects.svg";
import runners from "./images/runners.svg";
import jobs from "./images/jobs.svg";
import scrum from "./images/scrum.svg";

const modals = [
  {
    buttonText: "You are here!",
    xsOffset: 1,
    height: "150px",
    reactId: "here",
    image: codingWithCat,
    imageAltText: "working on a computer at home with cat",
    imageWidth: "250px",
    modalText: "Tired of toy projects, tutorials and online courses?"
  },
  {
    buttonText: "Scrums",
    xsOffset: 10,
    height: "250px",
    reactId: "scrums",
    image: scrum,
    imageAltText:
    "team sitting round a table with kanban board in background",
    imageWidth: "350px",
    modalText: "Meet others and plan your work in online hangouts."
  },
  {
    buttonText: "Real Projects",
    xsOffset: 4,
    height: "250px",
    reactId: "projects",
    image: realprojects,
    imageAltText: "shaking hands with business client across desk",
    imageWidth: "320px",
    modalText: "Satisfy real charity clients around the world."
  },
  {
    buttonText: "Sprints",
    xsOffset: 6,
    height: "600px",
    reactId: "sprints",
    image: runners,
    imageAltText: "two people running",
    imageWidth: "320px",
    modalText: "Commit to a week long sprint to accelerate your learning."
  },
  {
    buttonText: "Jobs",
    xsOffset: 8,
    height: "920px",
    reactId: "jobs",
    image: jobs,
    imageAltText: "person holding briefcase looking towards city",
    imageWidth: "300px",
    modalText:
    "Get paid for in-house projects or go on to great things in the wider world."
  }
];
export default modals;
