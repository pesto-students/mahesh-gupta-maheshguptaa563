DROP DATABASE IF EXISTS warehouse;
CREATE DATABASE warehouse; 
USE warehouse;

--  CITIES(CITY CHAR(20),STATE CHAR(20))
CREATE TABLE IF NOT EXISTS CITIES(
	CID INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
	CITY CHAR(20) NOT NULL,
    STATE CHAR(20) NOT NULL
);

ALTER TABLE cities AUTO_INCREMENT=1001;

-- WAREHOUSES(WID INTEGER,WNAME CHAR(30),LOCATIONCHAR(20),EXTRA CONTEXT json)
CREATE TABLE IF NOT EXISTS WAREHOUSES(
	WID INTEGER PRIMARY KEY AUTO_INCREMENT,
    WNAME CHAR(30) NOT NULL,
    LOCATION CHAR(20) NOT NULL
)AUTO_INCREMENT=2001;

-- STORES(SID INTEGER,STORE_NAME CHAR(20), LOCATION_CITYCHAR(20))
CREATE TABLE IF NOT EXISTS STORES(
	SID INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    STORE_NAME CHAR(20) NOT NULL,
    LOCATION_CITY CHAR(20) NOT NULL
)AUTO_INCREMENT=3001;

-- CUSTOMER(CNO INTEGER, CNAME CHAR(50),ADDR VARCHAR(50),CU_CITY CHAR(20))
CREATE TABLE IF NOT EXISTS CUSTOMER(
	CNO INTEGER  PRIMARY KEY AUTO_INCREMENT,
    CNAME CHAR(50) NOT NULL,
    ADDR VARCHAR(50) NOT NULL,
    CU_CITY CHAR(20) NOT NULL
)AUTO_INCREMENT=4001;

-- ORDERS(ONO INT,ODATE DATE)
CREATE TABLE IF NOT EXISTS ORDERS(
	ONO INTEGER  PRIMARY KEY AUTO_INCREMENT,
    ODATE DATE NOT NULL
)AUTO_INCREMENT=5001;

-- ITEMS(ITEMNO INTEGER,DESCRIPTION TEXT,WEIGHT DECIMAL(5,2),COST DECIMAL(5,2) )
CREATE TABLE IF NOT EXISTS ITEMS(
	ITEMNO INTEGER PRIMARY KEY AUTO_INCREMENT,
    DESCRIPTION TEXT NOT NULL,
    WEIGHT DECIMAL(5,2) NOT NULL,
    COST DECIMAL(5,2) NOT NULL
)AUTO_INCREMENT=6001;

-- CITIES-WAREHOUSES 1 TO M
ALTER TABLE warehouses ADD CID INTEGER NOT NULL, ADD FOREIGN KEY(CID) REFERENCES CITIES(CID);

-- WAREHOUSES - STORES 1 TO M
ALTER TABLE STORES ADD WID INTEGER NOT NULL, ADD FOREIGN KEY(WID) REFERENCES WAREHOUSES(WID);

-- CUSTOMER – ORDERS 1 TO M
ALTER TABLE ORDERS ADD CNO INTEGER NOT NULL, ADD FOREIGN KEY(CNO) REFERENCES CUSTOMER(CNO);

-- ITEMS – ORDERS M TO M relationship with descriptive attribute ordered_quantity
CREATE TABLE IF NOT EXISTS ordered_quantity(
	ITEMNO INTEGER NOT NULL,
    ONO INTEGER NOT NULL,
    FOREIGN KEY(ITEMNO) REFERENCES items(ITEMNO),
    FOREIGN KEY(ONO) REFERENCES orders(ONO),
    PRIMARY KEY(ITEMNO,ONO)
);

-- STORES-ITEMS M TO M RELATION with descriptive attribute quantity
CREATE TABLE IF NOT EXISTS quantity(
	SID INTEGER NOT NULL,
    ITEMNO INTEGER NOT null,
    FOREIGN KEY(SID) REFERENCES stores(SID),
    FOREIGN KEY(ITEMNO) REFERENCES items(ITEMNO),
    PRIMARY KEY(SID, ITEMNO)
);


--------------------insert---------------------------------------------

