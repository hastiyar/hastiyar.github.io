function openBaleLink(link) {
            if (window.Bale && window.Bale.WebApp) {
                window.Bale.WebApp.openLink(`https://ble.ir/${link}`, { try_instant_view: true });

                setTimeout(function() {
                    window.Bale.WebApp.close();
                }, 1000);
            }
        }
function openLink(link) {
            if (window.Bale && window.Bale.WebApp) {
                window.Bale.WebApp.openLink(`${link}`, { try_instant_view: true });

                setTimeout(function() {
                    window.Bale.WebApp.close();
                }, 1000);
            }
        }
