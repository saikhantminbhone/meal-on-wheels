-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 27, 2022 at 10:13 AM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mealonwheels`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `admin_id` int(11) NOT NULL,
  `firstname` varchar(45) NOT NULL,
  `lastname` varchar(45) NOT NULL,
  `birthday` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `phonenumber` varchar(45) NOT NULL,
  `available_date` varchar(45) NOT NULL,
  `nrc` varchar(45) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`admin_id`, `firstname`, `lastname`, `birthday`, `email`, `password`, `phonenumber`, `available_date`, `nrc`, `created_at`) VALUES
(1, 'Sai Khant', 'Min Bhone', '24/3/2003', 'admin@gmail.com', 'admin', '09766577909', 'weekday', '1/MyaNyaNa(N)174735', '2022-06-11 23:30:59');

-- --------------------------------------------------------

--
-- Table structure for table `caregivers`
--

CREATE TABLE `caregivers` (
  `caregiver_id` int(11) NOT NULL,
  `caregiver_firstname` varchar(50) NOT NULL,
  `caregiver_lastname` varchar(50) NOT NULL,
  `caregiver_birthday` varchar(50) NOT NULL,
  `caregiver_email` varchar(45) NOT NULL,
  `caregiver_password` varchar(45) NOT NULL,
  `caregiver_phonenumber` varchar(45) NOT NULL,
  `caregiver_address` varchar(255) NOT NULL,
  `caregiver_city` varchar(45) NOT NULL,
  `caregiver_nrc` varchar(45) NOT NULL,
  `caregiver_reason` text NOT NULL,
  `caregiver_available_date` varchar(45) NOT NULL,
  `caregiver_created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `caregivers`
--

INSERT INTO `caregivers` (`caregiver_id`, `caregiver_firstname`, `caregiver_lastname`, `caregiver_birthday`, `caregiver_email`, `caregiver_password`, `caregiver_phonenumber`, `caregiver_address`, `caregiver_city`, `caregiver_nrc`, `caregiver_reason`, `caregiver_available_date`, `caregiver_created_at`) VALUES
(1, '', '', '', '', '', '', '', '', '', '', '', '2022-06-13 21:49:03'),
(2, 'Kyaw ', 'Kyaw', '2022-06-24', 'caregiver@gmail.com', 'care', '0938172631', 'ygn', 'ygn', '12/KAMAYA(N)093218', 'IDK', 'weekday', '2022-06-13 21:49:42'),
(3, 'Zaw', 'Zaw', '1999-06-09', 'zaw@gmail.com', 'zaw', '09129381', 'Yankin', 'Ygn', '12/KAMAYA(N)093218', 'IDK', 'weekday', '2022-06-13 22:31:36');

-- --------------------------------------------------------

--
-- Table structure for table `donators`
--

