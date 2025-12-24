import "./styles.css";
import React, { useState, useEffect, useRef } from "react";
import emailjs from "emailjs-com";
import {
  Calculator,
  Check,
  Upload,
  Phone,
  FileText,
  Truck,
  Hammer,
  Calendar,
  X,
  Info,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// ========== 【設定エリア】 ==========
const EMAILJS_SERVICE_ID = "service_n8razlr";
const EMAILJS_TEMPLATE_ID = "template_23fev0r";
const EMAILJS_PUBLIC_KEY = "AeFIx1s1ZlwZ2PKAw";
// ====================================

// スタイル補助関数
const formatPrice = (price) =>
  new Intl.NumberFormat("ja-JP", { style: "currency", currency: "JPY" }).format(
    price
  );

export default function App() {
  // --- State ---
  const [size, setSize] = useState({ w: 900, h: 600 });
  const [qty, setQty] = useState(1);
  const [design, setDesign] = useState("入稿データがある");
  const [frame, setFrame] = useState("不要");
  const [light, setLight] = useState("不要");
  const [install, setInstall] = useState("不要");
  const [finishes, setFinishes] = useState({
    hole: false,
    corner: false,
    wrap: false,
  });

  const [price, setPrice] = useState({ net: 0, tax: 0, total: 0 });
  const [installFeeInfo, setInstallFeeInfo] = useState("");
  const [deliveryInfo, setDeliveryInfo] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [showExplanation, setShowExplanation] = useState(null);
  const [showFlowModal, setShowFlowModal] = useState(false);

  const [attachedFile, setAttachedFile] = useState(null);
  const fileInputRef = useRef(null);

  const [formData, setFormData] = useState({
    user_name: "",
    company_name: "",
    user_email: "",
    user_tel: "",
    delivery_date: "最短納期を希望",
    remarks: "",
    file_url: "",
  });

  // --- 計算 & 納期ロジック ---
  useEffect(() => {
    let net = 0;
    const area = (size.w * size.h) / 1000000;
    let unitPrice = 12000;
    if (area < 0.5) unitPrice = 18000;
    else if (area < 1.0) unitPrice = 15000;
    net += Math.round(area * unitPrice);

    if (design === "デザインを弊社に依頼") net += 10000;
    if (frame === "アルミ枠付き") {
      const perimeter = ((size.w + size.h) * 2) / 1000;
      net += Math.round(perimeter * 1500);
    }

    if (install === "製作＋施工") {
      if (size.w > 1000) {
        net += 60000;
        setInstallFeeInfo("横幅1m超：2名作業 (¥60,000)");
      } else {
        net += 30000;
        setInstallFeeInfo("横幅1m以下：1名作業 (¥30,000)");
      }
    } else {
      setInstallFeeInfo("");
    }

    if (light === "アームライト式") net += 20000;
    if (light === "アドビュー") net += 30000;

    if (finishes.hole) net += 600;
    if (finishes.corner) net += 1000;
    if (finishes.wrap) net += 2000;

    net = net * qty;
    const tax = Math.round(net * 0.1);
    setPrice({ net, tax, total: net + tax });

    // 納期メッセージの生成
    let dMsg = [];
    if (design === "デザインを弊社に依頼") {
      dMsg.push(
        "【デザイン作成】ご注文後、初稿提出まで約3営業日 → 校了後、製作開始"
      );
    }
    if (install === "製作＋施工") {
      dMsg.push("【施工】製作完了後、数日〜2週間程度で調整・実施");
    } else {
      dMsg.push("【発送】通常 5〜7営業日で出荷");
    }
    setDeliveryInfo(dMsg.join("\n"));
  }, [size, qty, design, frame, light, install, finishes]);

  // --- ファイル操作 ---
  const handleFileClick = () => fileInputRef.current.click();
  const handleFileChange = (e) =>
    e.target.files.length > 0 && setAttachedFile(e.target.files[0]);
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setAttachedFile(e.dataTransfer.files[0]);
    }
  };

  // --- 送信 ---
  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    let fileInfoText = attachedFile
      ? `\n※ファイル選択あり: ${attachedFile.name}\n(別途送付依頼等のご連絡をさせていただきます)`
      : "";

    const templateParams = {
      user_name: formData.user_name,
      company_name: formData.company_name,
      user_email: formData.user_email,
      user_tel: formData.user_tel,
      width: size.w,
      height: size.h,
      quantity: qty,
      design_type: design,
      frame_type: frame,
      light_type: light,
      install_type: install,
      install_width_type: installFeeInfo,
      finish_options: Object.keys(finishes)
        .filter((k) => finishes[k])
        .join(", "),
      total_price: formatPrice(price.total),
      delivery_date: formData.delivery_date,
      remarks: formData.remarks + fileInfoText,
      file_url: formData.file_url,
    };

    emailjs
      .send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert("依頼を送信しました！");
          setIsModalOpen(false);
          setIsSending(false);
          setAttachedFile(null);
        },
        (err) => {
          console.error(err);
          alert("送信失敗");
          setIsSending(false);
        }
      );
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-32 lg:pb-0">
      <header className="bg-white border-b sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="font-bold text-xl text-blue-900 flex items-center gap-2">
            <div className="bg-blue-600 text-white p-1 rounded">看</div>
            プレート看板専門店
          </div>
          <a
            href="tel:052-265-7603"
            className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full font-bold transition"
          >
            <Phone size={18} />{" "}
            <span className="hidden sm:inline">052-265-7603</span>
          </a>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8 items-start relative">
        {/* 左カラム：入力フォーム */}
        <div className="flex-1 w-full space-y-8">
          <div className="flex items-center gap-3 mb-2 border-b pb-4">
            <Calculator className="text-orange-500" size={32} />
            <div>
              <h2 className="text-2xl font-bold text-slate-800">
                自動見積もり
              </h2>
              <p className="text-sm text-slate-500">
                条件を選択すると、その場で金額がわかります。
              </p>
            </div>
          </div>

          {/* 1. サイズ */}
          <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Badge num="1" /> サイズと枚数
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="text-sm text-slate-500 block mb-1">
                  横幅 (mm)
                </label>
                <input
                  type="number"
                  value={size.w}
                  onChange={(e) =>
                    setSize({ ...size, w: Number(e.target.value) })
                  }
                  className="w-full p-3 border rounded-lg text-xl font-bold"
                />
              </div>
              <div>
                <label className="text-sm text-slate-500 block mb-1">
                  高さ (mm)
                </label>
                <input
                  type="number"
                  value={size.h}
                  onChange={(e) =>
                    setSize({ ...size, h: Number(e.target.value) })
                  }
                  className="w-full p-3 border rounded-lg text-xl font-bold"
                />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <label className="text-sm text-slate-500">枚数</label>
              <input
                type="number"
                min="1"
                value={qty}
                onChange={(e) => setQty(Number(e.target.value))}
                className="w-24 p-2 border rounded text-center font-bold"
              />
            </div>
          </section>

          {/* 2. デザイン */}
          <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Badge num="2" /> デザインデータ
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <SelectionCard
                selected={design === "入稿データがある"}
                onClick={() => setDesign("入稿データがある")}
                title="入稿データがある"
                desc="AI / PDF / JPGなど"
                icon={Upload}
              />
              <SelectionCard
                selected={design === "デザインを弊社に依頼"}
                onClick={() => setDesign("デザインを弊社に依頼")}
                title="デザインを依頼"
                desc="手書きメモから作成"
                icon={FileText}
                badge="+¥10,000"
              />
            </div>
            {/* デザイン依頼時の補足メッセージ */}
            {design === "デザインを弊社に依頼" && (
              <div className="mt-4 p-4 bg-yellow-50 text-yellow-800 rounded-lg text-sm border border-yellow-200 flex gap-2">
                <Info className="shrink-0" size={20} />
                <div>
                  <p className="font-bold">デザイン作成の流れ</p>
                  <p>
                    ご注文後、約3営業日で初稿をお送りします。校了（OK）をいただいた後に製作へ進みます。
                  </p>
                </div>
              </div>
            )}
          </section>

          {/* 3. 仕様 */}
          <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Badge num="3" /> 看板の仕様
            </h3>
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <label className="font-bold text-sm text-slate-700">
                  フレーム
                </label>
                <button
                  onClick={() => setShowExplanation("frame")}
                  className="text-blue-500 text-xs underline"
                >
                  フレームについて？
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <SelectionCard
                  selected={frame === "不要"}
                  onClick={() => setFrame("不要")}
                  title="不要"
                />
                <SelectionCard
                  selected={frame === "アルミ枠付き"}
                  onClick={() => setFrame("アルミ枠付き")}
                  title="アルミ枠付き"
                  badge="推奨"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <label className="font-bold text-sm text-slate-700">照明</label>
                <button
                  onClick={() => setShowExplanation("light")}
                  className="text-blue-500 text-xs underline"
                >
                  照明について？
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <SelectionCard
                  selected={light === "不要"}
                  onClick={() => setLight("不要")}
                  title="不要"
                />
                <SelectionCard
                  selected={light === "アームライト式"}
                  onClick={() => setLight("アームライト式")}
                  title="アームライト"
                  badge="+¥20,000"
                />
                <SelectionCard
                  selected={light === "アドビュー"}
                  onClick={() => setLight("アドビュー")}
                  title="アドビュー"
                  badge="+¥30,000"
                />
                <SelectionCard
                  selected={light === "提案希望"}
                  onClick={() => setLight("提案希望")}
                  title="提案してほしい"
                />
              </div>
            </div>
          </section>

          {/* 4. 施工・仕上げ */}
          <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Badge num="4" /> 取付・仕上げ
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <SelectionCard
                selected={install === "不要"}
                onClick={() => setInstall("不要")}
                title="製作のみ (発送)"
                desc="商品をお届け"
                icon={Truck}
              />
              <SelectionCard
                selected={install === "製作＋施工"}
                onClick={() => setInstall("製作＋施工")}
                title="製作 ＋ 施工"
                desc="プロが取付まで対応"
                icon={Hammer}
                badge="おすすめ"
              />
            </div>

            <div className="mb-4">
              <label className="text-sm font-bold text-slate-700 block mb-2">
                仕上げオプション
              </label>
              <div className="flex flex-wrap gap-3">
                <TogglePill
                  active={finishes.hole}
                  onClick={() =>
                    setFinishes({ ...finishes, hole: !finishes.hole })
                  }
                  label="穴あけ (4ヶ所 +¥600)"
                />
                <TogglePill
                  active={finishes.corner}
                  onClick={() =>
                    setFinishes({ ...finishes, corner: !finishes.corner })
                  }
                  label="角R加工"
                />
                <TogglePill
                  active={finishes.wrap}
                  onClick={() =>
                    setFinishes({ ...finishes, wrap: !finishes.wrap })
                  }
                  label="シート巻き込み"
                />
              </div>
            </div>

            <div className="mt-4 pt-4 border-t text-right">
              <button
                onClick={() => setShowFlowModal(true)}
                className="text-blue-600 text-sm font-bold flex items-center justify-end gap-1"
              >
                <Calendar size={14} /> 詳しい納期・施工の流れを見る
              </button>
            </div>
          </section>
        </div>

        {/* 右カラム：Sticky 見積もり結果 (修正版) */}
        <div className="hidden lg:block w-80 shrink-0 sticky top-24 self-start">
          <div className="bg-white p-6 rounded-xl shadow-lg border border-blue-100">
            <h4 className="font-bold text-slate-500 mb-4 text-sm">
              概算見積もり結果
            </h4>
            <div className="space-y-3 text-sm text-slate-700 mb-6 border-b pb-4 border-dashed">
              <div className="flex justify-between">
                <span>サイズ</span>
                <span className="font-mono">
                  W{size.w} x H{size.h}
                </span>
              </div>
              <div className="flex justify-between">
                <span>枚数</span>
                <span className="font-mono">{qty}枚</span>
              </div>
              {design.includes("依頼") && (
                <div className="flex justify-between text-blue-600">
                  <span>デザイン費</span>
                  <span>+¥10,000</span>
                </div>
              )}
              {frame.includes("あり") && (
                <div className="flex justify-between text-blue-600">
                  <span>フレーム</span>
                  <span>あり</span>
                </div>
              )}
              {light !== "不要" && (
                <div className="flex justify-between text-blue-600">
                  <span>照明</span>
                  <span>{light}</span>
                </div>
              )}
              {install.includes("施工") && (
                <div className="flex flex-col text-right text-blue-600">
                  <div className="flex justify-between">
                    <span>施工費</span>
                    <span>あり</span>
                  </div>
                  <span className="text-xs text-slate-400">
                    {installFeeInfo}
                  </span>
                </div>
              )}
              {finishes.hole && (
                <div className="flex justify-between text-blue-600">
                  <span>穴あけ</span>
                  <span>+¥600</span>
                </div>
              )}
            </div>

            <div className="mb-1 text-right">
              <span className="text-3xl font-bold text-blue-900">
                {formatPrice(price.total)}
              </span>
              <span className="text-xs text-slate-400 ml-1">(税込)</span>
            </div>
            <div className="text-right text-sm text-slate-500 mb-6">
              {formatPrice(price.net)} (税別)
            </div>

            {/* 納期目安エリア（動的表示） */}
            <div className="bg-slate-50 p-3 rounded mb-4 text-xs text-slate-600 leading-relaxed border border-slate-200">
              <p className="font-bold mb-1 text-slate-800">【納期目安】</p>
              <p className="whitespace-pre-wrap">{deliveryInfo}</p>
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-lg shadow-md transition transform hover:scale-105"
            >
              この内容で見積もり・注文
            </button>
            <p className="text-[10px] text-slate-400 text-center mt-2">
              ※正式な金額はフォーム送信後に確定します
            </p>
          </div>
        </div>
      </main>

      {/* スマホ用固定フッター */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-50 flex items-center justify-between">
        <div>
          <div className="text-xs text-slate-500">概算見積もり(税込)</div>
          <div className="text-2xl font-bold text-blue-900">
            {formatPrice(price.total)}
          </div>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-orange-500 text-white font-bold px-6 py-3 rounded-lg shadow"
        >
          注文へ進む
        </button>
      </div>

      {/* --- モーダル: 注文フォーム --- */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto flex flex-col"
            >
              <div className="p-6 border-b flex justify-between items-center sticky top-0 bg-white z-10">
                <h2 className="text-2xl font-bold text-blue-900">
                  無料見積もり依頼
                </h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-slate-400 hover:text-slate-600"
                >
                  <X />
                </button>
              </div>
              <div className="p-6 space-y-8">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <h3 className="font-bold text-blue-800 mb-2">ご依頼内容</h3>
                  <ul className="text-sm space-y-1 text-blue-900">
                    <li>
                      サイズ: W{size.w}mm x H{size.h}mm / {qty}枚
                    </li>
                    <li>
                      概算金額:{" "}
                      <span className="font-bold text-lg">
                        {formatPrice(price.total)}
                      </span>{" "}
                      (税込)
                    </li>
                    <li className="pt-2 border-t border-blue-200 mt-2 text-xs opacity-80 whitespace-pre-wrap">
                      {deliveryInfo}
                    </li>
                  </ul>
                </div>
                <form onSubmit={sendEmail} className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="font-bold border-b pb-2">お客様情報</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        label="お名前"
                        required
                        value={formData.user_name}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            user_name: e.target.value,
                          })
                        }
                      />
                      <Input
                        label="会社名"
                        value={formData.company_name}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            company_name: e.target.value,
                          })
                        }
                      />
                      <Input
                        label="メールアドレス"
                        type="email"
                        required
                        value={formData.user_email}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            user_email: e.target.value,
                          })
                        }
                      />
                      <Input
                        label="電話番号"
                        type="tel"
                        required
                        value={formData.user_tel}
                        onChange={(e) =>
                          setFormData({ ...formData, user_tel: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-bold border-b pb-2">
                      データ入稿・その他
                    </h3>
                    <div
                      onDragOver={handleDragOver}
                      onDrop={handleDrop}
                      onClick={handleFileClick}
                      className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer relative"
                    >
                      <input
                        type="file"
                        ref={fileInputRef}
                        className="hidden"
                        onChange={handleFileChange}
                      />
                      {attachedFile ? (
                        <div className="text-blue-600 font-bold flex flex-col items-center animate-pulse">
                          <FileText size={32} className="mb-2" />
                          {attachedFile.name}
                          <span className="text-xs text-slate-400 mt-1 font-normal">
                            (ファイルを選択中)
                          </span>
                        </div>
                      ) : (
                        <>
                          <Upload className="mx-auto text-slate-400 mb-2" />
                          <p className="text-sm text-slate-600">
                            ここにファイルをドロップ、またはクリックして選択
                          </p>
                          <p className="text-xs text-slate-400 mt-2">
                            ※100MBを超える場合はギガファイル便などのURLを下記に入力してください
                          </p>
                        </>
                      )}
                    </div>
                    <Input
                      label="ギガファイル便などのURL (任意)"
                      placeholder="https://..."
                      value={formData.file_url}
                      onChange={(e) =>
                        setFormData({ ...formData, file_url: e.target.value })
                      }
                    />
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-1">
                        その他ご要望
                      </label>
                      <textarea
                        className="w-full border rounded-lg p-3 h-24"
                        placeholder="施工希望時期や、ご質問などあればご記入ください"
                        value={formData.remarks}
                        onChange={(e) =>
                          setFormData({ ...formData, remarks: e.target.value })
                        }
                      ></textarea>
                    </div>
                  </div>
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSending}
                      className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-slate-300 text-white font-bold py-4 rounded-lg shadow-lg text-lg transition"
                    >
                      {isSending
                        ? "送信中..."
                        : "上記の内容で無料見積もりを依頼する"}
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* --- 説明ポップアップ (画像ダミー化) --- */}
      {showExplanation && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-black/20"
          onClick={() => setShowExplanation(null)}
        >
          <div
            className="bg-white p-6 rounded-xl shadow-xl max-w-sm"
            onClick={(e) => e.stopPropagation()}
          >
            <h4 className="font-bold text-lg mb-2">
              {showExplanation === "frame"
                ? "フレームについて"
                : "照明について"}
            </h4>
            {/* ダミー画像エリア */}
            <div className="w-full h-48 bg-slate-200 rounded mb-2 flex flex-col items-center justify-center text-slate-500 border-2 border-dashed border-slate-300">
              <div className="font-bold">
                {showExplanation === "frame" ? "フレーム画像" : "照明画像"}
              </div>
              <div className="text-xs mt-1">※ここに写真を配置</div>
            </div>
            <p className="text-sm text-slate-600">
              {showExplanation === "frame"
                ? "アルミ枠をつけることで看板の反りを防ぎ、見た目の高級感が増します。長期間設置する場合に推奨されます。"
                : "アームライトは壁面から突き出すタイプ、アドビューは看板上部につくスリムなタイプです。"}
            </p>
            <button
              onClick={() => setShowExplanation(null)}
              className="mt-4 w-full bg-slate-100 py-2 rounded font-bold text-sm"
            >
              閉じる
            </button>
          </div>
        </div>
      )}

      {/* --- 納期フローモーダル --- */}
      <AnimatePresence>
        {showFlowModal && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 relative"
            >
              <button
                onClick={() => setShowFlowModal(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
              >
                <X />
              </button>
              <h2 className="text-2xl font-bold text-blue-900 mb-6">
                納期・施工の流れ
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className="flex items-center gap-2 font-bold text-lg mb-4 text-slate-800">
                    <Truck className="text-blue-500" /> 製作のみ（商品発送）
                  </h3>
                  <div className="bg-slate-50 p-4 rounded-lg space-y-3">
                    <div className="flex gap-4 items-center">
                      <Badge num="1" />
                      <div>
                        <p className="font-bold">ご注文・ご入金</p>
                      </div>
                    </div>
                    <div className="h-4 border-l-2 border-slate-200 ml-4"></div>
                    <div className="flex gap-4 items-center">
                      <Badge num="2" />
                      <div>
                        <p className="font-bold">製作・発送</p>
                        <p className="text-sm text-slate-500">
                          通常 5〜7営業日
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="flex items-center gap-2 font-bold text-lg mb-4 text-slate-800">
                    <Hammer className="text-orange-500" /> 施工まで依頼
                  </h3>
                  <div className="bg-orange-50 p-4 rounded-lg space-y-3 border border-orange-100">
                    <p className="text-sm text-orange-800 mb-4 bg-orange-100 p-2 rounded">
                      ※現地調査を経て正式な日程が決まります。
                    </p>
                    <StepRow step="1" title="概算見積もり・ご了承" />
                    <StepRow step="2" title="現地調査" desc="日程調整・実施" />
                    <StepRow step="3" title="再見積もり" desc="最終金額確定" />
                    <StepRow step="4" title="ご注文・ご入金" />
                    <StepRow step="5" title="製作・施工日調整" />
                    <StepRow
                      step="6"
                      title="施工実施"
                      desc="製作完了後、数日〜2週間程度"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-6 text-center">
                <button
                  onClick={() => setShowFlowModal(false)}
                  className="bg-slate-200 hover:bg-slate-300 text-slate-800 px-6 py-2 rounded-lg font-bold"
                >
                  閉じる
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

// --- コンポーネント群 ---
function SelectionCard({ selected, onClick, title, desc, icon: Icon, badge }) {
  return (
    <div
      onClick={onClick}
      className={`relative cursor-pointer p-4 rounded-lg transition-all flex flex-col items-center text-center gap-2 h-full ${
        selected
          ? "border-4 border-blue-600 bg-blue-50"
          : "border-2 border-slate-200 hover:border-blue-300"
      }`}
    >
      {badge && (
        <span className="absolute -top-3 -right-3 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow">
          {badge}
        </span>
      )}
      {Icon && (
        <Icon
          className={selected ? "text-blue-600" : "text-slate-400"}
          size={28}
        />
      )}
      <div>
        <div
          className={`font-bold ${
            selected ? "text-blue-900" : "text-slate-700"
          }`}
        >
          {title}
        </div>
        {desc && <div className="text-xs text-slate-500">{desc}</div>}
      </div>
      {selected && (
        <div className="absolute top-2 left-2 text-blue-600">
          <Check size={16} />
        </div>
      )}
    </div>
  );
}
function TogglePill({ active, onClick, label }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-bold border transition-colors ${
        active
          ? "bg-blue-600 text-white border-blue-600"
          : "bg-white text-slate-600 border-slate-300 hover:bg-slate-50"
      }`}
    >
      {label}
    </button>
  );
}
function Input({ label, ...props }) {
  return (
    <div>
      <label className="block text-sm font-bold text-slate-700 mb-1">
        {label}
      </label>
      <input
        className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
        {...props}
      />
    </div>
  );
}
function Badge({ num }) {
  return (
    <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold shrink-0">
      {num}
    </div>
  );
}
function StepRow({ step, title, desc }) {
  return (
    <div className="flex gap-4 items-center relative">
      <div className="w-8 h-8 rounded-full bg-white border-2 border-orange-200 text-orange-600 flex items-center justify-center font-bold text-sm z-10">
        {step}
      </div>
      {step !== "6" && (
        <div className="absolute left-4 top-8 w-[2px] h-6 bg-orange-100 -z-0"></div>
      )}
      <div>
        <p className="font-bold text-slate-800">{title}</p>
        {desc && <p className="text-xs text-slate-500">{desc}</p>}
      </div>
    </div>
  );
}
