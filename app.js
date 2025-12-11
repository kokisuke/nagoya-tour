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
    image: "https://upload.wikimedia.org/wikipedia/commons/5/54/Osu_Summer_Festival_in_Osu_Kannon.2023_-_3.jpg",
    category: "飲食・ショッピング",
    area: "中区大須",
    congestionLevel: 1
  },
  {
    name: "徳川園",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/91/%E5%90%8D%E5%8F%A4%E5%B1%8B%E5%B8%82%E5%BE%B3%E5%B7%9D%E5%9C%92%E3%81%AE%E9%BE%8D%E4%BB%99%E6%B9%96.jpg",
    category: "観光地",
    area: "東区",
    congestionLevel: 0
  },
  {
    name: "東山動植物園",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d6/Higashiyama_Zoo_%26_Botanical_Gardens_Main_Gate_%282%29%2C_Kameiri_Tashiro-cho_Chikusa_Ward_Nagoya_2021.jpg",
    category: "観光地",
    area: "千種区",
    congestionLevel: 3
  },
  {
    name: "ノリタケの森",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Noritake_Garden02%2C_Nishi_Ward_Nagoya_2014.jpg",
    category: "観光地",
    area: "西区",
    congestionLevel: 1
  },
  {
    name: "レゴランド・ジャパン",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6f/LEGOLAND_JAPAN_Entrance%2C_Kinjofuto_Minato_Ward_Nagoya_2022.jpg",
    category: "テーマパーク",
    area: "港区",
    congestionLevel: 2
  },
  {
    name: "名古屋テレビ塔",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=640&h=400&fit=crop&auto=format",
    fallbackImage: "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='180' viewBox='0 0 300 180'%3E%3Crect width='300' height='180' fill='%23e3f2fd'/%3E%3Ctext x='150' y='90' text-anchor='middle' dominant-baseline='middle' font-family='Arial, sans-serif' font-size='14' fill='%23333'%3E🗼 名古屋テレビ塔%3C/text%3E%3C/svg%3E",
    category: "観光地",
    area: "中区",
    congestionLevel: 1
  },
  {
    name: "白鳥庭園",
    image: "https://images.unsplash.com/photo-1520637836862-4d197d17c367?w=640&h=400&fit=crop&auto=format",
    fallbackImage: "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='180' viewBox='0 0 300 180'%3E%3Crect width='300' height='180' fill='%23e8f5e8'/%3E%3Ctext x='150' y='90' text-anchor='middle' dominant-baseline='middle' font-family='Arial, sans-serif' font-size='14' fill='%23333'%3E🦢 白鳥庭園%3C/text%3E%3C/svg%3E",
    category: "観光地",
    area: "熱田区",
    congestionLevel: 0
  },
  {
    name: "四間道",
    image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=640&h=400&fit=crop&auto=format",
    fallbackImage: "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='180' viewBox='0 0 300 180'%3E%3Crect width='300' height='180' fill='%23f1f8e9'/%3E%3Ctext x='150' y='90' text-anchor='middle' dominant-baseline='middle' font-family='Arial, sans-serif' font-size='14' fill='%23333'%3E🏘️ 四間道%3C/text%3E%3C/svg%3E",
    category: "観光地",
    area: "西区",
    congestionLevel: 0
  },
  {
    name: "名古屋市美術館",
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=640&h=400&fit=crop&auto=format",
    fallbackImage: "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='180' viewBox='0 0 300 180'%3E%3Crect width='300' height='180' fill='%23fce4ec'/%3E%3Ctext x='150' y='90' text-anchor='middle' dominant-baseline='middle' font-family='Arial, sans-serif' font-size='14' fill='%23333'%3E🎨 名古屋市美術館%3C/text%3E%3C/svg%3E",
    category: "観光地",
    area: "中区",
    congestionLevel: 1
  },
  {
    name: "名古屋ドーム（バンテリンドーム）",
    image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=640&h=400&fit=crop&auto=format",
    fallbackImage: "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='180' viewBox='0 0 300 180'%3E%3Crect width='300' height='180' fill='%23e0f2f1'/%3E%3Ctext x='150' y='90' text-anchor='middle' dominant-baseline='middle' font-family='Arial, sans-serif' font-size='14' fill='%23333'%3E⚾ 名古屋ドーム%3C/text%3E%3C/svg%3E",
    category: "スポーツ施設",
    area: "東区",
    congestionLevel: 2
  },
  {
    name: "覚王山日泰寺",
    image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=640&h=400&fit=crop&auto=format",
    fallbackImage: "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='180' viewBox='0 0 300 180'%3E%3Crect width='300' height='180' fill='%23f3e5f5'/%3E%3Ctext x='150' y='90' text-anchor='middle' dominant-baseline='middle' font-family='Arial, sans-serif' font-size='14' fill='%23333'%3E⛩️ 覚王山日泰寺%3C/text%3E%3C/svg%3E",
    category: "観光地",
    area: "千種区",
    congestionLevel: 0
  },
  {
    name: "名古屋市博物館",
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=640&h=400&fit=crop&auto=format",
    fallbackImage: "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='180' viewBox='0 0 300 180'%3E%3Crect width='300' height='180' fill='%23fff3e0'/%3E%3Ctext x='150' y='90' text-anchor='middle' dominant-baseline='middle' font-family='Arial, sans-serif' font-size='14' fill='%23333'%3E🏛️ 名古屋市博物館%3C/text%3E%3C/svg%3E",
    category: "観光地",
    area: "瑞穂区",
    congestionLevel: 0
  },
  {
    name: "円頓寺商店街",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=640&h=400&fit=crop&auto=format",
    fallbackImage: "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='180' viewBox='0 0 300 180'%3E%3Crect width='300' height='180' fill='%23fce4ec'/%3E%3Ctext x='150' y='90' text-anchor='middle' dominant-baseline='middle' font-family='Arial, sans-serif' font-size='14' fill='%23333'%3E🛍️ 円頓寺商店街%3C/text%3E%3C/svg%3E",
    category: "飲食・ショッピング",
    area: "西区",
    congestionLevel: 1
  },
  {
    name: "名古屋港ガーデンふ頭",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=640&h=400&fit=crop&auto=format",
    fallbackImage: "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='180' viewBox='0 0 300 180'%3E%3Crect width='300' height='180' fill='%23e0f2f1'/%3E%3Ctext x='150' y='90' text-anchor='middle' dominant-baseline='middle' font-family='Arial, sans-serif' font-size='14' fill='%23333'%3E🚢 名古屋港ガーデンふ頭%3C/text%3E%3C/svg%3E",
    category: "観光地",
    area: "港区",
    congestionLevel: 1
  },
  {
    name: "有松・鳴海絞会館",
    image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=640&h=400&fit=crop&auto=format",
    fallbackImage: "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='180' viewBox='0 0 300 180'%3E%3Crect width='300' height='180' fill='%23f1f8e9'/%3E%3Ctext x='150' y='90' text-anchor='middle' dominant-baseline='middle' font-family='Arial, sans-serif' font-size='14' fill='%23333'%3E🎭 有松・鳴海絞会館%3C/text%3E%3C/svg%3E",
    category: "観光地",
    area: "緑区",
    congestionLevel: 0
  },
  {
    name: "文化のみち橦木館",
    image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=640&h=400&fit=crop&auto=format",
    fallbackImage: "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='180' viewBox='0 0 300 180'%3E%3Crect width='300' height='180' fill='%23fff3e0'/%3E%3Ctext x='150' y='90' text-anchor='middle' dominant-baseline='middle' font-family='Arial, sans-serif' font-size='14' fill='%23333'%3E🏘️ 文化のみち橦木館%3C/text%3E%3C/svg%3E",
    category: "観光地",
    area: "東区",
    congestionLevel: 0
  },
  {
    name: "大須観音",
    image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=640&h=400&fit=crop&auto=format",
    fallbackImage: "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='180' viewBox='0 0 300 180'%3E%3Crect width='300' height='180' fill='%23f3e5f5'/%3E%3Ctext x='150' y='90' text-anchor='middle' dominant-baseline='middle' font-family='Arial, sans-serif' font-size='14' fill='%23333'%3E⛩️ 大須観音%3C/text%3E%3C/svg%3E",
    category: "観光地",
    area: "中区",
    congestionLevel: 1
  },
  {
    name: "ヤマザキマザック美術館",
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=640&h=400&fit=crop&auto=format",
    fallbackImage: "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='180' viewBox='0 0 300 180'%3E%3Crect width='300' height='180' fill='%23fce4ec'/%3E%3Ctext x='150' y='90' text-anchor='middle' dominant-baseline='middle' font-family='Arial, sans-serif' font-size='14' fill='%23333'%3E🎨 ヤマザキマザック美術館%3C/text%3E%3C/svg%3E",
    category: "観光地",
    area: "東区",
    congestionLevel: 0
  },
  {
    name: "パロマ瑞穂スタジアム",
    image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=640&h=400&fit=crop&auto=format",
    fallbackImage: "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='180' viewBox='0 0 300 180'%3E%3Crect width='300' height='180' fill='%23e0f2f1'/%3E%3Ctext x='150' y='90' text-anchor='middle' dominant-baseline='middle' font-family='Arial, sans-serif' font-size='14' fill='%23333'%3E⚽ パロマ瑞穂スタジアム%3C/text%3E%3C/svg%3E",
    category: "スポーツ施設",
    area: "瑞穂区",
    congestionLevel: 2
  },
  {
    name: "名古屋城本丸御殿",
    image: "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=640&h=400&fit=crop&auto=format",
    fallbackImage: "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='180' viewBox='0 0 300 180'%3E%3Crect width='300' height='180' fill='%23fff3e0'/%3E%3Ctext x='150' y='90' text-anchor='middle' dominant-baseline='middle' font-family='Arial, sans-serif' font-size='14' fill='%23333'%3E🏯 名古屋城本丸御殿%3C/text%3E%3C/svg%3E",
    category: "観光地",
    area: "中区",
    congestionLevel: 1
  }
];

