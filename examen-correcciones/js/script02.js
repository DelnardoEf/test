let destinationInfo = document.querySelector("#destination-info");

function mostrarInfoDestino(destination) {
    destinationInfo.innerHTML = `
        <div class="col-md-8 col-lg-8 col-12">
            <div class="card">
                <img src="${destination.image}" alt="${destination.name}">
                <div class="card">
                    <h2>${destination.name}</h2>
                    <p><strong>País:</strong> ${destination.country}</p>
                    <p><strong>Continente:</strong> ${destination.continent}</p>
                    <p><strong>Descripción:</strong> ${destination.description}</p>
                    <p><strong>Población:</strong> ${destination.population}</p>
                    <p><strong>Moneda:</strong> ${destination.currency}</p>
                    <p><strong>Idioma:</strong> ${destination.language}</p>
                    <p><strong>Mejor época para visitar:</strong> ${destination.best_time_to_visit}</p>
                    
                    <h5>Atracciones principales:</h5>
                    <ul>
                        ${destination.top_attractions.map(attraction => `<li>${attraction}</li>`).join('')}
                    </ul>
                    
                    <h5 >Platos locales:</h5>
                    <ul>
                        ${destination.local_dishes.map(dish => `<li>${dish}</li>`).join('')}
                    </ul>
                    
                    <h5>Actividades:</h5>
                    <ul>
                        ${destination.activities.map(activity => `<li>${activity}</li>`).join('')}
                    </ul>
                    
                </div>
            </div>
        </div>
    `;
}

document.addEventListener("DOMContentLoaded", () => {
    let destination = JSON.parse(localStorage.getItem("selectedDestination"));
    if (destination) {
        mostrarInfoDestino(destination);
    } else {
        destinationInfo.innerHTML = "<p class='text-center'>Non è stato selezionato alcun destino.</p>";
    }
});
