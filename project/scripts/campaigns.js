document.addEventListener("DOMContentLoaded", () => {
  const campaigns = [
      {
          name: "Anti-Privatization",
          description: "Fighting against corporate control of water services to ensure affordability and accessibility."
      },
      {
          name: "People Over Profit",
          description: "Advocating policies that prioritize public welfare over corporate interests in water management."
      },
      {
          name: "Water Workers' Rights",
          description: "Ensuring fair wages, safe working conditions, and benefits for water sector employees."
      },
      {
          name: "Environmental Protection",
          description: "Promoting sustainable water management to safeguard ecosystems and future generations."
      },
      {
          name: "Quality Public Services",
          description: "Defending public ownership and accountability in providing clean and reliable water services."
      }
  ];

  const tableBody = document.querySelector("#campaigns-table tbody");

  // Populate table using forEach()
  campaigns.forEach(campaign => {
      const row = document.createElement("tr");
      row.innerHTML = `
          <td>${campaign.name}</td>
          <td>${campaign.description}</td>
      `;
      tableBody.appendChild(row);
  });
});