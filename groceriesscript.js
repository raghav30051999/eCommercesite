function showDairy() {
    var dairyList = document.getElementById("dairyList");
    dairyList.style.display = "block";
    const lineHeight = 20; 
      const scrollAmount = 20 * lineHeight;
      window.scrollBy({
        top: scrollAmount,
        behavior: 'smooth' 
      });
    
    var breadsList = document.getElementById("breadsList");
    breadsList.style.display = "none";

    var beveragesList = document.getElementById("beveragesList");
    beveragesList.style.display = "none";
  }
  
  function showBreads() {
    var breadsList = document.getElementById("breadsList");
    breadsList.style.display = "block";
    const lineHeight = 20; 
      const scrollAmount = 20 * lineHeight;
      window.scrollBy({
        top: scrollAmount,
        behavior: 'smooth' 
      });
    
    var dairyList = document.getElementById("dairyList");
    dairyList.style.display = "none";

    var beveragesList = document.getElementById("beveragesList");
    beveragesList.style.display = "none";
  }
  
  function showBeverages() {
    var beveragesList = document.getElementById("beveragesList");
    beveragesList.style.display = "block";
    const lineHeight = 20; 
      const scrollAmount = 20 * lineHeight;
      window.scrollBy({
        top: scrollAmount,
        behavior: 'smooth' 
      });
    
    var dairyList = document.getElementById("dairyList");
    dairyList.style.display = "none";

    var breadsList = document.getElementById("breadsList");
    breadsList.style.display = "none";
  }
  