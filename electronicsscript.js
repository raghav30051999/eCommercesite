function showMobiles() {
    var mobilesList = document.getElementById("mobilesList");
    mobilesList.style.display = "block";
      const lineHeight = 20; 
      const scrollAmount = 20 * lineHeight;
      window.scrollBy({
        top: scrollAmount,
        behavior: 'smooth' 
      });
    
    var computersList = document.getElementById("computersList");
    computersList.style.display = "none";

    var televisionsList = document.getElementById("televisionsList");
    televisionsList.style.display = "none";
  }
  
  function showComputers() {
    var computersList = document.getElementById("computersList");
    computersList.style.display = "block";
    const lineHeight = 20; 
      const scrollAmount = 20 * lineHeight;
      window.scrollBy({
        top: scrollAmount,
        behavior: 'smooth' 
      });
    
    var mobilesList = document.getElementById("mobilesList");
    mobilesList.style.display = "none";

    var televisionsList = document.getElementById("televisionsList");
    televisionsList.style.display = "none";
  }
  
  function showTelevisions() {
    var televisionsList = document.getElementById("televisionsList");
    televisionsList.style.display = "block";
    const lineHeight = 20; 
      const scrollAmount = 20 * lineHeight;
      window.scrollBy({
        top: scrollAmount,
        behavior: 'smooth' 
      });
    
    var mobilesList = document.getElementById("mobilesList");
    mobilesList.style.display = "none";

    var computersList = document.getElementById("computersList");
    computersList.style.display = "none";
  }
  