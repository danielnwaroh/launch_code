create database if not exists launchcode;

CREATE TABLE launchcode.quotes (
  `idquotes` varchar(45) NOT NULL,
  `fromLocation` varchar(45) NOT NULL,
  `destinationLocation` varchar(45) NOT NULL,
  `departDate` date NOT NULL,
  `returnDate` date DEFAULT NULL,
  `numPeople` int NOT NULL,
  `transportation` varchar(45) NOT NULL,
  `name` varchar(45) NOT NULL,
  `price` int NOT NULL,
  PRIMARY KEY (`idquotes`)
);

use launchcode;

DROP procedure IF EXISTS `create_quote`;
DELIMITER //
CREATE DEFINER=`root`@`localhost` PROCEDURE `create_quote`(IN paramQuoteID varchar(45), paramFromLocation varchar(45), paramDestinationLocation varchar(45), paramDepartDate date, paramReturnDate date, paramNumPeople int, paramTransportation varchar(45), paramName varchar(45), paramPrice int)
BEGIN
	insert into quotes (idquotes, fromLocation, destinationLocation, departDate, returnDate, numPeople, transportation, name, price) VALUES (paramQuoteID, paramFromLocation, paramDestinationLocation, paramDepartDate, paramReturnDate, paramNumPeople, paramTransportation, paramName, paramPrice);
END //

DELIMITER ;

DROP procedure IF EXISTS `delete_quote`;
DELIMITER //
CREATE DEFINER=`root`@`localhost` PROCEDURE `delete_quote`(IN paramQuoteID varchar(45))
BEGIN
delete from quotes where (`idquotes` = paramQuoteID);
END //

DELIMITER ;