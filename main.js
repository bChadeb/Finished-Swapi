const getResidentsBtn = document.getElementById('getResidentsBtn')

const fetchResidents = () => {
    axios.get('https://swapi.dev/api/planets/?search=Alderaan')
        .then(response => {
            const residentsUrls = response.data.results[0].residents
            residentsUrls.forEach(residentUrl => {
                axios.get(residentUrl)
                    .then(residentResponse => {
                        const residentName = residentResponse.data.name
                        const h2 = document.createElement('h2')
                        h2.textContent = residentName
                        document.body.appendChild(h2)
                    })
                    .catch(error => {
                        console.error('Error fetching resident:', error)
                    })
            })
        })
        .catch(error => {
            console.error('Error fetching planet:', error)
        })
}

getResidentsBtn.addEventListener('click', fetchResidents)
