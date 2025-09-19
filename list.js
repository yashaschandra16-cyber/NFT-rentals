document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("nftForm");
  const container = document.getElementById("newNftContainer");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get values
    const title = document.getElementById("nftTitle").value;
    const price = document.getElementById("nftPrice").value;
    const img = document.getElementById("nftImage").value;
    const desc = document.getElementById("nftDesc").value;

    // NFT object
    const nftData = { title, price, img, desc };

    // Save to localStorage
    let savedNFTs = JSON.parse(localStorage.getItem("nfts")) || [];
    savedNFTs.push(nftData);
    localStorage.setItem("nfts", JSON.stringify(savedNFTs));

    // Show immediately on list page
    addNFTCard(nftData, container);

    // Reset form
    form.reset();
  });

  // Function to render NFT card
  function addNFTCard(nft, parent) {
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
    parent.appendChild(cardDiv);
  }

  // Load existing NFTs on page load
  const existingNFTs = JSON.parse(localStorage.getItem("nfts")) || [];
  existingNFTs.forEach(nft => addNFTCard(nft, container));
});

  