const congestionMap = {
  0: { text: "空いています", class: "level-0" },
  1: { text: "やや混雑", class: "level-1" },
  2: { text: "混雑しています", class: "level-2" },
  3: { text: "非常に混雑", class: "level-3" }
};

// API設定
const API_CONFIG = {
  googleMaps: {
    apiKey: 'YOUR_GOOGLE_MAPS_API_KEY', // 実際のAPIキーに置き換えてください
    libraries: ['places', 'geometry'],
    language: 'ja',
    region: 'JP'
  },
  weather: {
    apiKey: 'YOUR_OPENWEATHER_API_KEY', // OpenWeatherMap APIキー
    baseUrl: 'https://api.openweathermap.org/data/2.5'
  },
  twitter: {
    bearerToken: 'YOUR_TWITTER_BEARER_TOKEN', // Twitter API v2 Bearer Token
    baseUrl: 'https://api.twitter.com/2'
  }
};

// リアルタイム混雑状況更新システム
class CrowdMonitor {
  constructor() {
    this.updateInterval = 5 * 60 * 1000; // 5分間隔で更新
    this.lastUpdate = null;
    this.isUpdating = false;
    this.placesService = null;
    this.map = null;
    this.initializeGoogleMaps();
  }

  // Google Maps APIを初期化
  async initializeGoogleMaps() {
    try {
      // Google Maps APIが読み込まれるまで待機
      await this.loadGoogleMapsAPI();
      
      // 名古屋市中心部の座標
      const nagoyaCenter = { lat: 35.1815, lng: 136.9066 };
      
      // 非表示のマップを作成（Places APIサービス用）
      const mapDiv = document.createElement('div');
      mapDiv.style.display = 'none';
      document.body.appendChild(mapDiv);
      
      this.map = new google.maps.Map(mapDiv, {
        center: nagoyaCenter,
        zoom: 12
      });
      
      this.placesService = new google.maps.places.PlacesService(this.map);
      console.log('✅ Google Maps API初期化完了');
    } catch (error) {
      console.warn('⚠️ Google Maps API初期化失敗:', error);
      console.log('📝 予測データモードで動作します');
    }
  }

