-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2024-05-03 11:45:09
-- 伺服器版本： 10.4.32-MariaDB
-- PHP 版本： 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `machi_big_db`
--

-- --------------------------------------------------------

--
-- 資料表結構 `article`
--

CREATE TABLE `article` (
  `article_id` int(6) NOT NULL,
  `user_id_fk` int(6) NOT NULL,
  `article_title` varchar(50) NOT NULL,
  `article_content` varchar(6000) NOT NULL,
  `article_createtime` datetime NOT NULL DEFAULT current_timestamp(),
  `article_edittime` datetime NOT NULL DEFAULT current_timestamp(),
  `article_status` tinyint(1) NOT NULL DEFAULT 1,
  `article_category` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `article`
--

INSERT INTO `article` (`article_id`, `user_id_fk`, `article_title`, `article_content`, `article_createtime`, `article_edittime`, `article_status`, `article_category`) VALUES
(1, 1, 'AA', '<p>AAAA</p>', '2024-05-02 06:25:58', '2024-05-02 06:25:58', 1, 'AAA'),
(2, 3, '561', '<p>56156</p><p>56156</p><figure class=\"image\"><img style=\"aspect-ratio:4032/3024;\" src=\"/images/blog/article/535bd8b4-eb86-4c7d-9494-e64e8778e19f.jpg\" width=\"4032\" height=\"3024\"></figure><p>56165</p>', '2024-05-03 01:59:11', '2024-05-03 01:59:11', 1, 'AAA');

-- --------------------------------------------------------

--
-- 資料表結構 `article_comment`
--

CREATE TABLE `article_comment` (
  `article_comment_id` int(6) NOT NULL,
  `article_id_fk` int(6) NOT NULL,
  `user_id_fk` int(6) NOT NULL,
  `article_comment_content` varchar(600) NOT NULL,
  `article_comment_createtime` datetime NOT NULL DEFAULT current_timestamp(),
  `article_comment_status` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `article_favorite`
--

CREATE TABLE `article_favorite` (
  `article_favorite_id` int(6) NOT NULL,
  `user_id_fk` int(6) NOT NULL,
  `article_id_fk` int(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `article_image`
--

CREATE TABLE `article_image` (
  `article_image_id` int(6) NOT NULL,
  `article_id_fk` int(6) NOT NULL,
  `article_image_filename` varchar(600) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `cart_item`
--

CREATE TABLE `cart_item` (
  `cart_item_id` int(6) NOT NULL,
  `user_id_fk` int(6) NOT NULL,
  `product_id_fk` int(6) DEFAULT NULL,
  `prodcut_name` varchar(50) DEFAULT NULL,
  `product_subtitle` varchar(50) DEFAULT NULL,
  `product_price` int(6) DEFAULT NULL,
  `product_count` int(6) DEFAULT NULL,
  `product_total` int(6) DEFAULT NULL,
  `class_id_fk` int(6) DEFAULT NULL,
  `class_name` varchar(50) DEFAULT NULL,
  `class_price` int(6) DEFAULT NULL,
  `class_count` int(6) DEFAULT NULL,
  `class_total` int(6) DEFAULT NULL,
  `custom_size` int(6) DEFAULT NULL,
  `custom_layer` int(6) DEFAULT NULL,
  `custom_flavor` int(6) DEFAULT NULL,
  `custom_decor` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `custom_price` int(6) DEFAULT NULL,
  `custom_count` int(6) DEFAULT NULL,
  `custom_total` int(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `category`
--

CREATE TABLE `category` (
  `category_id` int(6) UNSIGNED NOT NULL,
  `category_name` varchar(30) NOT NULL,
  `category_status` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `category`
--

INSERT INTO `category` (`category_id`, `category_name`, `category_status`) VALUES
(1, '課程', 1),
(2, '塔派甜點', 1),
(3, '蛋糕', 1),
(4, '餅乾', 1),
(5, '精緻點心', 1);

-- --------------------------------------------------------

--
-- 資料表結構 `category_sub`
--

CREATE TABLE `category_sub` (
  `subcategory_id` int(6) UNSIGNED NOT NULL,
  `category_id_fk` int(6) NOT NULL,
  `subcategory_name` varchar(30) NOT NULL,
  `subcategory_status` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `category_sub`
--

INSERT INTO `category_sub` (`subcategory_id`, `category_id_fk`, `subcategory_name`, `subcategory_status`) VALUES
(1, 1, '塔派甜點', 1),
(2, 1, '蛋糕', 1),
(3, 1, '餅乾', 1),
(4, 1, '精緻甜點', 1),
(5, 2, '塔', 1),
(6, 2, '派', 1),
(7, 3, '戚風蛋糕', 1),
(8, 3, '千層蛋糕', 1),
(9, 3, '乳酪蛋糕', 1),
(10, 3, '提拉米蘇', 1),
(11, 3, '幕斯蛋糕', 1),
(12, 3, '磅蛋糕', 1),
(13, 4, '達克瓦茲', 1),
(14, 4, '曲奇餅乾', 1),
(15, 4, '馬卡龍', 1),
(16, 5, '巧克力', 1),
(17, 5, '泡芙', 1);

-- --------------------------------------------------------

--
-- 資料表結構 `class`
--

CREATE TABLE `class` (
  `class_id` int(6) NOT NULL,
  `class_name` varchar(50) NOT NULL,
  `class_description` varchar(600) NOT NULL,
  `class_description_full` varchar(600) DEFAULT NULL,
  `class_category` varchar(50) DEFAULT NULL,
  `teacher_id_fk` int(6) NOT NULL,
  `class_location` varchar(50) NOT NULL,
  `class_price` int(6) NOT NULL,
  `class_enroll_start` datetime NOT NULL DEFAULT current_timestamp(),
  `class_enroll_end` datetime NOT NULL DEFAULT current_timestamp(),
  `class_start_time` datetime NOT NULL DEFAULT current_timestamp(),
  `class_end_time` datetime NOT NULL DEFAULT current_timestamp(),
  `class_status` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `class_commet`
--

CREATE TABLE `class_commet` (
  `class_commet_id` int(6) NOT NULL,
  `class_id_fk` int(6) NOT NULL,
  `user_id_fk` int(6) NOT NULL,
  `class_commet_content` varchar(300) NOT NULL,
  `class_commet_status` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `class_favorite`
--

CREATE TABLE `class_favorite` (
  `class_favorite_id` int(6) NOT NULL,
  `user_id_fk` int(6) NOT NULL,
  `class_id_fk` int(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `class_image`
--

CREATE TABLE `class_image` (
  `class_image_id` int(6) NOT NULL,
  `class_id_fk` int(6) NOT NULL,
  `product_image_filename` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `class_reply`
--

CREATE TABLE `class_reply` (
  `class_reply_id` int(6) DEFAULT NULL,
  `class_comment_id_fk` int(11) NOT NULL,
  `class_reply_content` varchar(300) NOT NULL,
  `class_reply_createtime` datetime NOT NULL DEFAULT current_timestamp(),
  `class_reply_status` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `class_teacher`
--

CREATE TABLE `class_teacher` (
  `teacher_id` int(6) UNSIGNED NOT NULL,
  `teacher_img` varchar(50) DEFAULT NULL,
  `teacher_name` varchar(50) NOT NULL,
  `teacher_phone` char(50) NOT NULL,
  `teacher_email` varchar(200) NOT NULL,
  `teacher_expertise` mediumtext NOT NULL,
  `teacher_intro` mediumtext NOT NULL,
  `teacher_status` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `class_teacher`
--

INSERT INTO `class_teacher` (`teacher_id`, `teacher_img`, `teacher_name`, `teacher_phone`, `teacher_email`, `teacher_expertise`, `teacher_intro`, `teacher_status`) VALUES
(1, '1-1.webp', '呂昇達', '0910-111222', 'luda@test.com', '洋菓子', '擅長化繁為簡的烘焙技巧 回歸食材最原始美味的配方\r\n\r\n\r\n• 統一麵粉烘焙技術顧問 \r\n• 法國藍絲可產品技術顧問 \r\n• 台灣原貿市場開發行銷顧問 \r\n• 德國白美娜商品開發顧問 \r\n• 可可聯盟巧克力烘焙技術顧問 \r\n• 開元食品商品部顧問 \r\n• 晶華酒店服務經理 \r\n• 口福堂總店長 \r\n• 高雄餐旅大學推廣教育烘焙講師 \r\n• 士邦Spar 攪拌器烘焙商品技術顧問\r\n\r\n我做烘焙已經超過二十年了，待過這麼多間飯店、食品行的中央工廠，製作上萬顆蛋糕。我知道大家最常遇到的烘焙問題、最常失敗的原因。看到配方時，不能只用過往的觀念去思考，懂得將烘焙理論融會貫通，才能用最輕鬆的方式呈現甜點最忠實的樣貌。追求好吃的極致，是我在甜點路上唯一並永恆追尋的目標。', 1),
(2, '2-1.webp', '呂昇達', '0910-111223', 'luda@test.com', '內餡製作', '擅長化繁為簡的烘焙技巧 回歸食材最原始美味的配方\n\n\n• 統一麵粉烘焙技術顧問 \n• 法國藍絲可產品技術顧問 \n• 台灣原貿市場開發行銷顧問 \n• 德國白美娜商品開發顧問 \n• 可可聯盟巧克力烘焙技術顧問 \n• 開元食品商品部顧問 \n• 晶華酒店服務經理 \n• 口福堂總店長 \n• 高雄餐旅大學推廣教育烘焙講師 \n• 士邦Spar 攪拌器烘焙商品技術顧問\n\n我做烘焙已經超過二十年了，待過這麼多間飯店、食品行的中央工廠，製作上萬顆蛋糕。我知道大家最常遇到的烘焙問題、最常失敗的原因。看到配方時，不能只用過往的觀念去思考，懂得將烘焙理論融會貫通，才能用最輕鬆的方式呈現甜點最忠實的樣貌。追求好吃的極致，是我在甜點路上唯一並永恆追尋的目標。', 1),
(3, '3-1.jpg', '威力', '0930-148224', 'willy@test.com', '法式常溫甜點', '自學甜點5年時間。\n著迷在自學過程中每個珍貴的失敗過程。\n\n多次甜點講師的教學經歷\n不定時快閃開課教學，期許自己傳遞更多關於「自學甜點」的美好！', 1),
(4, '4-1.jpeg', '韓國人金老師', '0923-109225', 'korkim@test.com', '馬卡龍', '我是韓國人金老師，我中文很厲害喔!!\r\n\r\n從事烘培工作超過10年，在台灣的學生已經超過2000人了，專攻韓式擠花、馬卡龍保證班、達克瓦茲、鏡面蛋糕、花花果凍、以及和菓子，教學經驗超豐富，商品在新光三越A4快閃熱賣。\r\n\r\n課程邀請：零經驗藝人網紅大來賓一起上課，不再只是老師專業的完美完成作品，而是經由與學生學習中的互動，了解課程的細節與魔鬼。\r\n\r\n想要來跟我上課的朋友，可以先報名線上課程，如果還是希望跟我實作，可以全額抵扣線上課程的方式來報名，完全不會浪費錢。', 1),
(5, '5-1.png', '幸子', '0972-197226', 'hsingtzu@test.com', '達克瓦茲', '一位太喜歡達克瓦茲的自學甜點師。\n\n因為熱愛甜點，逐漸從業餘邁向全職甜點師。目前有一間台中甜點工作室，不定期快閃開單。\n\n• 自學甜點並經營網路宅配甜點工作室至今已五年時間 \n• 社群媒體破３萬粉絲追蹤 \n• 新北自由式手作甜點烘焙教師（2020至2022） \n• 台北Miss J Baking Studio烘焙教師（2021至今） \n• 台北橙品手作·烘焙廚藝烘焙教師 （2022至今） \n• 台中Her x Her Studio烘焙教師（2022至今） \n• 高雄拜樹頭烘焙商店烘焙教師（2020至今）', 1),
(6, '6-1.jpg', '柯令達', '0937-146227', 'linda@test.com', '糖花技術蛋糕', '走跳過日本、巴黎的甜點冒險，如今回到台灣繼續甜點夢。我只想分享美好的事物，分享甜點分享歡樂\r\n\r\n• 台灣 GATEAUX 蛋糕技藝競賽 糖花藝術蛋糕 職業組冠軍 \r\n• 東京蛋糕展杏仁膏組技術獎\r\n\r\n日本東京製菓專門學校洋菓子系、法國藍帶畢業。 後於法國雷諾特學校學習，以第一名的身分畢業。', 1),
(7, '7-1.png', 'Alexis Bouillet', '0988-175228', 'alexis@test.com', '法式千層', 'Hello, I\'m Alexis Bouillet，我是Alexis 曾獲得2011年世界技能大賽甜點冠軍 我的第一堂線上課程，讓你在家就可以跟著我學習，烤出口感香氣十足的經典可頌、維也納甜酥麵包、橙香咕咕洛伕...等7款經典丹麥麵包，迷人的滋味絕對讓大人小孩都愛不釋手！\n\n第二堂 Bouillet兄弟 精心設計的線上課程，每個品項都是經典法式甜點，富含「創意」、「獨家配方」與我們多年的經驗與心血，集合多項烘焙技術的扎實知識，你絕對不能錯過！', 1),
(8, '8-1.png', '黃偈', '0997-136229', 'jie@test.com', '慕斯蛋糕', '喜歡分享做甜點的快樂，希望利用課程帶領大家認識臺灣、分享製作甜點的知識與經驗。\n\n• 旅法進修法式甜點一年 \n•  約十年甜點製作經驗 \n•  2015~2019 河床法式甜點主廚 \n•  出版書籍【黃偈的甜點日記：32道法式甜點與追夢隨筆】', 1),
(9, '9-1.jpg', '黃威達', '0989-118230', 'wayda@test.com', '乳酪甜點', '•  現任久久津乳酪菓子手造所營運執行長\n•  為北海道LUXE乳酪在台技術顧問、講師\n•  曾赴日本北海道學習乳酪甜點製作\n\n因為麵粉過敏關了麵包的門，卻因為乳酪開啟了另一扇窗\n邀請你加入這堂課程，和我一起探索乳酪的各種風貌', 1),
(10, '10-1.png', '黃偈', '0997-136229', 'jie@test.com', '慕斯蛋糕', '喜歡分享做甜點的快樂，希望利用課程帶領大家認識臺灣、分享製作甜點的知識與經驗。\n\n• 旅法進修法式甜點一年 \n•  約十年甜點製作經驗 \n•  2015~2019 河床法式甜點主廚 \n•  出版書籍【黃偈的甜點日記：32道法式甜點與追夢隨筆】', 1),
(11, '11-1.jpg', '陳小胖', '0923-389232', 'fwife@test.com', '肉桂捲', '「胖死我太太」的新手先生。 用IG紀錄透過美食寵愛（胖死）太太的愛情故事，\n 而太太是因為肉桂捲嫁給他，成為了他們愛情故事中的起源。', 1),
(12, '12-1.png', '王家承', '0952-256233', 'chia@test.com', '巧克力調溫', '新生代最具代表性職人 15年以上深耕巧克力領域達人\n\n他，全能派！精通巧克力、法式西點、丹麥麵包..... 他，理論教學派！ 多年主廚工作及教學經驗，在不斷積累中，形成了強大的理論教學體系，無所不能的技術解決之道。\n\n• Volute Croissant 品牌創辦人 \n• 18度C巧克力工房 巧克力甜點研發主廚 \n• 法國 MDAS 世界西點大賽 台灣國家代表隊 \n• 法國 Candia Professional 亞洲區品牌大使 \n• 2020法國萊思克盃 國王派冠軍 \n• Mano Mano patisserie 研發主廚 \n• fla fla tu tu 法圖甜點空間 品牌共同創辦人 \n• 香港、中國、澳門、新加坡等烘焙教室 甜點專任講師', 1),
(13, '13-1.webp', '武子靖', '0974-567234', 'chin@test.com', '歐式麵包', '大家好，我是武子靖，曾代表台灣參加多項世界級競賽 2022年在路易樂斯福世界盃麵包大賽奪得冠軍\n\n贏得世界盃冠軍後，我的腳步並沒有停下 而是開始思考該如何傳遞我在國外的所見所聞，分享對歐式麵包更多的想像\n\n我的麵包獲得了全世界厲害麵包師傅的認可。這股美味，希望能讓各位在家中就能品嚐，歡迎你們加入我的線上課程！', 1),
(14, '14-1.jpg', '游舒涵', '0925-983235', 'evayu@test.com', '法式塔派', 'all Yu can bake 主理人\n一位不務正業半路出家到法國藍帶學藝的甜點師！\n嗜吃如命，熱愛旅遊，生活點滴皆是創作靈感來源。\n\n• 30 歲辭職，勇敢前往法國取得巴黎藍帶甜點證書\n• Le Cordon Bleu Paris巴黎藍帶甜點證書\n• Pierre Hermé stagiaire 甜點實習\n• all YU can bake 甜點創辦\n• ELLE Taiwan 甜點專欄作家\n• 馬來西亞 Royal Baking Academy 專任講師\n• 2011 世界技能大賽甜點冠軍 Alexis Bouillet — MasterClass 系列專業 助手與翻譯\n• 億滋國際甜點研發技師\n• 橙品手作。烘焙廚藝烘焙教師', 1),
(15, '15-1.jpg', '游舒涵', '0925-983235', 'evayu@test.com', '法式塔派', 'all Yu can bake 主理人\n一位不務正業半路出家到法國藍帶學藝的甜點師！\n嗜吃如命，熱愛旅遊，生活點滴皆是創作靈感來源。\n\n• 30 歲辭職，勇敢前往法國取得巴黎藍帶甜點證書\n• Le Cordon Bleu Paris巴黎藍帶甜點證書\n• Pierre Hermé stagiaire 甜點實習\n• all YU can bake 甜點創辦\n• ELLE Taiwan 甜點專欄作家\n• 馬來西亞 Royal Baking Academy 專任講師\n• 2011 世界技能大賽甜點冠軍 Alexis Bouillet — MasterClass 系列專業 助手與翻譯\n• 億滋國際甜點研發技師\n• 橙品手作。烘焙廚藝烘焙教師', 1),
(16, '16-1.jpg', '張錫源', '0958-572237', 'aaron@test.com', '歐式麵包', '提倡「烘焙新食」文化\n實驗改良麵包的製作處理方式、結合豐富多元的食材選擇，充分發揮食材特性，融合出美味誘人的創新口味，將烘焙擴展到無侷限、無框架，是我畢生努力的方向。\n\n現任：芳璽烘焙藝廊烘焙總監\n經歷：\n• Croupe 手作 技術開發\n• 台灣國際兒童村 烘焙志工\n• Bonjour 品質管理經理\n• A Plus 烘焙主廚\n• 香港 Pots & Pans Cooking Studio 烘焙講師\n• 麥之田 烘焙講師\n• 原料商 烘焙技師\n\n獲獎紀錄\n• 2011美國乳酪麵包大賽 優勝\n• 2012加州葡萄乳酪烘焙大賽 優勝', 1),
(17, '17-1.webp', '黃威達', '0989-118230', 'wayda@test.com', '乳酪甜點', '•  現任久久津乳酪菓子手造所營運執行長\n•  為北海道LUXE乳酪在台技術顧問、講師\n•  曾赴日本北海道學習乳酪甜點製作\n\n因為麵粉過敏關了麵包的門，卻因為乳酪開啟了另一扇窗\n邀請你加入這堂課程，和我一起探索乳酪的各種風貌', 1),
(18, '18-1.jpg', '楊世均', '0988-509239', 'shihjun@test.com', '歐式麵包', '•  第38屆全國技能競賽冠軍\n•  第40屆國際技能競賽國手金牌\n•  美國小麥協會技術講師\n•  德麥技術簽約講師\n•  布雷夫烘焙負責人\n\n我將公開店內麵包的商業機密，歡迎加入我的課程，學習麵包好吃的秘密撇步！', 1),
(19, '19-1.jpg', '王詩成', '0988-509240', 'leo@test.com', '戚風蛋糕', '大家好，我是烘焙工程獅～\n我是一名擁有甜點魂的工程師，我喜歡化繁為簡，用工程師的本能去簡化烘焙的製程，讓大家在家就能輕鬆做出好吃的甜點給家人、朋友分享！', 1),
(20, '20-1.jpg', '任樂軒', '0988-509241', 'hin@test.com', '巧克力調溫', 'Chef Hin是國際知名甜點設計師，曾受邀擔任世界各國西點、酒店的西點行政總廚。\n不僅如此，更在台灣大專院校擔任客座講師，讓法式甜點製作更為親民，持續創作屬於在地的創意甜點。\n曾任職香港米其林三星侯布雄、美國舊金山米其林一星餐廳 Madera、北京及舊金山瑰麗酒店、台北文華東方西點行政總廚、上海半島酒店西點副主廚、榮獲北美 Valrhona C3 巧克力比賽銀獎。', 1),
(21, '21-1.jpg', '曹思蓓', '0988-509242', 'isabella@test.com', '純素甜點', '成為甜點主廚前，Isabella是一位視覺設計師，於2014年成立【GREEN BAKERY綠帶純植物烘焙】。\n希望藉由自創的純植物甜點，傳達符合環境永續、有益健康、友善動物的全新飲食概念。Isabella用\n她擅長的設計手法，從「心」歸零、重新組合並勇於跳脫傳統框架。 創作的甜點除了以美味為前提，更示範出如何從大自然的植物中取材，創造甜點中的色、香、味，希望引領更多人開始用幸福的食材做出幸福的甜點。', 1),
(22, '22-1.jpg', '威力', '0930-148224', 'willy@test.com', '法式常溫甜點', '自學甜點5年時間。\n著迷在自學過程中每個珍貴的失敗過程。\n\n多次甜點講師的教學經歷\n不定時快閃開課教學，期許自己傳遞更多關於「自學甜點」的美好！', 1),
(23, '23-1.jpg', '張家翰', '0988-509244', 'hank@test.com', '創意法式甜點', '教你用在地食材變出創意法式甜點！\n出生在風光明媚的新竹鄉間，Hank常笑稱自己是「泥巴中滾大的孩子」，不只熱愛土地，對在地食材更是情有獨鍾。走上烘焙之路後，他將這份對土地的感情轉而融入甜點創作之中，讓做出來的成品不僅精緻可口，更充滿濃濃的台灣人情味。', 1),
(24, '24-1.jpg', '拿拿摳', '0988-509245', 'nanaco@test.com', '鮮奶油蛋糕', '曾是個厭世上班族，偶然接觸到甜點工作，開啟了白天上班、晚上學甜點的兩頭燒生活。雖然辛苦，\r\n卻也發現對於甜點的熱愛，而走向全職甜點師之路。\r\n\r\n6年甜點店開業經驗，幽默風趣的教學風格，保證讓你上課不無聊。', 1);

-- --------------------------------------------------------

--
-- 資料表結構 `coupon`
--

CREATE TABLE `coupon` (
  `coupon_id` int(6) NOT NULL,
  `coupon_name` varchar(50) NOT NULL,
  `coupon_discount_amount` int(6) NOT NULL,
  `coupon_discount_percentage` decimal(6,0) NOT NULL,
  `coupon_start_date` datetime NOT NULL DEFAULT current_timestamp(),
  `coupon_end_date` datetime NOT NULL DEFAULT '2030-12-31 00:00:00',
  `coupon_min_price` int(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `product`
--

CREATE TABLE `product` (
  `product_id` int(6) NOT NULL,
  `product_name` varchar(50) NOT NULL,
  `product_description` varchar(300) DEFAULT NULL,
  `product_description_full` varchar(300) DEFAULT NULL,
  `product_category` varchar(50) DEFAULT NULL,
  `category_id_fk` int(6) NOT NULL,
  `category_sub_id_fk` int(6) NOT NULL,
  `product_subtitle_small` varchar(50) NOT NULL,
  `product_subtitle_middle` varchar(50) DEFAULT NULL,
  `product_subtitle_large` varchar(50) DEFAULT NULL,
  `product_price_small` int(6) NOT NULL,
  `product_price_middle` int(6) DEFAULT NULL,
  `product_price_large` int(6) DEFAULT NULL,
  `product_count` int(6) NOT NULL DEFAULT 300,
  `product_createtime` datetime NOT NULL DEFAULT current_timestamp(),
  `product_status` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `product`
--

INSERT INTO `product` (`product_id`, `product_name`, `product_description`, `product_description_full`, `product_category`, `category_id_fk`, `category_sub_id_fk`, `product_subtitle_small`, `product_subtitle_middle`, `product_subtitle_large`, `product_price_small`, `product_price_middle`, `product_price_large`, `product_count`, `product_createtime`, `product_status`) VALUES
(10822, '第一筆', '第一筆喔', '第一筆喔喔喔', '', 0, 0, '', NULL, NULL, 0, NULL, NULL, 300, '2024-04-30 15:07:25', 1),
(10823, '鳳梨芒果起司塔', '酥脆的甜塔皮與濃郁的巴斯克蛋糕\r\n酸奶起司優格增添酸味\r\n與屏東枋山愛文芒果與酸甜鳳梨是絕妙組合', ':: 濃郁起司塔 :: \r\n\r\n酥脆的甜塔皮與濃郁的巴斯克蛋糕\r\n酸奶起司優格增添酸味\r\n與屏東枋山愛文芒果與酸甜鳳梨是絕妙組合\r\n\r\n:: 食材嚴選 :: \r\n南投放山雞土雞蛋\r\n香山牧場鮮乳\r\n大溪地香草莢\r\n日本上白糖\r\n法國伊斯尼奶油', '塔', 2, 5, '6吋', '9吋', NULL, 620, 1750, NULL, 300, '2024-05-01 04:24:54', 1),
(10824, '春綠 ‧ 輕抹慕斯蛋糕', '來自苔蘚的顏色\r\n一種帶有沉靜的深綠色\r\n\r\n春綠 ‧ 抹茶慕斯\r\n\r\n表面有一層\r\n苔蘚般的療癒毛絨\r\n春色無限 可可愛愛\r\n\r\n輕輕一抿\r\n春天的可愛美好就這麼被吃下肚腹', '來自苔蘚的顏色\r\n一種帶有沉靜的深綠色\r\n\r\n春綠 ‧ 抹茶慕斯\r\n\r\n表面有一層\r\n苔蘚般的療癒毛絨\r\n春色無限 可可愛愛\r\n\r\n輕輕一抿\r\n春天的可愛美好就這麼被吃下肚腹\r\n \r\n\r\n \r\n\r\n抹茶戚風蛋糕體/抹茶幕斯/柑橘果醬/可可脂噴面\r\n\r\n抽出Pantone色票0343，用可可脂與巧克力調出與春天最契合的抹茶綠，薄薄的噴灑在蛋糕上形成有趣的毛絨，像是滿載春天的草木綠，那是枝頭萌出的新芽、是地底鑽出的嫩草。選用小山園抹茶粉為材料製作，層層堆疊製成的抹茶慕斯蛋糕，抹茶風味輕盈，口感如絲滑順，舌尖上顎輕輕一抿，慕斯就轉瞬化口，手工柑橘醬在尾韻輕輕出現，盡是春天的輕盈滋味。\r\n\r\n夏天來臨', '幕斯蛋糕', 3, 11, '6吋', '9吋', NULL, 1080, 1800, NULL, 300, '2024-05-01 08:18:45', 1),
(10825, '達克瓦茲好茶禮盒', '好茶1號 ｜ 石門鐵觀音茶達克瓦茲\r\n\r\n青梅奶油霜 X 搭配烏梅蜜 X 鐵觀音茶粉\r\n\r\n【茶湯金黃 茶香沉穩濃郁 遠近馳名】', '好茶1號 ｜ 石門鐵觀音茶達克瓦茲\r\n\r\n青梅奶油霜 X 搭配烏梅蜜 X 鐵觀音茶粉\r\n\r\n【茶湯金黃 茶香沉穩濃郁 遠近馳名】\r\n \r\n好茶2號 ｜ 文山包種茶達克瓦茲\r\n\r\n洛神花奶油霜 X 搭配紫蘇青梅凍 X 包種茶粉\r\n\r\n【台灣最具代表性的茗茶 滋味清香優雅 自帶甘醇花香】', '達克瓦茲', 4, 13, '', '', NULL, 620, 0, NULL, 300, '2024-05-01 08:20:28', 1),
(10826, '鹿野紅烏龍戚風蛋糕', '林叔叔在台東鹿野的冠軍茶廠出產的紅烏龍茶葉，好多年都得了金賞，重發酵的紅烏龍，茶味鮮明溫潤帶有一縷天然果香~', '林叔叔在台東鹿野的冠軍茶廠出產的紅烏龍茶葉，好多年都得了金賞，重發酵的紅烏龍，茶味鮮明溫潤帶有一縷天然果香，是我們私下很愛喝的台灣茶之一，所以決定用這個我們都好喜歡的紅烏龍，做成淡雅內斂的戚風蛋糕；若賦予她生命，她絕對是位氣質出眾的女孩。\r\n\r\n裝飾意象為台灣茶花，吃蛋糕的同時別忘了台灣有世界頂級的好茶！（目前已改版為紅烏龍茶香緹內餡，已不再附上鮮奶油與紅烏龍茶淋醬喔）', '戚風蛋糕', 3, 7, '6吋', '9吋', NULL, 620, 1600, NULL, 300, '2024-05-01 08:22:51', 1),
(10827, '布丁泡芙', '將國民甜點統一布丁拌合beard papa’s經典卡士達內餡，完整呈現從小到大最熟悉的味道💞\r\n\r\n當外酥內軟的泡芙外皮遇到咕溜滑嫩的布丁內餡，一口咬下品嘗雙重口感。', '一吃再吃，停「布」下來的熟悉滋味！\r\n\r\n同樣是傳承多年美味的兩大品牌beard papa’s與統一布丁再度聯名啦！\r\n\r\n將國民甜點統一布丁拌合beard papa’s經典卡士達內餡，完整呈現從小到大最熟悉的味道💞\r\n\r\n當外酥內軟的泡芙外皮遇到咕溜滑嫩的布丁內餡，一口咬下品嘗雙重口感。\r\n\r\n緊接而來布丁與焦糖的甜香交錯撲鼻~就是這股經典又熟悉的滋味！\r\n\r\n兼具口感、味覺、嗅覺的多重感官享受，讓人一吃再吃停不下來😋', '泡芙', 5, 17, '', '', NULL, 450, 0, NULL, 300, '2024-05-01 08:25:21', 1),
(10828, '小山園抹茶 生巧克力 (140g/盒)', '添加日本頂級小山園抹茶粉，\r\n\r\n顏色翠綠，濃郁茶味清香不苦澀，\r\n\r\n是抹茶控絕對不能錯過的味道。', '什麼是生巧克力？\r\n\r\n生巧克力的「生」字源自日文「生チョコレート」，是新鮮的意思,\r\n\r\n加入鮮奶油混合，口感滑順並帶有添加日本頂級小山園抹茶粉，\r\n\r\n顏色翠綠，濃郁茶味清香不苦澀，\r\n\r\n是抹茶控絕對不能錯過的味道。', '巧克力', 5, 16, '', '', NULL, 520, 0, NULL, 300, '2024-05-01 08:54:52', 1),
(10829, '巴斯克乳酪蛋糕', '嚴選日本京都丸久小山園焙茶，重烘焙的茶香和本來就帶有煙燻感的焦黑外皮十分契合\r\n\r\n充滿底蘊卻內斂，滋味不似看上去那般厚重，\r\n直到尾韻才漸漸帶出豐沛的茶感。', '嚴選日本京都丸久小山園焙茶，重烘焙的茶香和本來就帶有煙燻感的焦黑外皮十分契合\r\n\r\n充滿底蘊卻內斂，滋味不似看上去那般厚重，\r\n直到尾韻才漸漸帶出豐沛的茶感。\r\n \r\n保存方式：\r\n全程冷藏，可保存7天 (最佳賞味3天內)，\r\n如果需要長期保存，冷凍的話可以保存一個月，\r\n食用前需要放置冷藏12小時以上的時間來解凍！\r\n \r\n最佳賞味方式：\r\n食用前可從冷藏移往冷凍放置40分鐘，再拿出來馬上吃，口感最佳。', '乳酪蛋糕', 3, 9, '6吋', '9吋', NULL, 300, 590, NULL, 300, '2024-05-01 08:58:22', 1),
(10830, '極濃小山園抹茶', '嚴選日本京都丸久小山園抹茶粉，翠綠半熟的內裏彷若走入了蔥鬱森林\r\n尾韻些許的海苔風味和回甘，正是品質優良的最佳證明\r\n搭配濃郁的奶油乳酪，不一昧追求抹茶的濃厚，而是在兩者間取得良好的平衡\r\n感受交織茶香與奶香所帶來的美妙風味吧。', '商品資訊\r\n請在購買完成後，加入杳杳官方LINE，我們將會傳送物流宅配資訊給您，方便追蹤確認寄送進度。\r\n \r\n嚴選日本京都丸久小山園抹茶粉，翠綠半熟的內裏彷若走入了蔥鬱森林\r\n尾韻些許的海苔風味和回甘，正是品質優良的最佳證明\r\n搭配濃郁的奶油乳酪，不一昧追求抹茶的濃厚，而是在兩者間取得良好的平衡\r\n感受交織茶香與奶香所帶來的美妙風味吧。\r\n \r\n保存方式：\r\n全程冷藏，可保存7天 (最佳賞味3天內)，\r\n如果需要長期保存，冷凍的話可以保存一個月，\r\n食用前需要放置冷藏12小時以上的時間來解凍！\r\n \r\n最佳賞味方式：\r\n食用前可從冷藏移往冷凍放置40分鐘，再拿出來馬上吃，口感最佳。', '乳酪蛋糕', 3, 9, '6吋', '9吋', NULL, 295, 590, NULL, 300, '2024-05-01 09:00:20', 1),
(10831, '伯爵茶磅蛋糕(1入)', '伯爵茶蛋糕濃郁的伯爵茶香氣是必須的，佛手柑與錫蘭紅茶，加上糖煮杏桃帶來甜蜜的口感，蛋糕體內加入了堅果香氣的杏仁粉以及呼應糖煮杏桃的蘭姆酒，這是完美的伯爵茶蛋糕。', '「我最愛的茶就是伯爵茶！」其實這個配方已經構思很久，也做過了5個版本一直調整，雖然伯爵的茶香很美好，但單純的伯爵茶卻略為單調，由不同的食材，比例與組合嘗試後，終於做出了這個伯爵茶蛋糕；這個蛋糕濃郁的伯爵茶香氣是必須的，佛手柑與錫蘭紅茶，加上糖煮杏桃帶來甜蜜的口感，蛋糕體內加入了堅果香氣的杏仁粉以及呼應糖煮杏桃的蘭姆酒，這是完美的伯爵茶蛋糕。', '磅蛋糕', 3, 12, '', '', NULL, 450, 0, NULL, 300, '2024-05-01 09:02:36', 1),
(10832, '柚子檸檬磅蛋糕(1入)', '柚子檸檬口味須先閱讀注意事項再訂購，同意在購買，謝謝。\r\n「檸檬磅蛋糕是我們配方的原點！」常常有人說，要知道一家店的甜點如何，就試他們的檸檬蛋糕或是檸檬塔吧，原本的檸檬蛋糕1歲的時候，我們在構思如何把檸檬蛋糕再升級，原本的檸檬蛋糕我一直覺得少了一點「溫暖」的味道，很清新、深刻，但少了份溫度，我們使用了「日本高知縣產的柚子」，加入到蛋糕當中，讓原本的檸檬蛋糕帶來更有深度也更完整的味道！到了檸檬蛋糕2歲時，我希望蛋糕呈現的味道可以更柔和，所以以法國黃檸檬取代了原本的綠檸檬，用來做成焦糖色的檸檬糖霜，帶來糖果香氣跟更濃郁深刻的檸檬香味。', '#關於柚子檸檬磅蛋糕說明\r\n柚子檸檬蛋糕的結構因為加入了奶油起司，所以會像磅蛋糕跟起司蛋糕混合的結構，氣孔會比其他口味的磅蛋糕更少，這是我們配方的正常狀況，也是一直以來柚子檸檬磅蛋糕的樣子，從開賣以來銷量最好的就是檸檬蛋糕，配方的結構從來沒有改過，也是客人最喜歡的口味之一，所以也不會去改動，如果有疑慮請不要訂購柚子檸檬蛋糕。\r\n\r\n這是我們這個口味配方的特色，從過去到現在都長這樣，而這個結構不會在其他口味出現，也是因為這個，同重量下的檸檬蛋糕會比其他口味小上許多。', '磅蛋糕', 3, 12, '', '', NULL, 450, 0, NULL, 300, '2024-05-01 09:05:07', 1),
(10833, '泰奶泡芙(6入)', '選用經典泰式茶粉，拌合獨家卡士達內餡，完整呈現泰奶的招牌橘紅色調❗\r\n\r\n一口咬下，獨特的濃郁茶香撲鼻而來，滑順的卡士達內餡緊接著在舌尖上化開~\r\n\r\n視覺、嗅覺與味覺的三重享受，讓人彷彿置身泰國，真的是”泰”好吃啦😋', '🛫不用飛出國也能感受泰式熱帶風情！\r\n\r\n🧡選用經典泰式茶粉，拌合獨家卡士達內餡，完整呈現泰奶的招牌橘紅色調❗\r\n\r\n一口咬下，獨特的濃郁茶香撲鼻而來，滑順的卡士達內餡緊接著在舌尖上化開~\r\n\r\n視覺、嗅覺與味覺的三重享受，讓人彷彿置身泰國，真的是”泰”好吃啦😋\r\n\r\n🧡4月份還推出「法式甜圈」 (限定門市販售)\r\n\r\n起源於環法單車比賽的甜甜圈造型泡芙，經過精心烘焙，吃起來帶有鬆餅微酥鬆軟的口感。\r\n\r\n搭配4月限定泰奶卡士達內餡，兩種異國風味碰撞出令人讚不絕口的美味。', '泡芙', 5, 17, '', '', NULL, 450, 0, NULL, 300, '2024-05-01 09:09:40', 1),
(10834, '黃澄澄檸檬派', '招牌甜點\r\n\r\n酥脆的手工塔皮搭配多種檸檬調配的內餡,\r\n\r\n酸溜溜的口感令人意猶未盡, 回味無窮~', '招牌甜點\r\n\r\n酥脆的手工塔皮搭配多種檸檬調配的內餡,\r\n\r\n酸溜溜的口感令人意猶未盡, 回味無窮\r\n\r\n▹  食材 : 九如檸檬奶油餡、開心果碎、原味塔皮\r\n\r\n▹  保存方式 : 冷藏3天，冷凍7天\r\n\r\n✦  過敏源資訊：本產品線含有堅果、穀物及蛋奶類，不建議過敏體質者食用。', '派', 2, 6, '6吋', '9吋', NULL, 620, 850, NULL, 300, '2024-05-01 09:13:18', 1),
(10835, '梔子百香烏龍茶塔', '以明亮的酸甜滋味開頭，香緹、奶凍、奶餡創造多層次\r\n\r\n口感將百香果與烏龍茶獨特的香氣完美揉合，槴子花香驚喜點綴\r\n\r\n最後以淡淡茶味收斂整趟味蕾之旅，清新充滿活力的滋味，很適合夏天搭配冷泡茶享用。', '以明亮的酸甜滋味開頭，香緹、奶凍、奶餡創造多層次\r\n\r\n口感將百香果與烏龍茶獨特的香氣完美揉合，槴子花香驚喜點綴\r\n\r\n最後以淡淡茶味收斂整趟味蕾之旅，清新充滿活力的滋味，很適合夏天搭配冷泡茶享用。\r\n\r\n\r\n▹  食材 :  百香果香緹、槴子花烏龍茶奶凍、百香果奶餡、原味塔皮\r\n\r\n▹  保存方式 : 冷藏3天，冷凍7天\r\n\r\n✦  過敏源資訊：本產品線含有堅果、穀物及蛋奶類，不建議過敏體質者食用。', '塔', 2, 5, '6吋', '9吋', NULL, 700, 950, NULL, 300, '2024-05-01 09:14:48', 1),
(10836, '香頌貝禮詩生巧', '咖啡塔皮飄散出濃濃的成熟香味，\r\n\r\n貝禮詩奶酒則是無法抗拒的魅力，\r\n\r\n香醇滑順的口感，無法忘懷的滋味，\r\n\r\n正如戀愛中的你/妳一般;\r\n\r\n58％生巧克力與牛奶巧克力調和加上甜甜的奶酒香氣，\r\n\r\n搭配咖啡或茶飲，一起分享的這陶醉的時刻！', '咖啡塔皮飄散出濃濃的成熟香味，\r\n\r\n貝禮詩奶酒則是無法抗拒的魅力，\r\n\r\n香醇滑順的口感，無法忘懷的滋味，\r\n\r\n正如戀愛中的你/妳一般;\r\n\r\n58％生巧克力與牛奶巧克力調和加上甜甜的奶酒香氣，\r\n\r\n搭配咖啡或茶飲，一起分享的這陶醉的時刻！\r\n\r\n▹ 食材 : 巧克力碎片、牛奶巧克力香緹、58%貝禮詩奶酒生巧克力、咖啡塔皮\r\n\r\n▹ 保存方式 : 冷藏3天，冷凍7天\r\n\r\n✦  過敏源資訊：本產品線含有堅果、穀物及蛋奶類，不建議過敏體質者食用。', '塔', 2, 5, '6吋', '9吋', NULL, 850, 1150, NULL, 300, '2024-05-01 09:17:50', 1),
(10837, '檸檬塔', '使用大量蛋黃、北海道中沢鮮奶油、與綠檸檬汁慢火製成，過程嚴守每一步驟的熬煮溫度，口感細緻、入口即化！比起溫順的黃檸檬，明亮的酸度是台灣在地綠檸檬的最大特色！排排站的史萊姆們，是帶著閃亮光澤的瑞士蛋白霜，還有天然梔子花色素調色的蛋白餅，軟綿與酥脆口感一次擁有！', '為避免塔皮浸濕，檸檬塔建議當天享用完畢，才會是最佳體驗喔。\r\n\r\n使用大量蛋黃、北海道中沢鮮奶油、與綠檸檬汁慢火製成，過程嚴守每一步驟的熬煮溫度，口感細緻、入口即化！比起溫順的黃檸檬，明亮的酸度是台灣在地綠檸檬的最大特色！排排站的史萊姆們，是帶著閃亮光澤的瑞士蛋白霜，還有天然梔子花色素調色的蛋白餅，軟綿與酥脆口感一次擁有！\r\n\r\n另外我們偷偷用了一個材料來帶出清香，你猜猜看吧～\r\n\r\n真的真的很喜歡我們的檸檬塔呢…', '塔', 2, 5, '6吋', '9吋', NULL, 750, 1280, NULL, 300, '2024-05-01 09:20:50', 1),
(10838, '純粹檸檬 優格乳酪蛋糕', '新鮮檸檬的酸，一定要用甜來襯托，達到平衡的酸甜口感刺激著味蕾，忍不住一口接一口。', '新鮮檸檬的酸，一定要用甜來襯托，達到平衡的酸甜口感刺激著味蕾，忍不住一口接一口。\r\n\r\n※和重乳酪蛋糕不同，獨特研發的優格乳酪蛋糕吃起來清爽不膩口，手做核桃餅乾底散發獨特蜂蜜堅果香，頂部水果凍層料好味濃。\r\n\r\n每一步都是細心手做，將我們想讓大家吃到好吃蛋糕的心意包裝進去，讓你驚嘆原來乳酪蛋糕可以這麼豐富。 ', '乳酪蛋糕', 3, 9, '6吋', '9吋', NULL, 520, 950, NULL, 300, '2024-05-01 09:23:47', 1),
(10839, '純粹玫莓 優格乳酪蛋糕', '滿滿五種綜合莓果，配上來自屏東大花農場的有機玫瑰醬，香氣濃厚。\r\n\r\n外表已經很美，一刀下去內層更美（吃之前必須先拍10張照炫耀）同時滿足味覺和視覺的少女殺手。', '▎滿滿五種綜合莓果，配上來自屏東大花農場的有機玫瑰醬，香氣濃厚。\r\n\r\n▎外表已經很美，一刀下去內層更美（吃之前必須先拍10張照炫耀）同時滿足味覺和視覺的少女殺手。\r\n\r\n※和重乳酪蛋糕不同，獨特研發的優格乳酪蛋糕吃起來清爽不膩口，手做核桃餅乾底散發獨特蜂蜜堅果香，頂部水果凍層料好味濃。每一步都是細心手做，將我們想讓大家吃到好吃蛋糕的心意包裝進去，讓你驚嘆原來乳酪蛋糕可以這麼豐富。', '乳酪蛋糕', 3, 9, '6吋', '9吋', NULL, 659, 1040, NULL, 300, '2024-05-01 09:25:23', 1),
(10840, '法式檸香 重乳酪蛋糕', '細緻的黃檸檬香氣，把握火候熬煮成柔順香濃的法式檸香醬，大手筆的鋪上厚厚滿滿的一層。\r\n黃檸檬的味道溫厚，如果綠檸檬熱\r\n\r\n一入口會先品嚐到檸檬香氣，接下來法國愛樂薇奶油乳酪(Elle&Vire)的成熟奶香接續而上，最後由獨家蜂蜜核桃餅乾底綜合口感和尾韻，喜歡濃郁奶味的你一定會喜歡她！', '細緻的黃檸檬香氣，把握火候熬煮成柔順香濃的法式檸香醬，大手筆的鋪上厚厚滿滿的一層。\r\n黃檸檬的味道溫厚，如果綠檸檬熱\r\n\r\n一入口會先品嚐到檸檬香氣，接下來法國愛樂薇奶油乳酪(Elle&Vire)的成熟奶香接續而上，最後由獨家蜂蜜核桃餅乾底綜合口感和尾韻，喜歡濃郁奶味的你一定會喜歡她！\r\n\r\n▎成份(蛋奶素)\r\n\r\n進口黃檸檬、法國愛樂薇奶油乳酪(Elle&Vire)、法國愛樂薇動物性鮮奶油、南投新畜走地放養雞蛋、糖、玉米粉、特製餅乾底 (法國Fléchard無水奶油、日本NIPPN麵粉、日本NIPPN全麥麵粉、加州核桃、小農蜂蜜) \r\n*本產品含有乳製品、堅果、麩質穀類製品可能導致過敏原', '乳酪蛋糕', 3, 9, '6吋', '9吋', NULL, 670, 950, NULL, 300, '2024-05-01 09:27:41', 1),
(10841, '小山園抹茶磅蛋糕', '使用京都宇治名門「丸久小山園抹茶粉」、日本昭和製菓粉、北海道中澤鮮奶油製成的磅蛋糕，質地細膩、口感濕潤、帶有濃郁抹茶香，搭配Callebaut白巧克力、中澤鮮奶油、與鮮乳坊單一牧場鮮奶製成的杏仁抹茶淋面。\r\n\r\n要吃的時候，烤一下，包你馬上進入抹茶小宇宙！', '使用京都宇治名門「丸久小山園抹茶粉」、日本昭和製菓粉、北海道中澤鮮奶油製成的磅蛋糕，質地細膩、口感濕潤、帶有濃郁抹茶香，搭配Callebaut白巧克力、中澤鮮奶油、與鮮乳坊單一牧場鮮奶製成的杏仁抹茶淋面。\r\n\r\n要吃的時候，烤一下，包你馬上進入抹茶小宇宙！', '磅蛋糕', 3, 12, '', '', NULL, 480, 0, NULL, 300, '2024-05-01 09:29:52', 1),
(10842, '炭焙烏龍 生巧克力 (140g/盒)', '使用台灣有機認證茶葉，\r\n\r\n經歷龍眼木炭焙口口甘醇，\r\n\r\n茶香味濃尾韻回甘持久。', '什麼是生巧克力？\r\n\r\n生巧克力的「生」字源自日文「生チョコレート」，是新鮮的意思,\r\n\r\n加入鮮奶油混合，口感滑順並帶有Ｑ感\r\n\r\n視覺、味覺上 絕對讓您驚艷\r\n\r\n使用台灣有機認證茶葉，添加L-阿拉伯糖\r\n\r\n經歷龍眼木炭焙口口甘醇，\r\n\r\n茶香味濃尾韻回甘持久。', '巧克力', 5, 16, '', '', NULL, 520, 0, NULL, 300, '2024-05-01 09:33:33', 1);

-- --------------------------------------------------------

--
-- 資料表結構 `product_favorite`
--

CREATE TABLE `product_favorite` (
  `product_favorite_id` int(6) NOT NULL,
  `user_id_fk` int(6) NOT NULL,
  `product_id_fk` int(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `product_image`
--

CREATE TABLE `product_image` (
  `product_image_id` int(6) NOT NULL,
  `product_id_fk` int(6) NOT NULL,
  `product_image_filename` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `product_image`
--

INSERT INTO `product_image` (`product_image_id`, `product_id_fk`, `product_image_filename`) VALUES
(4, 10823, '108231.jpg'),
(5, 10823, '108232.jpg'),
(6, 10824, '108241.jpg'),
(7, 10824, '108242.jpg'),
(8, 10824, '108243.jpg'),
(9, 10825, '108251.jpg'),
(10, 10825, '108252.jpg'),
(11, 10825, '108253.jpg'),
(12, 10826, '108261.jpg'),
(13, 10826, '108262.jpg'),
(14, 10826, '108263.jpg'),
(15, 10827, '108271.jpg'),
(16, 10827, '108272.jpg'),
(17, 10827, '108273.jpg'),
(18, 10828, '108281.jpg'),
(19, 10828, '108282.jpg'),
(20, 10828, '108283.jpg'),
(21, 10829, '108291.jpg'),
(22, 10829, '108292.jpg'),
(23, 10829, '108293.jpg'),
(24, 10830, '108301.jpg'),
(25, 10830, '108302.jpg'),
(26, 10830, '108303.jpg'),
(27, 10831, '108311.jpg'),
(28, 10831, '108312.jpg'),
(29, 10831, '108313.jpg'),
(30, 10832, '108321.jpg'),
(31, 10832, '108322.jpg'),
(32, 10832, '108323.jpg'),
(33, 10833, '108331.jpg'),
(34, 10833, '108332.jpg'),
(35, 10833, '108333.jpg'),
(36, 10834, '108341.jpg'),
(37, 10834, '108342.jpg'),
(38, 10834, '108343.jpg'),
(39, 10835, '108351.jpg'),
(40, 10835, '108352.jpg'),
(41, 10835, '108353.jpg'),
(42, 10836, '108361.jpg'),
(43, 10836, '108362.jpg'),
(44, 10836, '108363.jpg'),
(45, 10837, '108371.jpg'),
(46, 10837, '108372.jpg'),
(47, 10837, '108373.jpg'),
(48, 10838, '108381.jpg'),
(49, 10838, '108382.jpg'),
(50, 10838, '108383.jpg'),
(51, 10839, '108391.jpg'),
(52, 10839, '108392.jpg'),
(53, 10839, '108393.jpg'),
(54, 10840, '108401.jpg'),
(55, 10840, '108402.jpg'),
(56, 10840, '108403.jpg'),
(57, 10841, '108411.jpg'),
(58, 10841, '108412.jpg'),
(59, 10841, '108413.jpg'),
(60, 10842, '108421.jpg'),
(61, 10842, '108422.jpg'),
(62, 10842, '108423.jpg');

-- --------------------------------------------------------

--
-- 資料表結構 `purchase_item`
--

CREATE TABLE `purchase_item` (
  `id` int(11) NOT NULL,
  `order_id` varchar(255) NOT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` int(11) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `purchase_order`
--

CREATE TABLE `purchase_order` (
  `id` varchar(255) NOT NULL COMMENT 'UUID',
  `user_id` int(11) NOT NULL,
  `amount` int(11) DEFAULT NULL,
  `transaction_id` varchar(255) DEFAULT NULL,
  `payment` varchar(255) DEFAULT NULL COMMENT 'LINE Pay, 信用卡, ATM',
  `shipping` varchar(255) DEFAULT NULL COMMENT '7-11, Family Mart, Hi-Life, OK Mart, 郵局, 宅配',
  `status` varchar(255) DEFAULT NULL COMMENT 'pending, paid, fail, cancel, error',
  `order_info` text DEFAULT NULL COMMENT 'send to line pay',
  `reservation` text DEFAULT NULL COMMENT 'get from line pay',
  `confirm` text DEFAULT NULL COMMENT 'confirm from line pay',
  `return_code` varchar(255) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `user_name` varchar(50) DEFAULT NULL,
  `user_nickname` varchar(50) DEFAULT NULL,
  `user_account` varchar(50) DEFAULT NULL,
  `user_password` varchar(300) NOT NULL,
  `user_email` varchar(300) NOT NULL,
  `user_image` varchar(300) DEFAULT NULL,
  `user_phone` varchar(20) DEFAULT NULL,
  `user_address` varchar(300) DEFAULT NULL,
  `user_notes` varchar(300) DEFAULT NULL,
  `user_status` tinyint(4) NOT NULL DEFAULT 1,
  `google_uid` varchar(255) DEFAULT NULL,
  `line_uid` varchar(255) DEFAULT NULL,
  `line_access_token` text DEFAULT NULL,
  `user_createtime` datetime NOT NULL,
  `user_updatetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- 傾印資料表的資料 `user`
--

INSERT INTO `user` (`user_id`, `user_name`, `user_nickname`, `user_account`, `user_password`, `user_email`, `user_image`, `user_phone`, `user_address`, `user_notes`, `user_status`, `google_uid`, `line_uid`, `line_access_token`, `user_createtime`, `user_updatetime`) VALUES
(1, '賴元皇', 'LL', NULL, '12345', 'LL@gmail.com', 'AAA', '09878696696', '聖德基督學院', 'ㄈㄈ', 1, NULL, NULL, NULL, '2024-04-23 15:14:23', '2024-04-23 15:14:23');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `article`
--
ALTER TABLE `article`
  ADD PRIMARY KEY (`article_id`);

--
-- 資料表索引 `article_comment`
--
ALTER TABLE `article_comment`
  ADD PRIMARY KEY (`article_comment_id`);

--
-- 資料表索引 `article_favorite`
--
ALTER TABLE `article_favorite`
  ADD PRIMARY KEY (`article_favorite_id`);

--
-- 資料表索引 `article_image`
--
ALTER TABLE `article_image`
  ADD PRIMARY KEY (`article_image_id`);

--
-- 資料表索引 `cart_item`
--
ALTER TABLE `cart_item`
  ADD PRIMARY KEY (`cart_item_id`);

--
-- 資料表索引 `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`category_id`);

--
-- 資料表索引 `category_sub`
--
ALTER TABLE `category_sub`
  ADD PRIMARY KEY (`subcategory_id`);

--
-- 資料表索引 `class`
--
ALTER TABLE `class`
  ADD PRIMARY KEY (`class_id`);

--
-- 資料表索引 `class_commet`
--
ALTER TABLE `class_commet`
  ADD PRIMARY KEY (`class_commet_id`);

--
-- 資料表索引 `class_favorite`
--
ALTER TABLE `class_favorite`
  ADD PRIMARY KEY (`class_favorite_id`);

--
-- 資料表索引 `class_image`
--
ALTER TABLE `class_image`
  ADD PRIMARY KEY (`class_image_id`);

--
-- 資料表索引 `class_teacher`
--
ALTER TABLE `class_teacher`
  ADD PRIMARY KEY (`teacher_id`);

--
-- 資料表索引 `coupon`
--
ALTER TABLE `coupon`
  ADD PRIMARY KEY (`coupon_id`);

--
-- 資料表索引 `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`product_id`);

--
-- 資料表索引 `product_favorite`
--
ALTER TABLE `product_favorite`
  ADD PRIMARY KEY (`product_favorite_id`);

--
-- 資料表索引 `product_image`
--
ALTER TABLE `product_image`
  ADD PRIMARY KEY (`product_image_id`);

--
-- 資料表索引 `purchase_item`
--
ALTER TABLE `purchase_item`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `purchase_order`
--
ALTER TABLE `purchase_order`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `article`
--
ALTER TABLE `article`
  MODIFY `article_id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `article_comment`
--
ALTER TABLE `article_comment`
  MODIFY `article_comment_id` int(6) NOT NULL AUTO_INCREMENT;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `article_favorite`
--
ALTER TABLE `article_favorite`
  MODIFY `article_favorite_id` int(6) NOT NULL AUTO_INCREMENT;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `article_image`
--
ALTER TABLE `article_image`
  MODIFY `article_image_id` int(6) NOT NULL AUTO_INCREMENT;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `cart_item`
--
ALTER TABLE `cart_item`
  MODIFY `cart_item_id` int(6) NOT NULL AUTO_INCREMENT;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `category`
--
ALTER TABLE `category`
  MODIFY `category_id` int(6) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `category_sub`
--
ALTER TABLE `category_sub`
  MODIFY `subcategory_id` int(6) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `class`
--
ALTER TABLE `class`
  MODIFY `class_id` int(6) NOT NULL AUTO_INCREMENT;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `class_commet`
--
ALTER TABLE `class_commet`
  MODIFY `class_commet_id` int(6) NOT NULL AUTO_INCREMENT;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `class_favorite`
--
ALTER TABLE `class_favorite`
  MODIFY `class_favorite_id` int(6) NOT NULL AUTO_INCREMENT;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `class_image`
--
ALTER TABLE `class_image`
  MODIFY `class_image_id` int(6) NOT NULL AUTO_INCREMENT;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `class_teacher`
--
ALTER TABLE `class_teacher`
  MODIFY `teacher_id` int(6) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `coupon`
--
ALTER TABLE `coupon`
  MODIFY `coupon_id` int(6) NOT NULL AUTO_INCREMENT;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `product`
--
ALTER TABLE `product`
  MODIFY `product_id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10843;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `product_favorite`
--
ALTER TABLE `product_favorite`
  MODIFY `product_favorite_id` int(6) NOT NULL AUTO_INCREMENT;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `product_image`
--
ALTER TABLE `product_image`
  MODIFY `product_image_id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=63;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `purchase_item`
--
ALTER TABLE `purchase_item`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
