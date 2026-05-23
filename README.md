# Machi

甜點專賣網站

## GitHub專案下載到本地端
從GitHub複製連結 https://github.com/ling0215/Machi.git
vscode 開啟終端機ctrl+j →輸入 git clone + 連結

## 開始使用

在開始使用這個專案之前，你需要先安裝必要的套件。
請在前端 `next` 和後端`express` 的資料夾路徑下各自執行以下命令：

npm i

## 資料庫建置

1.開啟XAMPP 點選"star"啟動Apache和MySQL
2.點選XAMPP中的MySQL右邊第二個按鈕"Admid"，可直接開啟網頁phpMyAdmin
3.開啟phpMyAdmin，在本機的 mysql 建立一個 machi_big_db 資料庫
4.匯入 Machi 資料夾中 machi_big_db.sql 檔案
5.新增權限帳號：admin 密碼：12345，全域權限√全選
machi資料庫檔案: https://drive.google.com/file/d/1Rj1VHcPfk_M8fyCY0QuCLB061_gi_Nwg/view?usp=drive_link

## Github提交流程

可參考影片:
https://youtu.be/FKXRiAiQFiY?si=g7pFCTQxO1oaTWm0

## 啟動專案網頁
GitHub載入專案資料夾：說明如下Notion筆記
https://www.notion.so/Machi-31503e246e19406c8e3550e0713087eb?source=copy_link

本地端運行：
1.開啟XAMPP(MySQL)橘色圖示，在mac顯示為manager-osx
  mac開啟APP後，點選Manage Servers，並『啟動Apache和MySQL』點選"star"
  (MySQL資料庫設定如上)
2.使用VScode開啟Machi資料夾，個別對以下前後端資料夾右鍵點選『在整合式終端機開啟』
  machi-next前端資料夾
  machi-express後端資料夾
3.個別在前後端終端機畫面輸入『npm run dev』
  再點選前端運行後連結『 http://localhost:3000』
  即可運行Machi專案網頁。
  (記得要先啟動MySQL資料庫，再啟動前後端)
4.專案網頁會員登入，可查看收藏清單
  在會員登入畫面輸入以下預設帳密即可登入。
  帳號：12345@gmail.com
  密碼：12345
5.關閉專案資料夾及資料庫
（使用完畢，務必關閉資料庫，否則可能弄壞資料庫，就要再依上述方法重新建置資料庫）
  (1)至VScode中，個別對前後端資料夾點選『ctrl+C』，終端機會跳出資料夾路徑，即成功關閉前後端網頁。
  (2)再至XAMPP關閉資料庫，『Apache和MySQL』點選"stop"。
6.開啟MySQL資料庫設定介面
  方法一：瀏覽器輸入『http://localhost/phpmyadmin/』
  方法二：開啟XAMPP程式，點選『Go To Application』開啟網頁後，點選上方選單『phpMyAdmin』即可進入資料庫中(mac版本介面)
7.版本紀錄GitHub
  https://github.com/
  
# PersonalBranding
