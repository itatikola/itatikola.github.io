const log = document.querySelector(".event-log");

document.querySelector("#xhr").addEventListener("click", () => {
    log.textContent = "";

    const xhr = new XMLHttpRequest();

    xhr.addEventListener("loadend", () => {
        log.textContent = `${log.textContent}Finished with status: ${xhr.status}\n`;

        const fetchPromise = fetch(
            "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
        );
        
        fetchPromise
            .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            }
            log.textContent = `${log.textContent}Finished with status: ${response.status}\n`
            return response.json();
            })
            .then((data) => {
                log.textContent = `${log.textContent}${data[0].name}\n`;
            })
            .catch((error) => {
                log.textContent = `${log.textContent}Could not get products: ${error}\n`;
                console.error(`Could not get products: ${error}`);
            });
    
        log.textContent = `${log.textContent}Started Fetch request\n`;

        
        
    });

    xhr.open(
        "GET",
        "https://raw.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json",
    );
    xhr.send();
    log.textContent = `${log.textContent}Started XHR request\n`;
});

document.querySelector("#reload").addEventListener("click", () => {
  log.textContent = "";
  document.location.reload();
});
  