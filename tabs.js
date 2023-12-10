
const tabNames = ['Message', 'CV', 'Movies']; // Specify your tab names here

function renderTabs() { 


  const tabList = document.getElementById('tabList');
  tabList.innerHTML = '';

  tabNames.forEach((tabName, index) => {
    const li = document.createElement('li');
    li.classList.add('tab');
    li.textContent = tabName;
    li.onclick = () => openTab(tabName);
    tabList.appendChild(li);
  });
}

async function openTab(tabName) {
  try {
    // Construct the file name based on the tabName
    const fileName = `HTML/${tabName.toLowerCase()}.html`;

    // Load tab content dynamically
    const response = await fetch(fileName);

    if (!response.ok) {
      throw new Error(`Failed to load tab content for ${tabName}`);
    }

    const content = await response.text();
    console.log(`Loaded content for ${tabName}`);

    // Display the content after it's loaded
    const tabContentElement = document.getElementById('tabContent');
    tabContentElement.innerHTML = content;

    // Highlight the clicked tab
    const tabList = document.getElementById('tabList');
    const tabs = Array.from(tabList.children);
    tabs.forEach(tab => {
      if (tab.textContent.toLowerCase() === tabName.toLowerCase()) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });
  } catch (error) {
    console.error(error);
  }
}


// Initial rendering
renderTabs();
