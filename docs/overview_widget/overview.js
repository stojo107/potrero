document.addEventListener('DOMContentLoaded', function() {
    const slideData = [
        {
            heading: "Easy",
            paragraph: "The electrification transition has It has become too complex to make a smartAs you electrify, the problem of sizing and operating your home in Have a single electrification partner who can manage survey, design, installation, and ongoing operation of the system. Spare yourself the multi-month research project needed to make a smart decision. Spare yourself the continual distraction of staying on top of changing rates, incentives, programs, and new products and technologies.  Our goal is to do all of that for you and ensure you earn a strong return on your home energy investment without having . (show all the components of the system, or a graphic of an electrified home?",
        },
        {
            heading: "Straightforward",
            paragraph: "No long-term commitments, no predatory exit clauses, and no misleading financing options. Pay cash or use our simple, low-interest, mortgage-style loan. Each year there (show immediate appreciation data)",
        },
        {
            heading: "Profitable",
            paragraph: "The electricity rates in California are astronomically high, which is a major problem but also a huge economic opportunity. With our offerings, you can expect 15-20% annual return on investment over multiple decades. If you move soon, your home will have appreciated significantly more than you invested. (show image of utility rates climbing?)",
        },
        {
            heading: "High Impact",
            paragraph: "The combination of the large battery system and our software running in the background allows your home to provide 6x the grid-balancing benefit of a typical installation. (show self consumption export rate).",
        },
        {
            heading: "Reliable",
            paragraph: "We backup your whole home, not just critical appliances, and we provide multiple layers of backup so you don’t have to scramble during a grid outage, even if it lasts weeks. (show solar, wind, battery, generator, in desending order?)",
            link: { text: "View data on home price appreciation →", href: "#" }
        },
    ];

    const slider = document.getElementById('dynamicSlider');
    const dotsContainer = document.getElementById('sliderDots');
    const prevBtn = document.getElementById('prevSlide');
    const nextBtn = document.getElementById('nextSlide');
    const sliderContainer = document.querySelector('.slider-container');
    let currentSlide = 0;

    function createSlides() {
        slider.innerHTML = '';
        dotsContainer.innerHTML = '';

        slideData.forEach((data, index) => {
            const slideDiv = document.createElement('div');
            slideDiv.classList.add('slide');

            const contentDiv = document.createElement('div');
            contentDiv.classList.add('slide-content');

            const heading = document.createElement('h3');
            heading.textContent = data.heading;
            contentDiv.appendChild(heading);

            const paragraph = document.createElement('p');
            paragraph.textContent = data.paragraph;
            contentDiv.appendChild(paragraph);

            if (data.listItems && data.listItems.length > 0) {
                const ul = document.createElement('ul');
                data.listItems.forEach(item => {
                    const li = document.createElement('li');
                    if (item.highlight) {
                        const span = document.createElement('span');
                        span.classList.add('highlight');
                        span.textContent = item.text;
                        li.appendChild(span);
                    } else {
                        li.textContent = item.text;
                    }
                    ul.appendChild(li);
                });
                contentDiv.appendChild(ul);
            }

            if (data.link) {
                const link = document.createElement('a');
                link.classList.add('data-link');
                link.href = data.link.href;
                link.textContent = data.link.text;
                contentDiv.appendChild(link);
            }

            slideDiv.appendChild(contentDiv);
            slider.appendChild(slideDiv);

            const dot = document.createElement('div');
            dot.classList.add('slider-dot');
            dot.setAttribute('data-slide', index);
            dotsContainer.appendChild(dot);
        });
    }

    function adjustHeight() {
        const slides = document.querySelectorAll('.slide');
        if (slides.length > 0 && slides[currentSlide]) {
            const activeSlide = slides[currentSlide];
            const activeSlideHeight = activeSlide.offsetHeight;
            sliderContainer.style.height = activeSlideHeight + 'px';
        }
    }

    function updateSlider() {
        const slides = document.querySelectorAll('.slide');
        const dots = document.querySelectorAll('.slider-dot');
        slider.style.transform = `translateX(-${currentSlide * 100}%)`;
        setTimeout(adjustHeight, 50);
        dots.forEach((dot, index) => {
            if (index === currentSlide) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    dotsContainer.addEventListener('click', function(event) {
        if (event.target.classList.contains('slider-dot')) {
            currentSlide = parseInt(event.target.getAttribute('data-slide'));
            updateSlider();
        }
    });

    prevBtn.addEventListener('click', function() {
        currentSlide = (currentSlide === 0) ? slideData.length - 1 : currentSlide - 1;
        updateSlider();
    });

    nextBtn.addEventListener('click', function() {
        currentSlide = (currentSlide === slideData.length - 1) ? 0 : currentSlide + 1;
        updateSlider();
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            prevBtn.click();
        } else if (e.key === 'ArrowRight') {
            nextBtn.click();
        }
    });

    // Squarespace dynamic content placeholders (optional)
    const emailElements = document.querySelectorAll('.email-dynamic');
    const phoneElements = document.querySelectorAll('.phone-dynamic');
    const nameElements = document.querySelectorAll('.name-dynamic');
    emailElements.forEach(el => { el.textContent = '{{location.email}}'; });
    phoneElements.forEach(el => { el.textContent = '{{location.phone}}'; });
    nameElements.forEach(el => { el.textContent = '{{location.name}}'; });

    createSlides();
    window.addEventListener('resize', adjustHeight);
    window.addEventListener('load', function() {
        updateSlider();
        adjustHeight();
    });
    setTimeout(adjustHeight, 100);
});