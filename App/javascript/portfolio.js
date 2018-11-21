$(document).ready(() => {
    // Materialize Initializers
    $('.sidenav').sidenav();

    // Project data
    const projects = [
        {
            name: "Google Minus",
            // language: "javascript",
            githubLink: "https://github.com/DeclanMorrison/Band-Info-Aggregator",
            liveLink: "https://declanmorrison.github.io/Band-Info-Aggregator/",
            description: "This application was made to get information about a band (description, albums, songs, and lyrics) and compile them all in one place.",
            image: "../assets/images/googleMinus.png"
        },
        {
            name: "Boxer",
            // language: "javascript",
            githubLink: "https://github.com/crussell84/Boxer",
            liveLink: "https://boxerinventory.herokuapp.com/",
            description: "Boxer is a lightweight, responsive inventory management tool built using Materialize, running on a Node Express server, all backed by a MySQL database.",
            image: "../assets/images/boxer.png"
        }
    ]

    // Homework data
    const homeworks = [
        {
            name: "Portoflio Wireframe",
            gitHubLink: "https://github.com/MasonHester/hw-wireframe"
        }, {
            name: "Boostrap Portfolio",
            gitHubLink: "https://github.com/MasonHester/Bootstrap-Portfolio"
        }, {
            name: "Psychic Game",
            gitHubLink: "https://github.com/MasonHester/Psychic-Game"
        }, {
            name: "Crystal Collector",
            gitHubLink: "https://github.com/MasonHester/unit-4-game"
        }, {
            name: "Trivia Game",
            gitHubLink: "https://github.com/MasonHester/TriviaGame"
        }, {
            name: "Giftastic",
            gitHubLink: "https://github.com/MasonHester/API-homework"
        }, {
            name: "Train Scheduler",
            gitHubLink: "https://github.com/MasonHester/Train-Schedule"
        }, {
            name: "Liri Bot",
            gitHubLink: "https://github.com/MasonHester/liri-app"
        }, {
            name: "Bamazon",
            gitHubLink: "https://github.com/MasonHester/bamazon"
        }, {
            name: "Friend Finder",
            gitHubLink: "https://github.com/MasonHester/friend-finder"
        }, {
            name: "Burger",
            gitHubLink: "https://github.com/MasonHester/burger"
        }, {
            name: "Clicky Game",
            gitHubLink: "https://github.com/MasonHester/react-memory-game"
        }
    ]

    const displayProjects = (projects) => {
        projects.forEach((project) => {
            const $row = $("<div>").addClass("row");
            const $col = $("<div>").addClass("col s10 offset-s1");

            const $name = $("<h1>").text(project.name);
            const $image = $("<img>").addClass("portfolioImage responsive-img").attr("src", project.image);
            const $description = $("<p>").text(project.description);
            const $liveLinkDesc = $("<p>").text("Live");
            const $liveLink = $("<a>").attr("href", project.liveLink).append($liveLinkDesc);
            const $gitHubLinkDesc = $("<p>").text("GitHub");
            const $gitHubLink = $("<a>").attr("href", project.githubLink).append($gitHubLinkDesc);
            // const $language = $("<p>").text(project.language);
            
            $col.append($name, $image, $description, $liveLink, $gitHubLink, /* $language */);
            $row.append($col)
            $("div.projectDisplay").append($row);
        });
    };

    displayHomeworks = (homeworks) => {
        const $row = $("<div>").addClass("row");
        const $col = $("<div>").addClass("col s10 offset-s1");
        const $table = $("<table>");
        const $thead = $("<thead>");
        const $tbody = $("<tbody>");
        const $trHead = $("<tr>");
        const $thName = $("<th>").append($("<p>").text("Name"));
        const $thLink = $("<th>").append($("<p>").text("Link"));

        $trHead.append($thName, $thLink);
        $thead.append($trHead);

        homeworks.map(homework => {
            const $tr = $("<tr>")
            const $tdName = $("<td>");
            const $tdLink = $("<td>");

            const $linkDesc = $("<p>").text("Github");

            $tdName.append($("<p>").text(homework.name));
            $tdLink.append($("<a>").attr("href", homework.gitHubLink).append($linkDesc));

            $tr.append($tdName, $tdLink);
            $tbody.append($tr)
        });

        $table.append($thead, $tbody);
        $col.append($table);
        $row.append($col);
        $("div.homeworkDisplay").append($row);
    }

    displayProjects(projects);
    displayHomeworks(homeworks);
});
