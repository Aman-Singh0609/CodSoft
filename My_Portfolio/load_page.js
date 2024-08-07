document.addEventListener('DOMContentLoaded', function() {
    
    let percentage = 0;
    const loadingPercentage = document.getElementById('loading-percentage');
    const content = document.getElementById('content');
    const loadingScreen = document.getElementById('loading-screen');

    const interval = setInterval(() => {
        if (percentage < 100) {
            percentage++;
            loadingPercentage.textContent = percentage + '%';
        } else {
            clearInterval(interval);
            loadingScreen.style.display = 'none';
            content.style.display = 'block';
        }
    }, 20);

    
    let slideIndex = 0;
    showSlides();

   
    function showSlides() {
        let slides = document.getElementsByClassName("mySlides");
        let descriptions = document.getElementsByClassName("description-cloud");

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
            descriptions[i].style.display = "none"; 
        }

        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        if (slideIndex < 1) {
            slideIndex = slides.length;
        }

        slides[slideIndex - 1].style.display = "block";
        descriptions[slideIndex - 1].style.display = "block"; 

        setTimeout(showSlides, 4000); 
    }

    
    function plusSlides(n) {
        slideIndex += n;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        } else if (slideIndex < 1) {
            slideIndex = slides.length;
        }
        showSlides();
    }

    
    document.querySelector('.prev').addEventListener('click', function() {
        plusSlides(-1);
    });

    document.querySelector('.next').addEventListener('click', function() {
        plusSlides(1);
    });

   
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    
    this.reset();

    alert('Thank you for your message! I will get back to you soon.');
});