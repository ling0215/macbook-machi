-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2024-04-19 17:47:17
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
  `article_content` varchar(600) NOT NULL,
  `article_createtime` datetime NOT NULL DEFAULT current_timestamp(),
  `article_edittime` datetime NOT NULL DEFAULT current_timestamp(),
  `article_status` tinyint(1) NOT NULL DEFAULT 1,
  `article_category` varchar(50) NOT NULL,
  `category_id_fk` int(11) NOT NULL,
  `subcategory_id_fk` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `article_comment`
--

CREATE TABLE `article_comment` (
  `article_comment_id` int(6) NOT NULL,
  `article_id_fk` int(6) NOT NULL,
  `user_id_fk` int(6) NOT NULL,
  `article_comment_content` varchar(300) NOT NULL,
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
  `product_image_filename` varchar(300) NOT NULL
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
(2, '蛋糕', 1),
(3, '餅乾 / 酥餅', 1),
(4, '塔派', 1),
(5, '奶烙 / 布丁', 1),
(6, '其他', 1);

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
(1, 1, '貝果2', 1),
(2, 1, '肉桂捲 / 荳蔻捲', 1),
(3, 1, '司康', 1),
(4, 1, '吐司', 1),
(5, 2, '戚風蛋糕', 1),
(6, 2, '千層蛋糕', 1),
(7, 2, '乳酪蛋糕', 1),
(8, 2, '提拉米蘇', 1),
(9, 2, '巴斯克乳酪', 1),
(10, 3, '蝴蝶蘇', 1),
(11, 3, '曲奇', 1),
(12, 3, '蛋黃酥', 1),
(13, 3, '鳳梨酥', 1),
(14, 3, '雪花蘇', 1),
(15, 4, '草莓派', 1),
(16, 4, '巧克力派', 1),
(17, 4, '抹茶派', 1),
(18, 4, '檸檬塔', 1),
(19, 4, '堅果塔', 1),
(20, 5, '奶烙', 1),
(21, 5, '布丁', 1),
(22, 6, '牛軋糖', 1),
(23, 6, '泡芙', 1),
(24, 6, '茶飲', 1),
(25, 6, '果乾', 1),
(26, 6, '抹醬 / 果醬', 1),
(31, 7, '蛋糕', 1),
(32, 7, '馬卡龍', 1),
(33, 7, '達克瓦茲', 1),
(34, 7, '麵包', 1),
(35, 7, '巧克力', 1),
(36, 7, '乳酪', 1),
(37, 7, '塔派 ', 1);

-- --------------------------------------------------------

--
-- 資料表結構 `class`
--

CREATE TABLE `class` (
  `class_id` int(6) NOT NULL,
  `class_name` varchar(50) NOT NULL,
  `class_description` varchar(300) NOT NULL,
  `class_description_full` varchar(300) DEFAULT NULL,
  `class_category` varchar(50) DEFAULT NULL,
  `teacher_id_fk` int(6) NOT NULL,
  `class_level` varchar(50) DEFAULT '初學者',
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
  `class_commet_text` varchar(300) NOT NULL,
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
  `class_reply_text` varchar(300) NOT NULL,
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

-- --------------------------------------------------------

--
-- 資料表結構 `user`
--

CREATE TABLE `user` (
  `user_id` int(6) NOT NULL,
  `user_image` varchar(300) DEFAULT NULL,
  `user_name` varchar(50) DEFAULT NULL,
  `user_nickname` varchar(50) DEFAULT NULL,
  `user_email` varchar(300) NOT NULL,
  `user_password` varchar(300) NOT NULL,
  `user_phone` varchar(20) DEFAULT NULL,
  `user_createtime` datetime NOT NULL DEFAULT current_timestamp(),
  `user_updatetime` datetime NOT NULL DEFAULT current_timestamp(),
  `user_address` varchar(300) DEFAULT NULL,
  `user_notes` varchar(300) DEFAULT NULL,
  `user_status` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
  MODIFY `article_id` int(6) NOT NULL AUTO_INCREMENT;

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
  MODIFY `subcategory_id` int(6) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

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
  MODIFY `product_id` int(6) NOT NULL AUTO_INCREMENT;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `product_favorite`
--
ALTER TABLE `product_favorite`
  MODIFY `product_favorite_id` int(6) NOT NULL AUTO_INCREMENT;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `product_image`
--
ALTER TABLE `product_image`
  MODIFY `product_image_id` int(6) NOT NULL AUTO_INCREMENT;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(6) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
