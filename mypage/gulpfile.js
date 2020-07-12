// gulpプラグイン読み込み
const { src, dest, watch } = require("gulp");
// sassをコンパイルするプラグインの読み込み
const sass = require("gulp-sass");

// sassをコンパイルするタスク
const compileSass = () =>
    // style.scssファイルを取得
    src("src/scss/*")
        // sassコンパイル
        .pipe(
            // コンパイル方法
            sass({
                outputStyle: "expanded"
            })
        )
        // cssファイルの保存先
        .pipe(dest("dist/css"));

// 画像を圧縮
const minImage = () =>
    // 画像のマッチ
    src("src/img/*")
        .pipe(
            imagemin()
        )
        .pipe(dest("dist/img"))


// sassファイルの監視
const watchSassFiles = () => watch("src/scss/*", compileSass);

// コマンド実行の際に動かすもの
exports.default = watchSassFiles;