CREATE TABLE `donators` (
  `donator_id` int(11) NOT NULL,
  `firstname` varchar(45) NOT NULL,
  `lastname` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `phonenumber` varchar(45) NOT NULL,
  `amount` varchar(45) NOT NULL,
  `date` varchar(45) NOT NULL,
  `name` varchar(255) NOT NULL,
  `cashout_amount` varchar(45) NOT NULL,
  `cashout_description` varchar(45) NOT NULL,
  `cashout_date` varchar(45) NOT NULL,
  `admin_id` int(11) DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `donators`
--

INSERT INTO `donators` (`donator_id`, `firstname`, `lastname`, `email`, `phonenumber`, `amount`, `date`, `name`, `cashout_amount`, `cashout_description`, `cashout_date`, `admin_id`, `created_at`) VALUES
(1, 'Aung', 'Aung', 'aung@gmail.com', '09766577909', '10000', '11/6/2022', '', '', '', '', NULL, '2022-06-11 23:36:30'),
(2, '', '', '', '', '', '', 'Medicine', '2500', 'Donation medicine to old person', '11/6/2022', 1, '2022-06-11 23:37:15'),
(3, '', '', '', '', '', '2022/06/13 11:01:35', '', '', '', '', NULL, '2022-06-13 15:31:35'),
(4, 'Zay ', 'Ye\'', 'donor@gmail.com', '0927663213', '100', '2022/06/13 11:01:35', '', '', '', '', NULL, '2022-06-13 15:31:35'),
(5, '', '', '', '', '', '2022/06/13 19:59:52', '', '', '', '', NULL, '2022-06-14 00:29:52'),
(6, 'Jen', 'Jen', 'jen@gmail.com', '09871231', '150', '2022/06/13 19:59:52', '', '', '', '', NULL, '2022-06-14 00:29:52'),
(7, '', '', '', '', '', '2022/06/13 20:06:02', '', '', '', '', NULL, '2022-06-14 00:36:02'),
(8, 'zzz', 'zz', 'zz@gmail.com', '09129381', '230', '2022/06/13 20:06:02', '', '', '', '', NULL, '2022-06-14 00:36:02'),
(9, '', '', '', '', '', '', '', '', '', '2022-06-13 20:26:46', 1, '2022-06-14 00:56:46'),
(10, '', '', '', '', '', '', 'test', '1000', 'test', '2022-06-13 20:26:46', 1, '2022-06-14 00:56:46'),
(11, '', '', '', '', '', '2022/06/23 09:06:28', '', '', '', '', NULL, '2022-06-23 13:36:28'),
(12, 'Aung', 'Thu', 'aaungthu663@gmail.com', '0912312433', '100', '2022/06/23 09:06:28', '', '', '', '', NULL, '2022-06-23 13:36:28');

-- --------------------------------------------------------

--
-- Table structure for table `meals`
--

CREATE TABLE `meals` (
  `meal_id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `ingredients` varchar(45) NOT NULL,
  `description` text NOT NULL,
  `meal_type` varchar(45) NOT NULL,
  `meal_image` text NOT NULL,
  `date` varchar(45) NOT NULL,
  `status` varchar(45) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `meals`
--

INSERT INTO `meals` (`meal_id`, `name`, `ingredients`, `description`, `meal_type`, `meal_image`, `date`, `status`, `created_at`) VALUES
(1, 'Roast Turkey', 'Turkey, gravy, green beans, stuffing plus fru', 'Low in fat and rich in protein, Vitamin B3, B6 and B12, support thyroid function, immunity, bone health and energy production', 'normal_meal', 'http://res.cloudinary.com/dya61ymya/image/upload/v1654968070/odk3h3teyr2bilynincy.jpg', 'weekday', 'approved', '2022-06-11 23:51:09'),
(2, 'Turkey Tetrazinn', 'Egg noodle turkey tetrazzini with broccoli, b', 'Slash calories and fat in half and reduce saturated fat by a whopping 80 per cent.', 'normal_meal', 'http://res.cloudinary.com/dya61ymya/image/upload/v1654968141/vb6cnfs0zvax6ddge47u.jpg', 'weekend', 'created', '2022-06-11 23:52:19'),
(3, 'Breakfast sandwiches', 'Scrambled egg, turkey sausage and cheese on a', 'a storehouse of protein, vitamins, calcium etc. and has a long list of health benefits.', 'normal_meal', 'http://res.cloudinary.com/dya61ymya/image/upload/v1654968186/jlicvmj7txdikbcwdjpq.jpg', 'weekday', 'approved', '2022-06-11 23:53:04'),
(4, 'Breakfast hashbrowns', 'Hash browns scrambled with cheesy eggs served', 'very healthy dish to eat for breakfast and may improve blood sugar control and Digestive Health', 'normal_meal', 'http://res.cloudinary.com/dya61ymya/image/upload/v1654968241/km74uhyw1givig9rq7fy.jpg', 'weekend', 'approved', '2022-06-11 23:53:59'),
(5, 'Beef Pot Roast', 'slow-roasted goat, chicken suqaar, fish and v', 'very rich in protein, support to build and maintain muscles, grow and repair tissues, stimulate your immune system and produce enzymes and hormones.', 'normal_meal', 'http://res.cloudinary.com/dya61ymya/image/upload/v1654968294/tu9ga36pteu2dkzhio6g.jpg', 'weekend', 'created', '2022-06-11 23:54:52'),
(6, 'Cheesy Broccoli and Pepper Baked Orzo', 'Dry orzo pasta, honey, balsamic vinegar, oliv', 'Low calorie, healthy and tasty', 'vegetable', 'http://res.cloudinary.com/dya61ymya/image/upload/v1654968416/wpwsq5qlf5in5duzhn84.jpg', 'weekday', 'approved', '2022-06-11 23:56:54'),
(7, 'Peanut Butter Blueberry Oatmeal', 'Sweet-and-savory oatmeal served alongside scr', 'high in vitamins and minerals such as magnesium, phosphorus, folate, vitamin B1 and vitamin B5', 'vegetable', 'http://res.cloudinary.com/dya61ymya/image/upload/v1654968467/crhvlv8tspr95ozwdvgp.jpg', 'weekend', 'created', '2022-06-11 23:57:46'),
(8, 'Lentil Soup', 'Savory lentil soup served with white rice and', 'May help prevent heart disease, significantly reduce bad cholesterol in the body and, as a result, reduce the risk of cardiovascular disease', 'vegetable', 'http://res.cloudinary.com/dya61ymya/image/upload/v1654968554/esluipm9wbhtlqmjpcah.jpg', 'weekday', 'submited', '2022-06-11 23:59:12');

-- --------------------------------------------------------

--
-- Table structure for table `members`
--

CREATE TABLE `members` (
  `member_id` int(11) NOT NULL,
  `caregiver_id` int(11) NOT NULL DEFAULT 1,
  `member_firstname` varchar(45) NOT NULL,
  `member_lastname` varchar(45) NOT NULL,
  `member_birthday` varchar(45) NOT NULL,
  `member_email` varchar(45) NOT NULL,
  `member_password` varchar(45) NOT NULL,
  `member_phonenumber` varchar(45) NOT NULL,
  `member_address` varchar(45) NOT NULL,
  `member_city` varchar(45) NOT NULL,
  `member_nrc` varchar(45) NOT NULL,
  `member_request_caregiver` varchar(45) NOT NULL,
  `member_document` text NOT NULL,
  `member_approve` varchar(45) NOT NULL,
  `member_reason` text NOT NULL,
  `member_created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `members`
--

INSERT INTO `members` (`member_id`, `caregiver_id`, `member_firstname`, `member_lastname`, `member_birthday`, `member_email`, `member_password`, `member_phonenumber`, `member_address`, `member_city`, `member_nrc`, `member_request_caregiver`, `member_document`, `member_approve`, `member_reason`, `member_created_at`) VALUES
(1, 2, 'Arnt Zay ', 'Aung', '1998-06-17', 'member@gmail.com', 'member', '09781234', 'Baho st.', 'YGN', '12/KAMAYA(N)093218', 'yes', 'http://res.cloudinary.com/dya61ymya/image/upload/v1655135846/qcz5tpdcvs5uopv5qmwp.jpg', 'accepted', 'I need to take care of me', '2022-06-13 22:27:26'),
(2, 2, 'test', 'test', '01/01/1998', 'test@gmail.com', 'test', '098718273', 'ygn', 'ygn', '87123212', 'yes', 'test', 'accepted', 'idk', '2022-06-14 01:04:44'),
(3, 1, 'Nadi', 'Lin', '1996-12-04', 'nadi@gmail.com', 'nadi', '0912312433', 'Yangon', 'Yangon', '12/dfadsf(N)0912312', 'yes', 'http://res.cloudinary.com/dya61ymya/image/upload/v1655205116/u3v0px3g5h6g4o767e04.jpg', 'accepted', 'Want to be a member', '2022-06-14 17:41:57');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `order_id` int(11) NOT NULL,
  `qty` int(11) NOT NULL,
  `address` varchar(45) NOT NULL,
  `order_latitude` varchar(45) NOT NULL,
  `order_longitude` varchar(45) NOT NULL,
  `meal_type` varchar(45) NOT NULL,
  `status` varchar(45) NOT NULL,
  `member_id` int(11) NOT NULL,
  `rider_id` int(11) DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`order_id`, `qty`, `address`, `order_latitude`, `order_longitude`, `meal_type`, `status`, `member_id`, `rider_id`, `created_at`) VALUES
(7, 1, 'YGN', '12123123', '12312312', 'normal_meal', 'delivered', 1, 1, '2022-06-13 23:19:23'),
(8, 1, 'Yankin , Ahlone , Ygn , 11121', '21.9968226', '96.107875', 'normal_meal', 'rider_accepted', 1, 1, '2022-06-13 23:31:38'),
(9, 1, 'Tarmwe , Ahlone , MDY , 11121', '21.9968137', '96.1078761', 'normal_meal', 'ordered', 1, NULL, '2022-06-13 23:51:27'),
(11, 1, 'Baho st. , Ahlone , YGN , 11121', '21.9968137', '96.1078761', 'normal_meal', 'delivered', 1, 1, '2022-06-13 23:59:15'),
(13, 1, 'yangon , ygn , Yangon , 11201', '', '', 'normal_meal', 'partner_accepted', 1, 1, '2022-06-23 13:35:59');

-- --------------------------------------------------------

--
-- Table structure for table `order_meal`
--

CREATE TABLE `order_meal` (
  `order_id` int(11) NOT NULL,
  `meal_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `order_meal`
--

INSERT INTO `order_meal` (`order_id`, `meal_id`) VALUES
(7, 1),
(9, 1),
(11, 1),
(13, 3);

-- --------------------------------------------------------

--
-- Table structure for table `partners`
--

CREATE TABLE `partners` (
  `partner_id` int(11) NOT NULL,
  `firstname` varchar(45) NOT NULL,
  `lastname` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `birthday` varchar(45) NOT NULL,
  `phonenumber` varchar(45) NOT NULL,
  `address` varchar(45) NOT NULL,
  `partner_latitude` varchar(45) NOT NULL,
  `partner_longitude` varchar(45) NOT NULL,
  `city` varchar(45) NOT NULL,
  `nrc` varchar(45) NOT NULL,
  `reason` text NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `partners`
--

INSERT INTO `partners` (`partner_id`, `firstname`, `lastname`, `email`, `password`, `birthday`, `phonenumber`, `address`, `partner_latitude`, `partner_longitude`, `city`, `nrc`, `reason`, `created_at`) VALUES
(1, 'Swan', 'Yee Lin', 'partner@gmail.com', 'partner', '2000-01-01', '09766577911', '87th, 22×23th\r\nREZAY2021', '24.6098523', '96.2163701', 'Mandalay', '1/MyaNyaN(N)123456', 'I want to do as volunteer\r\n', '2022-06-11 23:35:37');

-- --------------------------------------------------------

--
-- Table structure for table `partner_meal`
--

CREATE TABLE `partner_meal` (
  `partner_id` int(11) NOT NULL,
  `meal_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `partner_meal`
--

INSERT INTO `partner_meal` (`partner_id`, `meal_id`) VALUES
(1, 1),
(1, 2),
(1, 3),
(1, 4),
(1, 5),
(1, 6),
(1, 7),
(1, 8);

-- --------------------------------------------------------

--
-- Table structure for table `riders`
--

CREATE TABLE `riders` (
  `rider_id` int(11) NOT NULL,
  `rider_firstname` varchar(45) NOT NULL,
  `rider_lastname` varchar(45) NOT NULL,
  `rider_birthday` varchar(45) NOT NULL,
  `rider_email` varchar(45) NOT NULL,
  `rider_password` varchar(45) NOT NULL,
  `rider_phonenumber` varchar(45) NOT NULL,
  `rider_address` varchar(45) NOT NULL,
  `rider_city` varchar(45) NOT NULL,
  `rider_nrc` varchar(45) NOT NULL,
  `rider_available_date` varchar(45) NOT NULL,
  `rider_reason` text NOT NULL,
  `rider_created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `riders`
--

INSERT INTO `riders` (`rider_id`, `rider_firstname`, `rider_lastname`, `rider_birthday`, `rider_email`, `rider_password`, `rider_phonenumber`, `rider_address`, `rider_city`, `rider_nrc`, `rider_available_date`, `rider_reason`, `rider_created_at`) VALUES
(1, 'Aung ', 'Thu', '2000-01-01', 'rider@gmail.com', 'rider', '09766577901', '87th, 22×23th\r\nREZAY2021', 'Yangon', '1/MyaNyaN(N)123456', 'weekday', '', '2022-06-11 23:33:21'),
(3, 'Areo', 'Avon', '1996-12-09', 'aero@gmail.com', 'aero', '0912312433', 'Yangon', 'Yangon', '12/dfadsf(N)0912312', 'weekday', 'I want to be a rider', '2022-06-15 14:02:31');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`admin_id`);

--
-- Indexes for table `caregivers`
--
ALTER TABLE `caregivers`
  ADD PRIMARY KEY (`caregiver_id`);

--
-- Indexes for table `donators`
--
ALTER TABLE `donators`
  ADD PRIMARY KEY (`donator_id`),
  ADD KEY `admin_donator` (`admin_id`);

--
-- Indexes for table `meals`
--
ALTER TABLE `meals`
  ADD PRIMARY KEY (`meal_id`);

--
-- Indexes for table `members`
--
ALTER TABLE `members`
  ADD PRIMARY KEY (`member_id`),
  ADD KEY `member_caregiver` (`caregiver_id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`order_id`),
  ADD KEY `member_order` (`member_id`),
  ADD KEY `order_rider` (`rider_id`);

--
-- Indexes for table `order_meal`
--
ALTER TABLE `order_meal`
  ADD KEY `order_meal` (`order_id`),
  ADD KEY `meal_order` (`meal_id`);

--
-- Indexes for table `partners`
--
ALTER TABLE `partners`
  ADD PRIMARY KEY (`partner_id`);

--
-- Indexes for table `partner_meal`
--
ALTER TABLE `partner_meal`
  ADD KEY `meal_partner` (`meal_id`),
  ADD KEY `partner_meal` (`partner_id`);

--
-- Indexes for table `riders`
--
ALTER TABLE `riders`
  ADD PRIMARY KEY (`rider_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `admin_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `caregivers`
--
ALTER TABLE `caregivers`
  MODIFY `caregiver_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `donators`
--
ALTER TABLE `donators`
  MODIFY `donator_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `meals`
--
ALTER TABLE `meals`
  MODIFY `meal_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `members`
--
ALTER TABLE `members`
  MODIFY `member_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `partners`
--
ALTER TABLE `partners`
  MODIFY `partner_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `riders`
--
ALTER TABLE `riders`
  MODIFY `rider_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `donators`
--
ALTER TABLE `donators`
  ADD CONSTRAINT `admin_donator` FOREIGN KEY (`admin_id`) REFERENCES `admin` (`admin_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `members`
--
ALTER TABLE `members`
  ADD CONSTRAINT `member_caregiver` FOREIGN KEY (`caregiver_id`) REFERENCES `caregivers` (`caregiver_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `member_order` FOREIGN KEY (`member_id`) REFERENCES `members` (`member_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `order_rider` FOREIGN KEY (`rider_id`) REFERENCES `riders` (`rider_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `order_meal`
--
ALTER TABLE `order_meal`
  ADD CONSTRAINT `meal_order` FOREIGN KEY (`meal_id`) REFERENCES `meals` (`meal_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `order_meal` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `partner_meal`
--
ALTER TABLE `partner_meal`
  ADD CONSTRAINT `meal_partner` FOREIGN KEY (`meal_id`) REFERENCES `meals` (`meal_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `partner_meal` FOREIGN KEY (`partner_id`) REFERENCES `partners` (`partner_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
