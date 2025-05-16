const spots = [
  {
    name: "オアシス21",
    image: "https://example.com/oasis21.jpg",
    category: "商業施設",
    area: "栄",
    congestionLevel: 2 // 混雑しています
  },
  {
    name: "熱田神宮",
    image: "https://example.com/atsutajingu.jpg",
    category: "観光地",
    area: "熱田",
    congestionLevel: 0 // 空いています
  },
  {
    name: "大須商店街",
    image: "https://example.com/osu.jpg",
    category: "飲食・ショッピング",
    area: "大須",
    congestionLevel: 1 // やや混雑
  }
];

// 混雑度に応じたラベルとCSSクラス
const congestionMap = {
  0: { text: "混雑：空いています", class: "level-0" },
  1: { text: "混雑：やや混雑", class: "level-1" },
  2: { text: "混雑：混雑しています", class: "level-2" },
  3: { text: "混雑：非常に混雑", class: "level-3" }
};

// DOMにカードを追加
const container = document.getElementById("cardContainer");

spots.forEach(spot => {
  const card = document.createElement("div");
  card.className = "spot-card";

  const img = document.createElement("img");
  img.src = spot.image;
  img.alt = spot.name;

  const content = document.createElement("div");
  content.className = "card-content";

  const title = document.createElement("h2");
  title.textContent = spot.name;

  const info = document.createElement("p");
  info.textContent = `カテゴリ：${spot.category}｜エリア：${spot.area}`;

  const congestion = document.createElement("span");
  congestion.className = `congestion ${congestionMap[spot.congestionLevel].class}`;
  congestion.textContent = congestionMap[spot.congestionLevel].text;

  content.appendChild(title);
  content.appendChild(info);
  content.appendChild(congestion);

  card.appendChild(img);
  card.appendChild(content);
  container.appendChild(card);
});