  // Google Maps APIを動的に読み込み
  loadGoogleMapsAPI() {
    return new Promise((resolve, reject) => {
      // 既に読み込み済みの場合
      if (window.google && window.google.maps) {
        resolve();
        return;
      }

      // APIキーが設定されていない場合
      if (!API_CONFIG.googleMaps.apiKey || API_CONFIG.googleMaps.apiKey === 'YOUR_GOOGLE_MAPS_API_KEY') {
        reject(new Error('Google Maps APIキーが設定されていません'));
        return;
      }

      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${API_CONFIG.googleMaps.apiKey}&libraries=${API_CONFIG.googleMaps.libraries.join(',')}&language=${API_CONFIG.googleMaps.language}&region=${API_CONFIG.googleMaps.region}&callback=initGoogleMaps`;
      script.async = true;
      script.defer = true;
      
      window.initGoogleMaps = () => {
        resolve();
        delete window.initGoogleMaps;
      };
      
      script.onerror = () => {
        reject(new Error('Google Maps APIの読み込みに失敗'));
      };
      
      document.head.appendChild(script);
    });
  }

  // 現在時刻と曜日に基づく混雑度予測
  predictCrowdLevel(spot, currentTime = new Date()) {
    const hour = currentTime.getHours();
    const day = currentTime.getDay(); // 0 = 日曜日, 6 = 土曜日
    const isWeekend = day === 0 || day === 6;
    
    let baseCongestion = spot.congestionLevel;
    
    // 時間帯による調整
    if (spot.category === "観光地" || spot.category === "テーマパーク") {
      if (hour >= 10 && hour <= 16) {
        baseCongestion = Math.min(3, baseCongestion + 1); // 昼間は混雑
      } else if (hour >= 17 || hour <= 8) {
        baseCongestion = Math.max(0, baseCongestion - 1); // 早朝・夜間は空いている
      }
    }
    
    if (spot.category === "飲食・ショッピング") {
      if ((hour >= 12 && hour <= 14) || (hour >= 18 && hour <= 20)) {
        baseCongestion = Math.min(3, baseCongestion + 1); // ランチ・ディナー時間
      }
    }

    if (spot.category === "スポーツ施設") {
      // イベント開催時間帯を仮定
      if (hour >= 18 && hour <= 21) {
        baseCongestion = Math.min(3, baseCongestion + 2);
      }
    }

    // 週末による調整
    if (isWeekend && (spot.category === "観光地" || spot.category === "テーマパーク")) {
      baseCongestion = Math.min(3, baseCongestion + 1);
    }

    // ランダムな変動を追加（±1レベル）
    const randomVariation = Math.floor(Math.random() * 3) - 1; // -1, 0, 1
    baseCongestion = Math.max(0, Math.min(3, baseCongestion + randomVariation));

    return baseCongestion;
  }

  // Google Places APIから実際の混雑データを取得
  async fetchPlaceDetails(spot) {
    return new Promise((resolve) => {
      if (!this.placesService) {
        resolve(null);
        return;
      }

      const request = {
        query: `${spot.name} 名古屋`,
        fields: ['place_id', 'name', 'rating', 'user_ratings_total', 'current_opening_hours']
      };

      this.placesService.findPlaceFromQuery(request, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK && results[0]) {
          const placeId = results[0].place_id;
          
          // 詳細情報を取得
          this.placesService.getDetails({
            placeId: placeId,
            fields: ['name', 'rating', 'user_ratings_total', 'current_opening_hours', 'popular_times']
          }, (place, detailStatus) => {
            if (detailStatus === google.maps.places.PlacesServiceStatus.OK) {
              resolve({
                place: place,
                congestionLevel: this.calculateCongestionFromPlaceData(place),
                source: 'Google Places API'
              });
            } else {
              resolve(null);
            }
          });
        } else {
          resolve(null);
        }
      });
    });
  }

  // Google Places APIのデータから混雑度を計算
  calculateCongestionFromPlaceData(place) {
    let congestionLevel = 1; // デフォルト値

    // 現在時刻の取得
    const now = new Date();
    const currentHour = now.getHours();
    const currentDay = now.getDay();

    // レビュー数とレーティングから人気度を判定
    if (place.user_ratings_total && place.rating) {
      const popularity = (place.user_ratings_total * place.rating) / 1000;
      if (popularity > 50) congestionLevel = Math.min(3, congestionLevel + 2);
      else if (popularity > 20) congestionLevel = Math.min(3, congestionLevel + 1);
    }

    // 営業時間から混雑度を調整
    if (place.current_opening_hours && place.current_opening_hours.open_now) {
      // 営業中の場合、時間帯による調整
      if ((currentHour >= 11 && currentHour <= 14) || (currentHour >= 18 && currentHour <= 20)) {
        congestionLevel = Math.min(3, congestionLevel + 1);
      }
    } else {
      // 営業時間外は混雑度を下げる
      congestionLevel = Math.max(0, congestionLevel - 2);
    }

    // 週末調整
    if (currentDay === 0 || currentDay === 6) {
      congestionLevel = Math.min(3, congestionLevel + 1);
    }

    return Math.max(0, Math.min(3, congestionLevel));
  }

  // 天気情報を取得（混雑度判定に影響）
  async fetchWeatherData() {
    try {
      if (!API_CONFIG.weather.apiKey || API_CONFIG.weather.apiKey === 'YOUR_OPENWEATHER_API_KEY') {
        return null;
      }

      const response = await fetch(
        `${API_CONFIG.weather.baseUrl}/weather?q=Nagoya,JP&appid=${API_CONFIG.weather.apiKey}&units=metric&lang=ja`
      );
      
      if (!response.ok) throw new Error('Weather API response not ok');
      
      const data = await response.json();
      return {
        temperature: data.main.temp,
        weather: data.weather[0].main,
        description: data.weather[0].description,
        humidity: data.main.humidity,
        windSpeed: data.wind.speed
      };
    } catch (error) {
      console.warn('天気情報の取得に失敗:', error);
      return null;
    }
  }

  // Twitter APIから混雑関連の投稿を検索
  async fetchTwitterData(spotName) {
    try {
      if (!API_CONFIG.twitter.bearerToken || API_CONFIG.twitter.bearerToken === 'YOUR_TWITTER_BEARER_TOKEN') {
        return null;
      }

      // CORS問題のため、実際の本番環境ではサーバーサイドプロキシが必要
      const query = encodeURIComponent(`${spotName} (混雑 OR 空いている OR 人多い OR 待ち時間) -is:retweet`);
      const url = `${API_CONFIG.twitter.baseUrl}/tweets/search/recent?query=${query}&max_results=10&tweet.fields=created_at,public_metrics`;
      
      // 注意: ブラウザから直接Twitter APIを呼び出すとCORSエラーが発生するため、
      // 実際の実装ではサーバーサイドプロキシまたはTwitter API v1.1のJSONP endpointを使用
      console.log(`Twitter検索クエリ: ${query}`);
      return null; // 実装のプレースホルダー
    } catch (error) {
      console.warn('Twitter APIの取得に失敗:', error);
      return null;
    }
  }

  // 天気情報を考慮した混雑度調整
  adjustCongestionForWeather(baseCongestion, weatherData, spotCategory) {
    if (!weatherData) return baseCongestion;

    let adjustment = 0;

    // 天気による影響
    switch (weatherData.weather) {
      case 'Rain':
      case 'Drizzle':
      case 'Thunderstorm':
        // 雨の場合、屋外スポットは空く、屋内スポットは混む
        if (spotCategory === '観光地') {
          adjustment = -1; // 屋外観光地は空く
        } else if (spotCategory === '飲食・ショッピング' || spotCategory === '商業施設') {
          adjustment = +1; // 屋内施設は混む
        }
        break;
      case 'Snow':
        adjustment = -1; // 雪の場合は全体的に人出が減る
        break;
      case 'Clear':
        // 晴れの場合、観光地は混む
        if (spotCategory === '観光地' || spotCategory === 'テーマパーク') {
          adjustment = +1;
        }
        break;
    }

    // 気温による影響
    if (weatherData.temperature < 5 || weatherData.temperature > 35) {
      adjustment -= 1; // 極端な気温では人出が減る
    } else if (weatherData.temperature >= 20 && weatherData.temperature <= 25) {
      adjustment += 1; // 快適な気温では人出が増える
    }

    return Math.max(0, Math.min(3, baseCongestion + adjustment));
  }

  // 外部APIからの混雑データ取得（Google Places + 天気 + 予測の組み合わせ）
  async fetchRealTimeData() {
    try {
      const realTimeData = [];
      
      // 天気情報を先に取得（全スポット共通）
      const weatherData = await this.fetchWeatherData();
      if (weatherData) {
        console.log('🌤️ 天気情報取得:', weatherData);
      }

      for (let i = 0; i < spots.length; i++) {
        const spot = spots[i];
        let data;

        // Google Places APIが利用可能な場合は実データを取得
        if (this.placesService) {
          try {
            const placeData = await this.fetchPlaceDetails(spot);
            if (placeData) {
              data = {
                name: spot.name,
                congestionLevel: placeData.congestionLevel,
                lastUpdated: new Date(),
                source: placeData.source,
                place: placeData.place
              };
            }
          } catch (error) {
            console.warn(`Google Places API取得失敗 (${spot.name}):`, error);
          }
        }

        // APIデータが取得できない場合は予測データを使用
        if (!data) {
          let congestionLevel = this.predictCrowdLevel(spot);
          
          // 天気情報を考慮した調整
          if (weatherData) {
            congestionLevel = this.adjustCongestionForWeather(congestionLevel, weatherData, spot.category);
          }
          
          data = {
            name: spot.name,
            congestionLevel: congestionLevel,
            lastUpdated: new Date(),
            source: weatherData ? '予測データ（天気考慮）' : '予測データ',
            weather: weatherData
          };
        } else if (weatherData) {
          // Google Places APIデータも天気で調整
          data.congestionLevel = this.adjustCongestionForWeather(data.congestionLevel, weatherData, spot.category);
          data.weather = weatherData;
        }

        realTimeData.push(data);
        
        // APIレート制限を考慮して遅延
        if (this.placesService && i < spots.length - 1) {
          await new Promise(resolve => setTimeout(resolve, 200));
        }
      }

      return realTimeData;
    } catch (error) {
      console.error('混雑データの取得に失敗:', error);
      // フォールバック：予測データを返す
      return spots.map(spot => ({
        name: spot.name,
        congestionLevel: this.predictCrowdLevel(spot),
        lastUpdated: new Date(),
        source: '予測データ（フォールバック）'
      }));
    }
  }

  // 混雑状況を更新
  async updateCongestionLevels() {
    if (this.isUpdating) return;
    
    this.isUpdating = true;
    console.log('🔄 混雑状況を更新中...');

    try {
      const realTimeData = await this.fetchRealTimeData();
      
      if (realTimeData) {
        realTimeData.forEach(data => {
          const spotIndex = spots.findIndex(s => s.name === data.name);
          if (spotIndex !== -1) {
            const oldLevel = spots[spotIndex].congestionLevel;
            spots[spotIndex].congestionLevel = data.congestionLevel;
            spots[spotIndex].lastUpdated = data.lastUpdated;
            spots[spotIndex].source = data.source;

            // カードのUIを更新
            this.updateCardDisplay(spotIndex, oldLevel, data.congestionLevel);
          }
        });

        this.lastUpdate = new Date();
        this.showUpdateNotification();
        console.log('✅ 混雑状況を更新しました');
      }
    } catch (error) {
      console.error('混雑状況の更新中にエラー:', error);
    } finally {
      this.isUpdating = false;
    }
  }

  // 個別カードの表示を更新
  updateCardDisplay(spotIndex, oldLevel, newLevel) {
    const cards = document.querySelectorAll('.spot-card');
    if (cards[spotIndex]) {
      const congestionElement = cards[spotIndex].querySelector('.congestion');
      if (congestionElement) {
        // 古いクラスを削除
        congestionElement.className = 'congestion';
        // 新しいクラスを追加
        congestionElement.classList.add(congestionMap[newLevel].class);
        congestionElement.textContent = `混雑：${congestionMap[newLevel].text}`;

        // 変更をアニメーションで強調
        if (oldLevel !== newLevel) {
          congestionElement.style.animation = 'pulse 0.5s ease-in-out';
          setTimeout(() => {
            congestionElement.style.animation = '';
          }, 500);
        }
      }
    }
  }

  // 更新通知を表示
  showUpdateNotification() {
    const notification = document.createElement('div');
    notification.className = 'update-notification';
    notification.innerHTML = `
      <span>🔄 混雑状況を更新しました</span>
      <small>${new Date().toLocaleTimeString()}</small>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.remove();
    }, 3000);
  }

