"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Github, Download } from "lucide-react"
import Image from "next/image"

export default function Component() {
  return (
    <div className="min-h-screen bg-white py-8 px-4 print:p-0">
      <div className="max-w-3xl mx-auto space-y-6 print:space-y-4">
        {/* ヘッダー */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 pb-4 border-b print:pb-2">
          <div className="w-[120px] h-[120px] overflow-hidden flex items-center justify-center">
            <Image
              src="/images/profile.png"
              alt="プロフィール写真"
              width={120}
              height={120}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="text-center md:text-left flex-1">
            <h1 className="text-3xl font-bold text-gray-900 mb-1">厳恒</h1>
            <p className="text-xl text-gray-600 mb-2">シニアAndroidエンジニア</p>
            <p className="text-sm text-gray-500 mb-3 max-w-lg">
              15年以上のソフトウェアエンジニア経験を持ち、直近10年間は主にAndroidアプリの開発に携わってきました。
              将来的にはフルスタックエンジニアとして、自分自身のプロダクト開発やサービス立ち上げに挑戦したいと考えています。
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-2">
              <Badge variant="outline" className="bg-gray-50">
                Android
              </Badge>
              <Badge variant="outline" className="bg-gray-50">
                Kotlin
              </Badge>
              <Badge variant="outline" className="bg-gray-50">
                Java
              </Badge>
              <Badge variant="outline" className="bg-gray-50">
                Rails
              </Badge>
            </div>
          </div>
          <div className="hidden print:block absolute top-4 right-4">
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Download className="h-3 w-3" />
              印刷
            </Button>
          </div>
        </div>

        {/* 連絡先情報 */}
        <div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm text-gray-600 print:text-xs">
          <div className="flex items-center gap-1">
            <Mail className="h-4 w-4 text-gray-400" />
            <span>genmanabu@gmail.com</span>
          </div>
          <div className="flex items-center gap-1">
            <Phone className="h-4 w-4 text-gray-400" />
            <span>080-1108-9821</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4 text-gray-400" />
            <span>東京都江戸川区</span>
          </div>
          <div className="flex items-center gap-1">
            <Github className="h-4 w-4 text-gray-400" />
            <a
              href="https://github.com/YanHengGo"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-blue-600"
            >
              github.com/YanHengGo
            </a>
          </div>
        </div>

        {/* 職歴 */}
        <section className="print:mt-2">
          <h2 className="text-lg font-bold text-gray-900 border-b pb-1 mb-3 print:text-base">職歴</h2>
          <div className="space-y-4 print:space-y-3">
            <div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-800 print:text-sm">シニアAndroidエンジニア</h3>
                  <p className="text-gray-600 text-sm print:text-xs">K社（グルメアプリ）</p>
                </div>
                <span className="text-sm text-gray-500 print:text-xs">2019年 - 現在</span>
              </div>
              <p className="text-sm text-gray-700 mt-1 print:text-xs">
                大規模なAndroidアプリケーションの設計・開発を担当。
                Kotlin、Javaを用いた機能実装やユーザー体験の向上に取り組む。
                API設計やRailsコマンドによるテストデータ作成、Firebaseを用いたクラッシュ分析も担当。
                また、AIツール（Cursor、GitHub Copilot、Dify）を活用し、開発効率と品質の継続的な改善にも貢献。
              </p>
            </div>
            <div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-800 print:text-sm">Androidエンジニア</h3>
                  <p className="text-gray-600 text-sm print:text-xs">I社</p>
                </div>
                <span className="text-sm text-gray-500 print:text-xs">2014年 - 2019年</span>
              </div>
              <p className="text-sm text-gray-700 mt-1 print:text-xs">
                メーカープリインストール向けのカメラアプリ、歩数計アプリ、OCR画像認識エンジンなど、複数のAndroidアプリケーションの開発に従事。
                ネイティブ開発からクロスプラットフォーム開発まで幅広い技術領域を担当し、チームリーダーとして若手エンジニアの育成や技術支援も行う。
              </p>
            </div>
          </div>
        </section>

        {/* スキル */}
        <section className="print:mt-2">
          <h2 className="text-lg font-bold text-gray-900 border-b pb-1 mb-3 print:text-base">技術スキル</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 print:gap-2 print:text-xs">
            <div>
              <h3 className="font-semibold text-gray-800 mb-1 print:text-sm">モバイル開発</h3>
              <div className="flex flex-wrap gap-1">
                <Badge variant="secondary" className="bg-gray-100 text-gray-800">
                  Android
                </Badge>
                <Badge variant="secondary" className="bg-gray-100 text-gray-800">
                  Kotlin
                </Badge>
                <Badge variant="secondary" className="bg-gray-100 text-gray-800">
                  Java
                </Badge>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-1 print:text-sm">サーバーAPI開発</h3>
              <div className="flex flex-wrap gap-1">
                <Badge variant="secondary" className="bg-gray-100 text-gray-800">
                  Rails
                </Badge>
                <Badge variant="secondary" className="bg-gray-100 text-gray-800">
                  Ruby
                </Badge>
                <Badge variant="secondary" className="bg-gray-100 text-gray-800">
                  yml
                </Badge>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-1 print:text-sm">システム開発</h3>
              <div className="flex flex-wrap gap-1">
                <Badge variant="secondary" className="bg-gray-100 text-gray-800">
                  C/C++
                </Badge>
                <Badge variant="secondary" className="bg-gray-100 text-gray-800">
                  Python
                </Badge>
                <Badge variant="secondary" className="bg-gray-100 text-gray-800">
                  Firebase
                </Badge>
                <Badge variant="secondary" className="bg-gray-100 text-gray-800">
                  Rails
                </Badge>
                <Badge variant="secondary" className="bg-gray-100 text-gray-800">
                  Ruby
                </Badge>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-1 print:text-sm">ツール・その他</h3>
              <div className="flex flex-wrap gap-1">
                <Badge variant="secondary" className="bg-gray-100 text-gray-800">
                  Firebase
                </Badge>
                <Badge variant="secondary" className="bg-gray-100 text-gray-800">
                  Figma
                </Badge>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-1 print:text-sm">AIツール</h3>
              <div className="flex flex-wrap gap-1">
                <Badge variant="secondary" className="bg-gray-100 text-gray-800">
                  Cursor
                </Badge>
                <Badge variant="secondary" className="bg-gray-100 text-gray-800">
                  GitHub Copilot
                </Badge>
                <Badge variant="secondary" className="bg-gray-100 text-gray-800">
                  Dify
                </Badge>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-1 print:text-sm">言語</h3>
              <div className="flex flex-wrap gap-1">
                <Badge variant="secondary" className="bg-gray-100 text-gray-800">
                  中国語（ネイティブ）
                </Badge>
                <Badge variant="secondary" className="bg-gray-100 text-gray-800">
                  日本語（ネイティブ）
                </Badge>
                <Badge variant="secondary" className="bg-gray-100 text-gray-800">
                  英語（ビジネスレベル）
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* 趣味・興味 */}
        <section className="print:mt-2">
          <h2 className="text-lg font-bold text-gray-900 border-b pb-1 mb-3 print:text-base">趣味・興味</h2>
          <div className="flex flex-wrap gap-2 print:gap-1">
            <Badge variant="outline">キャンプ</Badge>
            <Badge variant="outline">子育て</Badge>
            <Badge variant="outline">旅行</Badge>
            <Badge variant="outline">DIY</Badge>
            <Badge variant="outline">技術書読書</Badge>
          </div>
        </section>

        {/* 自己PR */}
        <section className="print:mt-2">
          <h2 className="text-lg font-bold text-gray-900 border-b pb-1 mb-3 print:text-base">自己PR</h2>
          <p className="text-sm text-gray-700 print:text-xs">
            C/C++、Javaをはじめとした多言語開発経験があり、現在はAIツール（Cursor、GitHub
            Copilot、Dify）を活用した効率的な開発にも取り組んでいます。
            モバイルアプリケーション開発の専門知識と経験を活かし、ユーザー体験を重視した高品質なアプリケーション開発に貢献できます。
            また、新しい技術への探究心が強く、常に最新の開発手法やツールを学び続けています。
          </p>
        </section>

        {/* 印刷ボタン（画面表示時のみ） */}
        <div className="flex justify-center mt-8 print:hidden">
          <Button onClick={() => window.print()} className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            印刷する
          </Button>
        </div>
      </div>
    </div>
  )
}
