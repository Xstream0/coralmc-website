document.addEventListener('DOMContentLoaded', function() {
const navbarToggler = document.querySelector('.navbar-toggler');
const navContainer = document.querySelector('.nav-container');

if (navbarToggler && navContainer) {
    navbarToggler.addEventListener('click', function() {
        navContainer.classList.toggle('active');
    });
}

function updateCounters() {
    fetch("https://api.mcsrvstat.us/2/play.coralmc.it")
        .then(res => res.json())
        .then(data => {
            if (data.online) {
                document.getElementById('minecraft-users').textContent =
                    data.players.online + ' Giocatori Online';
            } else {
                document.getElementById('minecraft-users').textContent =
                    'Server Offline';
            }
        })
        .catch(() => {
            document.getElementById('minecraft-users').textContent =
                'Errore';
        });

        fetch('https://discord.com/api/guilds/705161910370173033/widget.json')
            .then(response => response.json())
            .then(data => {
                const onlineCount = data.presence_count || 0;
                document.getElementById('discord-users').textContent = 
                    onlineCount + ' Utenti Online';
            })
            .catch(error => console.error('Errore nel recupero dei dati Discord:', error));
    }

    updateCounters();
    setInterval(updateCounters, 60000);

    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && href !== '#') {
                window.location.href = href;
            }
        });
    });

document.querySelectorAll('.copy-btn').forEach(button => {
    button.addEventListener('click', async function() {
        const textToCopy = this.getAttribute('data-copy');
        if (!textToCopy) return;

        try {
            await navigator.clipboard.writeText(textToCopy);
            this.textContent = 'Copiato!';
        } catch {
            const input = document.createElement('textarea');
            input.value = textToCopy;
            document.body.appendChild(input);
            input.select();
            document.execCommand('copy');
            document.body.removeChild(input);
            this.textContent = 'Copiato!';
        }

        setTimeout(() => {
            this.textContent = 'Clicca per copiare';
        }, 1800);
    });
});
});

document.addEventListener('DOMContentLoaded', function () {
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptCookies = document.getElementById('accept-cookies');
    const rejectCookies = document.getElementById('reject-cookies');
    const moreInfo = document.getElementById('more-info');

    if (!localStorage.getItem('cookiesAccepted') && !localStorage.getItem('cookiesRejected')) {
        cookieBanner.style.display = 'flex';
    }

    acceptCookies.addEventListener('click', function () {
        cookieBanner.style.animation = 'slideOut 0.5s ease';
        cookieBanner.addEventListener('animationend', function () {
            localStorage.setItem('cookiesAccepted', 'true');
            cookieBanner.style.display = 'none';
        }, { once: true });
    });

    rejectCookies.addEventListener('click', function () {
        cookieBanner.style.animation = 'slideOut 0.5s ease';
        cookieBanner.addEventListener('animationend', function () {
            localStorage.setItem('cookiesRejected', 'true');
            cookieBanner.style.display = 'none';
        }, { once: true });
    });
});
