const spots = [
  {
    name: "オアシス21",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/82/OASIS_21_-_%E3%82%AA%E3%82%A2%E3%82%B7%E3%82%B921_-_panoramio_%282%29.jpg",
    category: "商業施設",
    area: "栄",
    congestionLevel: 2
  },
  {
    name: "熱田神宮",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c0/Atsuta_jingu_shrine_%2C_%E7%86%B1%E7%94%B0%E7%A5%9E%E5%AE%AE_-_panoramio_%289%29.jpg",
    category: "観光地",
    area: "熱田",
    congestionLevel: 0
  },
  {
    name: "名古屋城",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d1/%28with_Sakura%29_Nagoya_Castle_Keep_Tower.JPG",
    category: "観光地",
    area: "名城",
    congestionLevel: 1
  },
  {
    name: "名古屋市科学館",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Nagoya_Cty_Science_Museum_03%2C_Sakae_Naka_Ward_Nagoya_2020.jpg",
    category: "観光地",
    area: "伏見",
    congestionLevel: 1
  },
  {
    name: "名古屋港水族館",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Port_of_Nagoya_Public_Aquarium2.jpg",
    category: "観光地",
    area: "港区",
    congestionLevel: 2
  },
  {
    name: "大須商店街",
    image: "https://source.unsplash.com/400x300/?shopping,japan",
    category: "飲食・ショッピング",
    area: "中区大須",
    congestionLevel: 1
  },
  {
    name: "徳川園",
    image: "https://source.unsplash.com/400x300/?japanese,garden",
    category: "観光地",
    area: "東区",
    congestionLevel: 0
  },
  {
    name: "東山動植物園",
    image: "https://source.unsplash.com/400x300/?zoo,giraffe",
    category: "観光地",
    area: "千種区",
    congestionLevel: 3
  },
  {
    name: "ノリタケの森",
    image: "https://source.unsplash.com/400x300/?museum,ceramic",
    category: "観光地",
    area: "西区",
    congestionLevel: 1
  },
  {
    name: "レゴランド・ジャパン",
    image: "https://source.unsplash.com/400x300/?themepark,lego",
    category: "テーマパーク",
    area: "港区",
    congestionLevel: 2
  }
];

const congestionMap = {
  0: { text: "空いています", class: "level-0" },
  1: { text: "やや混雑", class: "level-1" },
  2: { text: "混雑しています", class: "level-2" },
  3: { text: "非常に混雑", class: "level-3" }
};

const container = document.getElementById("cardContainer");

spots.forEach(spot => {
  const card = document.createElement("div");
  card.className = "spot-card";

  card.innerHTML = `
    <img src="${spot.image}" alt="${spot.name}">
    <div class="card-content">
      <h2>${spot.name}</h2>
      <p>カテゴリ：${spot.category}｜エリア：${spot.area}</p>
      <span class="congestion ${congestionMap[spot.congestionLevel].class}">
        混雑：${congestionMap[spot.congestionLevel].text}
      </span>
    </div>
  `;

  container.appendChild(card);
});
