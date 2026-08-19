document.addEventListener("DOMContentLoaded", () => {
    // 1. Smart Sticky Header & Trigger
    const header = document.getElementById("navbar");
    const navTrigger = document.getElementById("nav-trigger");
    let isHeaderForcedOpen = false;
    let lastScrollY = window.scrollY;

    window.addEventListener("scroll", () => {
        // Close forced header if user scrolls more than 10px
        if (isHeaderForcedOpen && Math.abs(window.scrollY - lastScrollY) > 10) {
            isHeaderForcedOpen = false;
        }
        lastScrollY = window.scrollY;

        if (window.scrollY <= 80) {
            header.classList.remove("hidden", "scrolled");
            if(navTrigger) navTrigger.classList.remove("visible");
            isHeaderForcedOpen = false;
        } else {
            if (!isHeaderForcedOpen) {
                header.classList.add("hidden");
                header.classList.remove("scrolled");
                if(navTrigger) navTrigger.classList.add("visible");
            }
        }
    });

    if(navTrigger) {
        const openHeader = () => {
            if (window.scrollY > 80) {
                isHeaderForcedOpen = true;
                header.classList.remove("hidden");
                header.classList.add("scrolled");
                navTrigger.classList.remove("visible");
            }
        };
        navTrigger.addEventListener("mouseenter", openHeader);
        navTrigger.addEventListener("click", openHeader);
    }

    if(header) {
        header.addEventListener("mouseleave", () => {
            if (window.scrollY > 80 && isHeaderForcedOpen) {
                isHeaderForcedOpen = false;
                header.classList.add("hidden");
                header.classList.remove("scrolled");
                if(navTrigger) navTrigger.classList.add("visible");
            }
        });
    }

    // 2. Mobile Menu Toggle
    const hamburger = document.querySelector(".hamburger");
    const mobileNav = document.querySelector(".mobile-nav");
    
    hamburger.addEventListener("click", () => {
        mobileNav.classList.toggle("active");
        const icon = hamburger.querySelector("i");
        if(mobileNav.classList.contains("active")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-times");
        } else {
            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");
        }
    });

    document.querySelectorAll(".mobile-nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            mobileNav.classList.remove("active");
            const icon = hamburger.querySelector("i");
            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");
        });
    });

    // 3. Scroll Reveal Engine
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    function initReveal() {
        document.querySelectorAll('.reveal').forEach(el => {
            revealObserver.observe(el);
        });
    }

    // 4. Render Team Members
    const teamContainer = document.getElementById("team-container");
    if (teamContainer && typeof TEAM_MEMBERS !== 'undefined') {
        const membersToRender = TEAM_MEMBERS;

        membersToRender.forEach((member, index) => {
            const card = document.createElement("div");
            const delayClass = `delay-${(index % 3) + 1}`;
            card.className = `team-card glass-panel reveal ${delayClass}`;
            
            card.innerHTML = `
                <div class="team-img-wrapper">
                    <img src="${member.image}" alt="${member.name}" class="team-img" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'130\\' height=\\'130\\'><rect width=\\'130\\' height=\\'130\\' fill=\\'%23000\\'/></svg>'">
                </div>
                <h3 class="team-name">${member.name}</h3>
                <p class="team-role">${member.role}</p>
            `;
            teamContainer.appendChild(card);
        });
    }

    // 5. Render Events
    const eventsContainer = document.getElementById("events-container");

    function renderEvents() {
        if (!eventsContainer || typeof EVENTS === 'undefined') return;
        
        eventsContainer.innerHTML = "";
        
        if (EVENTS.length === 0) {
            eventsContainer.innerHTML = `<p style="grid-column: 1 / -1; color: var(--text-secondary); text-align: center;">No events found.</p>`;
            return;
        }

        EVENTS.forEach((event, index) => {
            const card = document.createElement("div");
            const delayClass = `delay-${(index % 3) + 1}`;
            card.className = `event-card glass-panel reveal ${delayClass}`;
            
            card.innerHTML = `
                <div class="event-banner-wrapper">
                    <span class="event-badge">${event.category.charAt(0).toUpperCase() + event.category.slice(1)}</span>
                    <img src="${event.banner}" alt="${event.title}" class="event-banner" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'400\\' height=\\'200\\'><rect width=\\'400\\' height=\\'200\\' fill=\\'%23000\\'/></svg>'">
                </div>
                <div class="event-content">
                    <h3 class="event-title">${event.title}</h3>
                    <div class="event-date"><i class="far fa-calendar-alt"></i> ${event.date}</div>
                    <p class="event-desc">${event.description}</p>
                    <a href="event-details.html?id=${event.id}" class="event-link">
                        <span>View Details</span>
                        <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
            `;
            eventsContainer.appendChild(card);
        });
        
        initReveal();
    }

    renderEvents();

    // Initialize all reveal animations on page load
    initReveal();
});
