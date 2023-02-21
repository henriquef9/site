

    const controls = document.querySelectorAll(".arrow");
    let currentItem = 0;
    const items = document.querySelectorAll(".card");
    const maxItems = items.length;

  

    controls.forEach((control) => {
        control.addEventListener("click", (e) => {
        
        isLeft = e.target.classList.contains("fa-arrow-left");

        //console.log(e)


        if (isLeft && currentItem >0) {
            currentItem -= 1;
            } else if(!isLeft && currentItem < maxItems -1) {
            currentItem += 1;
            }
        
        console.log(currentItem)
       

        items[currentItem].scrollIntoView({
        behavior: "smooth",
        block: 'nearest',
        inline: "center"
        });

       
    });
    });