-- Insert into the cities
use warehouse;
ALTER TABLE cities AUTO_INCREMENT=1001;
insert into cities(CITY, STATE) values ('Pune','Maharastra');
insert into cities(CITY, STATE) values ('Itanagar', 'Arunachal Pradesh');
insert into cities(CITY, STATE) values ('Dispur', 'Assam');
insert into cities(CITY, STATE) values ('Patna', 'Bihar');
insert into cities(CITY, STATE) values ('Raipur', 'Chhattisgarh');

-- Insert into warehouses
use warehouse;
ALTER TABLE warehouses AUTO_INCREMENT=2001;
insert into warehouses(WNAME, LOCATION, CID) values 
('W01','Pune01', "1001"),
('W02','Pune02', "1001"),
('W03','Pune03', "1001"),
('W04','Itanagar01', "1002"),
('W05','Itanagar02', "1002"),
('W06','Dispur01', "1003"),
('W07','Dispur02', "1003"),
('W08','Patna01', "1003"),
('W09','Patna02', "1004");

-- Insert into stores
use warehouse;
ALTER TABLE stores AUTO_INCREMENT=3001;
insert into stores(STORE_NAME, LOCATION_CITY, WID) values 
('S01','AMRTVT_ANDRA01', "2001"),
('S02','AMRTVT_ANDRA02', "2001"),
('S03','ITNGR_ARNCP01', "2004"),
('S04','ITNGR_ARNCP02', "2004"),
('S05','ITNGR_ARNCP03', "2004"),
('S06','Dispur_ASSM01', "2006"),
('S07','Dispur_ASSM02', "2007"),
('S08','PTNA_BHR01', "2009"),
('S09','PTNA_BHR02', "2009");

-- Insert into customer
use warehouse;
ALTER TABLE customer AUTO_INCREMENT=4001;
insert into customer(CNAME, ADDR, CU_CITY) values 
('Mr. Patil','Gandhi Nagar', "Amaravati"),
('Sahil Senapthy','Nehru Nagar', "Amaravati"),
('Yateesh Reddy','Housing Board', "Itanagar"),
('Aishwarya Tripathy','Park Street', "Dispur"),
('Pranshu Sharma','BTM Layout', "Dispur"),
('Vasu Vallabh','Banshankari', "Patna"),
('Vinay Prakash','Silk Board', "Patna"),
('Deepak Verma','Bank Colony', "Raipur"),
('Ashutosh Padhy','Sarojini Nagar', "Raipur");

-- Insert into orders
use warehouse;
ALTER TABLE orders AUTO_INCREMENT=5001;
insert into orders(ODATE, CNO) values 
('2022-01-15', "4001"),
('2022-02-22', "4001"),
('2022-03-09', "4001"),
('2022-03-11', "4005"),
('2022-04-27', "4005"),
('2022-05-13', "4003"),
('2022-06-10', "4006"),
('2022-06-17', "4007"),
('2022-07-04', "4009");

-- Insert into items
use warehouse;
ALTER TABLE items AUTO_INCREMENT=6001;
insert into items(DESCRIPTION, WEIGHT, COST) values 
('Apples', '2.00', '440.00'),
('Avocado', '2.00', '360.00'),
('Black Grape', '5.00', '400.00'),
('Cherry', '0.50', '300.00'),
('Date', '1', '480.00'),
('Jackfruit', '2.00', '340.00'),
('Papaya', '1', '230.00'),
('Pear', '1', '185.00'),
('Watermelon', '1', '25.00');

-- Insert into ordered_quantity
use warehouse;
ALTER TABLE ordered_quantity AUTO_INCREMENT=7001;
insert into ordered_quantity(ITEMNO, ONO) values 
('6001', '5001' ),
('6001', '5002'),
('6003', '5003'),
('6003', '5004'),
('6005', '5006'),
('6006', '5006'),
('6007', '5007'),
('6007', '5008'),
('6008', '5009');

-- Insert into quantity
use warehouse;
ALTER TABLE quantity AUTO_INCREMENT=8001;
insert into quantity(SID, ITEMNO) values 
('3001', '6001' ),
('3001', '6002'),
('3003', '6003'),
('3003', '6004'),
('3005', '6006'),
('3006', '6006'),
('3007', '6007'),
('3007', '6008'),
('3008', '6009');