let stickyDiv=document.querySelector(".stickyDiv")
let add=document.getElementById("add")
let textAdd=document.getElementById("textadd")

add.addEventListener("click",()=>{
    textAdd.style.padding="10px"
    textAdd.style.width="100%"
})
textAdd.addEventListener("change",()=>{  
     // Création d'un div pour la tâche
     const divTask = document.createElement("div");
     divTask.classList.add("add");
     divTask.innerText = textAdd.value;
 
     // Génération d'une couleur aléatoire
     const r = Math.floor(Math.random() * 256);
     const g = Math.floor(Math.random() * 256);
     const b = Math.floor(Math.random() * 256);
     divTask.style.background = `rgb(${r},${g},${b})`;
    //rotation et deplacement 
      const rotate=Math.floor(Math.random()*10)
      const trans=Math.floor(Math.random()*50)
      divTask.style.transform = `translate(${trans}px) rotate(${rotate}deg)`; 
      

      // Ajout d'un paragraphe d'indice
     const p = document.createElement("p");
     p.innerText = "Double click to delete the task";
     p.classList.add("hint");
     divTask.append(p);
 
     // Ajout de la tâche à stickyDiv
     stickyDiv.append(divTask);
 
     // Réinitialisation du champ de texte
     textAdd.style.width = "0%";
     textAdd.value = "";
 
     // Suppression de la tâche lors d'un double-clic
     divTask.addEventListener("dblclick", function() {
         divTask.remove();
     });
 
     // Affichage de l'indice lors du survol
     divTask.addEventListener("mouseover", function() {
         p.style.display = "block";
     });
 
     // Masquage de l'indice lorsque le curseur quitte
     divTask.addEventListener("mouseout", function() {
         p.style.display = "none";
     });
 
     // Définir le curseur de style sur pointer (main pointant)
     divTask.style.cursor = "pointer";
 
     // Réinitialisation des styles du champ de texte
     textAdd.style.padding = "0";
})