  // 自動更新を開始
  startAutoUpdate() {
    console.log('🚀 リアルタイム混雑監視を開始しました');
    
    // 初回更新
    this.updateCongestionLevels();
    
    // 定期更新
    setInterval(() => {
      this.updateCongestionLevels();
    }, this.updateInterval);
  }

  // 手動更新
  manualUpdate() {
    this.updateCongestionLevels();
  }
}

// 混雑監視システムを初期化
const crowdMonitor = new CrowdMonitor();

// APIステータスを取得
function getApiStatus() {
  return {
    googleMaps: API_CONFIG.googleMaps.apiKey !== 'YOUR_GOOGLE_MAPS_API_KEY',
    weather: API_CONFIG.weather.apiKey !== 'YOUR_OPENWEATHER_API_KEY',
    twitter: API_CONFIG.twitter.bearerToken !== 'YOUR_TWITTER_BEARER_TOKEN'
  };
}

// UIコントロールを作成
function createControlPanel() {
  const controlPanel = document.createElement('div');
  controlPanel.className = 'control-panel';
  
  const apiStatus = getApiStatus();
  const activeApis = [];
  if (apiStatus.googleMaps) activeApis.push('🗺️ Google Maps');
  if (apiStatus.weather) activeApis.push('🌤️ 天気情報');
  if (apiStatus.twitter) activeApis.push('🐦 Twitter');
  
  const apiStatusText = activeApis.length > 0 
    ? `利用中API: ${activeApis.join(', ')}` 
    : '予測データのみ';

  controlPanel.innerHTML = `
    <div class="update-controls">
      <button id="manualUpdate" class="update-btn">🔄 今すぐ更新</button>
      <span id="lastUpdateTime" class="last-update">最終更新: 未更新</span>
      <span id="autoUpdateStatus" class="auto-status">🟢 自動更新: ON</span>
    </div>
    <div class="api-status">
      <small class="api-info">${apiStatusText}</small>
      <button id="apiSettings" class="api-settings-btn">⚙️ API設定</button>
    </div>
  `;
  
  document.body.insertBefore(controlPanel, document.getElementById('cardContainer'));
  
  // 手動更新ボタンのイベント
  document.getElementById('manualUpdate').addEventListener('click', () => {
    crowdMonitor.manualUpdate();
  });

  // API設定ボタンのイベント
  document.getElementById('apiSettings').addEventListener('click', () => {
    showApiSettingsModal();
  });
}

