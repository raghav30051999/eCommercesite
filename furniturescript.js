function showSofas() {
    var sofasList = document.getElementById("sofasList");
    sofasList.style.display = "block";
    const lineHeight = 20; 
      const scrollAmount = 20 * lineHeight;
      window.scrollBy({
        top: scrollAmount,
        behavior: 'smooth' 
      });
    
    var diningtablesList = document.getElementById("diningtablesList");
    diningtablesList.style.display = "none";

    var wardrobesList = document.getElementById("wardrobesList");
    wardrobesList.style.display = "none";
  }
  
  function showDiningtables() {
    var diningtablesList = document.getElementById("diningtablesList");
    diningtablesList.style.display = "block";
    const lineHeight = 20; 
      const scrollAmount = 20 * lineHeight;
      window.scrollBy({
        top: scrollAmount,
        behavior: 'smooth' 
      });
    
    var sofasList = document.getElementById("sofasList");
    sofasList.style.display = "none";

    var wardrobesList = document.getElementById("wardrobesList");
    wardrobesList.style.display = "none";
  }
  
  function showWardrobes() {
    var wardrobesList = document.getElementById("wardrobesList");
    wardrobesList.style.display = "block";
    const lineHeight = 20; 
      const scrollAmount = 20 * lineHeight;
      window.scrollBy({
        top: scrollAmount,
        behavior: 'smooth' 
      });
    
    var sofasList = document.getElementById("sofasList");
    sofasList.style.display = "none";

    var diningtablesList = document.getElementById("diningtablesList");
    diningtablesList.style.display = "none";
  }
  