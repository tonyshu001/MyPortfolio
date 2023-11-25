const projects = [
    {
        id: "fact-checking-system",
        title: "Fact-checking system",
        description:
            "This project developed an innovative automated system for fact-checking claims related to climate change."
            + "Utilizing a blend of advanced NLP techniques, the system efficiently processes vast amount of data"
            + " to verify the truthfulness of various statements.",
        getImageSrc: () => require("../data/images/fact_checking.png"),
        linkTo: "/projects/fact-checking-system",
      
    },
    {
        id:"e-ticket",
        title: "E-ticket",
        description:
            "This ASP.NET based web application revolutionizes the movie ticket purchasing experience by offering a user-friendly online platform.",
        getImageSrc: () => require("../data/images/e_ticket.png"),
        linkTo: "/projects/e-ticket",
    },
    {
        id:"password-manager",
        title: "Password manager with security and usability",
        description:
            "A password manager meticulously designed to balance stringent security with intuitive usability, ensuring safe and effortless password management.",
        getImageSrc: () => require("../data/images/password_manager.png"),
        linkTo: "/projects/password-manager",
    },
    {
        id: "reversi",
        title: "AI agent for Reversi",
        description:
            "A Reversi AI agent project, ingeniously employing Monte Carlo Tree Search and Minimax.",
        getImageSrc: () => require("../data/images/reversi.png"),
        linkTo: "/projects/reversi",
    },
  ];

  export default projects;