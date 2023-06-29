const Team = require('./team');
const ITSpecialist = require('./itspecialist');
const Manager = require('./manager');
const QA = require('./qa');
const Developer = require('./developer');
const Task = require('./task');

const team = new Team();
const itSpecialist = new ITSpecialist();
const manager = new Manager();
const qa = new QA();
const developer = new Developer();
const task = new Task();

function generateTeamHTML(team) {
    const teamNameHTML = `<h2>Team Name: ${team.getName()}</h2>`;
  
    const sprintDurationHTML = `<p>Sprint Duration: ${team.getSprintDuration()} weeks</p>`;
  
    const releaseDateHTML = `<p>Planned Release Date: ${team.getPlannedReleaseDate()}</p>`;

    const standupTimeHTML = `<p>Daily Standup Time: ${team.getDailyStandupTime()}</p>`;
  
    const numOfTeammatesHTML = `<p>Number of Teammates: ${team.getNumberOfTeammates()}</p>`;
  
    const teammatesHTML = `<ul>${team.getTeammates().map(teammate => `<li>${teammate}</li>`).join('')}</ul>`;
  
    const tasksHTML = `<ul>${team.showAllTasks().map(task => `<li>${task}</li>`).join('')}</ul>`;
  
    const teamHTML = `${teamNameHTML}${sprintDurationHTML}${releaseDateHTML}${standupTimeHTML}${numOfTeammatesHTML}${teammatesHTML}${tasksHTML}`;
  
    return teamHTML;
  }
  

  function displayTeamInfo() {
    const teamHTML = generateTeamHTML(team);
    const teamInfoElement = document.getElementById("team-info");
    teamInfoElement.innerHTML = teamHTML;
  }
  
displayTeamInfo();

