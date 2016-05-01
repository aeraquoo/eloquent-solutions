function asTabs(node) {
  var active;
  // Create the div to hold the tab-bar
  var tabs = document.createElement('div');
  tabs.id = 'tabs';
  node.insertBefore(tabs, node.firstChild);

  // we will map tab names to tab-headers and tab-content sections
  var tabMap = Object.create(null);

  Array.prototype.forEach.call(node.children, function(child) {
    // This is not meant to be a tab, return early
    if (!child.getAttribute('data-tabname')) return;
    // hide the element by default, since most tabs are not focused
    child.style.display = 'none';

    var tabName = child.getAttribute('data-tabname');

    // create the tab-header
    var tabHeader = document.createElement('div');
    tabHeader.className = 'tabHeader';
    tabHeader.setAttribute('data-tabname', tabName);

    // set the content
    tabHeader.textContent = tabName;

    // add it to the document
    tabs.appendChild(tabHeader);

    if (active === undefined) {
      // this is the first, which should be active by default
      active = tabName;
      tabHeader.classList.add('active');
      child.style.display = 'block';
    }

    // add it to the mapping
    tabMap[tabName] = {
      header: tabHeader,
      content: child
    };
  });

  tabs.addEventListener("click", function (event) {
    // get which tab was clicked
    var element = event.srcElement;
    // get the name
    var name = element.getAttribute('data-tabname');

    // switch which tab is active
    tabMap[active].content.style.display = 'none';
    tabMap[active].header.classList.remove('active');
    tabMap[name].content.style.display = 'block';
    tabMap[name].header.classList.add('active');

    // remember which is active
    active = name;
  });

}

asTabs(document.querySelector('#wrapper'));
