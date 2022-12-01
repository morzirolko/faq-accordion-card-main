const faq = document.querySelectorAll(".card__li");

faq.forEach((question) => {
    const button = question.querySelector(".card__li__name");
    const text = question.querySelector(".card__li__text");
    button.addEventListener("click", () =>{
        faq.forEach((item) => {
            if(item !== question) {
                item.classList.remove("card__li__text--visible");
            }
        });
        question.classList.toggle("card__li__text--visible");
    });

    text.addEventListener("click", () => {
        faq.forEach((item) => {
            if(item !== question) {
                item.classList.remove("card__li__text--visible");
            }
        });
        question.classList.toggle("card__li__text--visible");
    })
})