// API設定モーダルを表示
function showApiSettingsModal() {
  const modal = document.createElement('div');
  modal.className = 'api-modal';
  modal.innerHTML = `
    <div class="api-modal-content">
      <h3>🔧 API設定</h3>
      <div class="api-form">
        <div class="api-field">
          <label>Google Maps API キー:</label>
          <input type="text" id="googleMapsKey" placeholder="AIza..." value="${API_CONFIG.googleMaps.apiKey !== 'YOUR_GOOGLE_MAPS_API_KEY' ? API_CONFIG.googleMaps.apiKey : ''}">
          <small>Google Cloud Platform で Places API を有効にしてください</small>
        </div>
        <div class="api-field">
          <label>OpenWeather API キー:</label>
          <input type="text" id="weatherKey" placeholder="..." value="${API_CONFIG.weather.apiKey !== 'YOUR_OPENWEATHER_API_KEY' ? API_CONFIG.weather.apiKey : ''}">
          <small>openweathermap.org でAPIキーを取得してください</small>
        </div>
        <div class="api-field">
          <label>Twitter Bearer Token:</label>
          <input type="text" id="twitterToken" placeholder="AAAA..." value="${API_CONFIG.twitter.bearerToken !== 'YOUR_TWITTER_BEARER_TOKEN' ? API_CONFIG.twitter.bearerToken : ''}">
          <small>Twitter Developer Portal でBearer Tokenを取得してください</small>
        </div>
      </div>
      <div class="api-modal-actions">
        <button id="saveApiSettings" class="save-btn">💾 保存</button>
        <button id="cancelApiSettings" class="cancel-btn">❌ キャンセル</button>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
  
  // イベントリスナー
  document.getElementById('saveApiSettings').addEventListener('click', () => {
    const googleMapsKey = document.getElementById('googleMapsKey').value;
    const weatherKey = document.getElementById('weatherKey').value;
    const twitterToken = document.getElementById('twitterToken').value;
    
    if (googleMapsKey) API_CONFIG.googleMaps.apiKey = googleMapsKey;
    if (weatherKey) API_CONFIG.weather.apiKey = weatherKey;
    if (twitterToken) API_CONFIG.twitter.bearerToken = twitterToken;
    
    // ローカルストレージに保存
    localStorage.setItem('nagoya_tour_api_config', JSON.stringify(API_CONFIG));
    
    modal.remove();
    
    // Google Maps APIを再初期化
    if (googleMapsKey) {
      crowdMonitor.initializeGoogleMaps();
    }
    
    showNotification('✅ API設定を保存しました');
  });
  
  document.getElementById('cancelApiSettings').addEventListener('click', () => {
    modal.remove();
  });
  
  // モーダル外クリックで閉じる
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.remove();
  });
}

// 通知を表示
function showNotification(message) {
  const notification = document.createElement('div');
  notification.className = 'update-notification';
  notification.textContent = message;
  document.body.appendChild(notification);
  
  setTimeout(() => notification.remove(), 3000);
}

const container = document.getElementById("cardContainer");

spots.forEach(spot => {
  const card = document.createElement("div");
  card.className = "spot-card";

  const img = document.createElement("img");
  img.src = spot.image;
  img.alt = spot.name;
  
  img.onload = function() {
    console.log(`✓ 画像が正常に読み込まれました: ${spot.name}`);
  };
  
  img.onerror = function() {
    console.warn(`⚠ メイン画像の読み込みに失敗しました: ${spot.name}, フォールバック画像を使用します`);
    this.onerror = null;
    
    // フォールバック画像がある場合はそれを使用、なければSVGプレースホルダー
    if (spot.fallbackImage) {
      this.src = spot.fallbackImage;
    } else {
      const svgPlaceholder = `data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='180' viewBox='0 0 300 180'%3E%3Crect width='300' height='180' fill='%23f0f0f0'/%3E%3Ctext x='150' y='90' text-anchor='middle' dominant-baseline='middle' font-family='Arial, sans-serif' font-size='14' fill='%23666'%3E${encodeURIComponent(spot.name)}%3C/text%3E%3C/svg%3E`;
      this.src = svgPlaceholder;
    }
    this.style.backgroundColor = '#f0f0f0';
  };

  card.innerHTML = `
    <div class="card-content">
      <h2>${spot.name}</h2>
      <p>カテゴリ：${spot.category}｜エリア：${spot.area}</p>
      <span class="congestion ${congestionMap[spot.congestionLevel].class}">
        混雑：${congestionMap[spot.congestionLevel].text}
      </span>
      <div class="data-info">
        <small class="update-time">更新: ${spot.lastUpdated ? spot.lastUpdated.toLocaleTimeString() : '初期データ'}</small>
        <small class="data-source">${spot.source || 'ベースデータ'}</small>
      </div>
    </div>
  `;

  card.insertBefore(img, card.firstChild);

  container.appendChild(card);
});

// ローカルストレージからAPI設定を読み込み
function loadApiConfig() {
  try {
    const savedConfig = localStorage.getItem('nagoya_tour_api_config');
    if (savedConfig) {
      const parsedConfig = JSON.parse(savedConfig);
      Object.assign(API_CONFIG, parsedConfig);
      console.log('✅ API設定を読み込みました');
    }
  } catch (error) {
    console.warn('API設定の読み込みに失敗:', error);
  }
}

// アプリケーション初期化
document.addEventListener('DOMContentLoaded', () => {
  // API設定を読み込み
  loadApiConfig();
  
  // UIを作成
  createControlPanel();
  
  // 3秒後に自動更新を開始（ページ読み込み完了後）
  setTimeout(() => {
    crowdMonitor.startAutoUpdate();
  }, 3000);
});

// 最終更新時刻の表示を更新する関数
function updateLastUpdateDisplay() {
  const lastUpdateElement = document.getElementById('lastUpdateTime');
  if (lastUpdateElement && crowdMonitor.lastUpdate) {
    lastUpdateElement.textContent = `最終更新: ${crowdMonitor.lastUpdate.toLocaleTimeString()}`;
  }
}

// 定期的に最終更新時刻を更新
setInterval(updateLastUpdateDisplay, 1000);
