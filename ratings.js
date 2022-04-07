const ratings = Array.from(document.getElementsByClassName("rating-list"))
const content = document.querySelector('.container')
const selectRate = document.querySelector('.choose-one')
const userRating1 = document.querySelector(".num1")
const userRating2 = document.querySelector(".num2")
const userRating3 = document.querySelector(".num3")
const userRating4 = document.querySelector(".num4")
const userRating5 = document.querySelector(".num5")
const handleSubmit = document.querySelector(".submit")
const showModal = document.querySelector('.thanks-modal')

let showRating = document.querySelector('.submit')

let userOption;



ratings.map(rating => {
    rating.addEventListener('click', (e) => {
        console.log(e.target.textContent);
        userOption = e.target.textContent;
        switch(e.target.innerText) {
            case "1": 
            userRating1.classList.add("selected");
            break;            
            case "2": 
            userRating2.classList.add("selected");
            break;            
            case "3": 
            userRating3.classList.add("selected");
            break;            
            case "4": 
            userRating4.classList.add("selected");
            break;            
            case "5": 
            userRating5.classList.add("selected");
            break;
            default: 

        }
        handleSubmit.addEventListener('click', (e) => {
            if (rating = e.target.textContent && e) {
                console.log("submit");
                showModal.classList.remove("hidden")
                content.classList.add("hidden")
                document.querySelector(".user-rating-value").innerText = `You Selected ${userOption} out of 5`
            }else {
                             
            }
        })
        
    })
})



