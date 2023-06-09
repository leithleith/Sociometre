if('serviceWorker' in navigator)
{
    navigator.serviceWorker.register('sw.js');
};
function melanger()
{
  var tableau = ['<input type="checkbox" id="1" name="A1" value="1">Adéquation entre moyens et objectifs du service<br/>', '<input type="checkbox" id="2" name="A2" value="1">Respect du rôle contributif en comité de direction<br/>', '<input type="checkbox" id="3" name="A3" value="1">Reconnaissance du rôle d\'encadrant<br/>', '<input type="checkbox" id="4" name="A4" value="1">Collectif de travail participatif<br/>', '<input type="checkbox" id="5" name="A5" value="1">Autonomie et confiance pour la gestion quotidienne de l\'équipe<br/>', '<input type="checkbox" id="6" name="A6" value="1">Echanges et communications hiérarchiques respectueux<br/>', '<input type="checkbox" id="7" name="A7" value="1">Respect du temps de travail<br/>', '<input type="checkbox" id="8" name="A8" value="1">Déconnexion réelle<br/>',   '<input type="checkbox" id="9" name="B1" value="1">Remise en cause culpabilisante du fonctionnement du service<br/>', '<input type="checkbox" id="10" name="B2" value="1">Pas d\'écoute et isolmement en comité de direction<br/>', '<input type="checkbox" id="11" name="B3" value="1">Personnalisation des difficultés rencontrées<br/>', '<input type="checkbox" id="12" name="B4" value="1">Défiance des supérieurs, déni des difficultés exprimées<br/>', '<input type="checkbox" id="13" name="B5" value="1">Consignes paradoxales et contrôle<br/>', '<input type="checkbox" id="14" name="B6" value="1">Echanges conflictuels avec la hiérarchie<br/>', '<input type="checkbox" id="15" name="B7" value="1">Travail supplémentaire non pris en compte<br/>', '<input type="checkbox" id="16" name="B8" value="1">Difficulté de déconnexion<br/>',   '<input type="checkbox" id="17" name="C1" value="1">Inadéquation des moyens face aux objectifs du service<br/>', '<input type="checkbox" id="18" name="C2" value="1">Dénigrement et diffamation<br/>', '<input type="checkbox" id="19" name="C3" value="1">Mise sous tutelle et retrait des missions d\'encadrement<br/>', '<input type="checkbox" id="20" name="C4" value="1">Mise à l\'écart des circuits d\'information<br/>', '<input type="checkbox" id="21" name="C5" value="1">Extrême surveillance et déstabilisation<br/>', '<input type="checkbox" id="22" name="C6" value="1">Convocations récurrentes par la hiérarchie, sanctions<br/>', '<input type="checkbox" id="23" name="C7" value="1">Injonction à la mobilité, déroulement de carrière bloqué<br/>', '<input type="checkbox" id="24" name="C8" value="1">Exclusion, mise au placard<br/>'];
  for (i = tableau.length - 1; i > 0; i--)
  {
    var j = Math.floor(Math.random() * (i + 1));
    [tableau[i], tableau[j]] = [tableau[j], tableau[i]];
  }
  for (n=0;n<tableau.length;n++)
  {
    document.getElementById("formulaire").innerHTML += tableau[n];
  }
  document.getElementById("formulaire").innerHTML += '<hr/><button onclick="calcul()">Calculer</button>';
}
function calcul()
{
  var A = 0;
  var B = 0;
  var C = 0;
  for (i=1;i<25;i++)
  {
    if (document.getElementById("" + i).checked)
    {
      switch (document.getElementById("" + i).name.charAt(0))
      {
        case "A":
          A += 1;
          break;
        case "B":
          B += 1;
          break;
        case "C":
          C += 1;
          break;
        default:
          break;
      }
    }
  }
  var vtheta = ["Environnement de Qualité", "Environnement Dégradé", "Environnement de Rupture"];
  var data = [{
    r: [A, 0, 0],
    theta: vtheta,
    name: "Qualité",
    marker: {color: "rgb(36, 140, 70)"},
    type: "barpolar",
    hoverinfo: "name"
  },
  {
    r: [0, B, 0],
    theta: vtheta,
    name: "Dégradé",
    marker: {color: "rgb(255, 147, 51)"},
    type: "barpolar",
    hoverinfo: "name"
  },
           {
    r: [0, 0, C, 0, 0],
    theta: vtheta,
    name: "Rupture",
    marker: {color: "rgb(255, 0, 36)"},
    type: "barpolar",
    hoverinfo: "name"
  }]
var layout = {
    paper_bgcolor: '#1e1e1e',
    font: {size: 12, color: '#cdcccc'},
    margin: {
      b: 10,
      l: 10,
      r: 10,
      t: 50
    },
    legend: {
      x: 0.2,
      y: -0.5
    },
    showlegend: true,
    polar: {
      bgcolor: "#d7d9dc",
      barmode: "overlay",
      bargap: 0,
      radialaxis: {ticks: "", showline: false, showticklabels: false, range: [0,8]},
      angularaxis: {direction: "clockwise"}
    },
    autosize: true
  }
var config = {
    staticPlot: true,
    responsive: true
}
Plotly.newPlot("rose", data, layout, config)
}
function opentab(evt, tabname)
{
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
	  tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
	  tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(tabname).style.display = "block";
	evt.currentTarget.className += " active";
}