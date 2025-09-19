document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("nftContainer");

  // Load NFTs from localStorage
  const savedNFTs = JSON.parse(localStorage.getItem("nfts")) || [];

  savedNFTs.forEach(nft => {
    const cardDiv = document.createElement("div");
    cardDiv.className = "col-md-4";
    cardDiv.innerHTML = `
      <div class="card shadow-sm">
        <img src="${nft.img}" class="card-img-top" alt="${nft.title}">
        <div class="card-body">
          <h5 class="card-title">${nft.title}</h5>
          <p class="card-text">${nft.desc}</p>
          <p class="card-text"><strong>${nft.price} ETH / day</strong></p>
          <a href="#" class="btn btn-primary">Rent Now</a>
        </div>
      </div>
    `;
    container.appendChild(cardDiv);
  });
});
