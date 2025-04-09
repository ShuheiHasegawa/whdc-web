export default async function handler(req, res) {
  try {
    // EIR-Partsのデータをフェッチするためのプロキシリクエスト
    // コールバック関数を解析するため、テキストとして取得
    const response = await fetch(
      "https://ssl4.eir-parts.net/V4Public/EIR/3823/ja/announcement/announcement_7.js"
    );

    if (!response.ok) {
      throw new Error("外部APIからのデータ取得に失敗しました");
    }

    const text = await response.text();

    // JSONP形式から純粋なJSONを抽出
    // 形式: eolparts_announcement_7({ ... JSON データ ... })
    const jsonMatch = text.match(/eolparts_announcement_7\((.*)\)/s);

    if (!jsonMatch || !jsonMatch[1]) {
      throw new Error("データの解析に失敗しました");
    }

    // JSONデータを抽出してパース
    const jsonData = JSON.parse(jsonMatch[1]);

    // 成功レスポンス
    res.status(200).json(jsonData);
  } catch (error) {
    console.error("API Error:", error);
    res
      .status(500)
      .json({ error: error.message || "データの取得に失敗しました" });
  }
}
